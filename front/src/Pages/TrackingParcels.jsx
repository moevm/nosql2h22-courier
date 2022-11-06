import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../Components/Button'
import InputTitleup from '../Components/InputTitleup'
import CenterPage from '../Components/templateStyle/CenterPage'
import CompanyLogo from '../Components/templateStyle/CompanyLogo'
import Container from '../Components/templateStyle/Container'
import request from '../packages/API'

const WrapperTracker = (props) => {
    const { children } = props
    const navigate = useNavigate();

    return (
        <CenterPage>
            <Button onClick={() => navigate('/')} className={Button.style.success + " top_right txt_black button__fs26"} >На главную</Button>
            <div className='centering_on_page__logo_login'><CompanyLogo /></div>
            <Container className={Container.style.login}>
                {children}
            </Container>
        </CenterPage>
    )
}

function TrackingParcels() {
    const trackNumber = useRef();
    const [tracker, setTracker] = useState();
    const [trackerId, setTrackerId] = useState();
    const [currentPage, setCurrentPage] = useState();

    const toInitState = () => {
        setTracker();
        setTrackerId();
        setCurrentPage();
    }

    const checkTrackNum = async () => {
        try {

            let inputValue = trackNumber.current.value;
            setTrackerId(inputValue);
            if (inputValue) {
                const currTracker = (await request.tracker.post(inputValue)).data.current_tracker_info[0];
                console.log(currTracker)
                if (currTracker._id) {
                    setTracker(currTracker);
                    setCurrentPage('tracker is found');
                } else {
                    setTracker()
                    throw { errorType: 404, message: "Такого трекера нет" }
                }
            }

        } catch (error) {
            setCurrentPage('not found tracker')
            console.log(error);
        }
    }
    console.log(tracker?.complete)
    switch (currentPage) {
        case "not found tracker":
            return (
                <WrapperTracker>
                    <div className="container__wrapped_warning" >Ошибка</div>
                    <p>Заказа с номером "{trackerId}" <br /> не существует</p>
                    <Button className={Button.style.success + 'button__fs26'} style={{ marginTop: "48rem" }} onClick={toInitState} >К трекеру</Button>
                </WrapperTracker>)
        case 'tracker is found':
            return (
                <WrapperTracker>
                    
                        <div className="container__wrapped">Отследить посылку</div>
                    <div className='container__alightItemStart'>
                        <p>Поссылка: {trackerId}</p>
                        <p>Ожидаемое время доставки: {tracker.expected_date}</p>
                        <p>Статус: {tracker.complete ? "Завершено" : "Не завершено"}</p>
                        <p>Курьер: {tracker.courier_info[0]} {tracker.courier_info[1]}</p>
                    </div>
                </WrapperTracker>
            )
        default:
            return (
                <WrapperTracker>
                    <div className="container__wrapped">Отследить посылку</div>
                    <InputTitleup className={InputTitleup.style.login} placeholder={"Трек номер"} refTo={trackNumber}></InputTitleup>
                    <Button className={Button.style.success + 'button__fs26'} style={{ marginTop: "48rem" }} onClick={checkTrackNum} >Отследить</Button>
                </WrapperTracker>
            )

    }
}

export default TrackingParcels