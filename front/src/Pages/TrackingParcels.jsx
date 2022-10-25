import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button, { buttonStyle } from '../Components/Button'
import InputTitleup, { inputStyleTemplate } from '../Components/InputTitleup'
import CenterPage from '../Components/templateStyle/CenterPage'
import CompanyLogo from '../Components/templateStyle/CompanyLogo'
import Container, { containerStyleTEmplate } from '../Components/templateStyle/Container'


function TrackingParcels() {
    const trackNumber = useRef();
    const navigate = useNavigate();
    const [trackerError, setTreckerError] = useState('');
    const [trackerStatus, setTrackerStatus] = useState();
    const [trackerId, setTrackerId] = useState();

    const toInitState = () =>{
        setTreckerError('');
        setTrackerStatus();
        setTrackerId();
    }

    const checkTrackNum = () => {
        try {
            let inputValue = trackNumber.current.value;
            if (inputValue) {
                let checkTracker = {}; //getTrackerInfo(inputValue);
                if (checkTracker.id) {
                    setTrackerStatus(checkTracker.status);
                    setTrackerId(checkTracker.id);
                } else {
                    setTrackerId(inputValue);
                    setTrackerStatus('')
                    throw { message: "Такого трекера нет" }
                }
            }

        } catch (error) {
            setTreckerError(error.message);
            console.log(error);
        }
    }

    return (
        <CenterPage>
            <Button onClick={() => navigate('/')} className={buttonStyle.success + " top_right txt_black button__fs26"} >На главную</Button>
            <div className='centering_on_page__logo_login'><CompanyLogo /></div>
            <Container className={containerStyleTEmplate.login}>
                <div className={trackerError?"container__wrapped_warning":"container__wrapped"}>{trackerError?"Ошибка":"Отследить посылку"}</div>

                {!(trackerError || trackerStatus) && <>
                    <InputTitleup className={inputStyleTemplate.login} placeholder={"Трек номер"} refTo={trackNumber}></InputTitleup>
                    <Button  className={buttonStyle.success + 'button__fs26'} style={{ marginTop: "48rem" }} onClick={checkTrackNum} >Отследить</Button>
                </>}
                {trackerError &&
                    <>
                        <p>Заказа с номером {trackerId} <br/> не существует</p>
                        <Button  className={buttonStyle.success + 'button__fs26'} style={{ marginTop: "48rem" }} onClick={toInitState} >К трекеру</Button>
                    </>
                }

                {trackerStatus && <>
                    <p>Поссылка {trackerId}:</p>
                    <p>{trackerStatus}</p>
                </>}

            </Container>
        </CenterPage>

    )
}

export default TrackingParcels