import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../Components/Button'
import InputTitleup from '../Components/InputTitleup'
import CenterPage from '../Components/templateStyle/CenterPage'
import CompanyLogo from '../Components/templateStyle/CompanyLogo'
import Container from '../Components/templateStyle/Container'

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
    const [trackerStatus, setTrackerStatus] = useState();
    const [trackerId, setTrackerId] = useState();
    const [currentPage, setCurrentPage] = useState();

    const toInitState = () => {
        setTrackerStatus();
        setTrackerId();
        setCurrentPage();
    }

    const checkTrackNum = () => {
        try {
            
            let inputValue = trackNumber.current.value;
            if (inputValue) {
                let checkTracker = {}; //getTrackerInfo(inputValue);
                if (checkTracker.id) {
                    setTrackerStatus(checkTracker.status);
                    setTrackerId(checkTracker.id);
                    setCurrentPage('tracker is found');
                } else {
                    setTrackerId(inputValue);
                    setTrackerStatus('')
                    throw { errorType: 404, message: "Такого трекера нет" }
                }
            }

        } catch (error) {
            setCurrentPage('not found tracker')
            console.log(error);
        }
    }

    switch (currentPage) {
        case "not found tracker":
            return (
                <WrapperTracker>
                    <div className="container__wrapped_warning" >Ошибка</div>
                    <p>Заказа с номером {trackerId} <br /> не существует</p>
                    <Button className={Button.style.success + 'button__fs26'} style={{ marginTop: "48rem" }} onClick={toInitState} >К трекеру</Button>
                </WrapperTracker>)
        case 'tracker is found':
            return (
                <WrapperTracker>
                    <div className="container__wrapped">Отследить посылку</div>
                    <p>Поссылка {trackerId}:</p>
                    <p>{trackerStatus}</p>
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