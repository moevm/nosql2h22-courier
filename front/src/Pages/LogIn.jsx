

import React, { useRef, useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { Login } from '../Actions/login';
import { Registration } from '../Actions/registration';
import Button from '../Components/Button'
import InputTitleup from '../Components/InputTitleup'
import CenterPage from '../Components/templateStyle/CenterPage'
import CompanyLogo from '../Components/templateStyle/CompanyLogo'
import Container from '../Components/templateStyle/Container'

export default function LogIn() {
    const navigate = useNavigate();
    const [authError, setAuthError] = useState('');
    const [isRegistration, setIsRegistration] = useState(false);
    const dispatch = useDispatch();


    const emailRef = useRef();
    const passwordRef = useRef();
    const fNameRef = useRef();
    const sNameRef = useRef();
    const tNameRef = useRef();

    const setError = (error) => {
        setAuthError(error)
    }

    const handlerLogIn = () => {
        dispatch(Login(emailRef.current.value, passwordRef.current.value, navigate, setError))
    }

    const handleRegistration = () => {
        if (isRegistration) {

            dispatch(Registration(fNameRef.current.value,
                sNameRef.current.value,
                tNameRef.current.value,
                emailRef.current.value,
                passwordRef.current.value,
                navigate, setError))
            if(!authError) setIsRegistration(false);
            return;
        }
        setAuthError('')
        setIsRegistration(true);
    }



    return (
        <CenterPage>
            <Button onClick={() => navigate('/tracking')} className={Button.style.success + " top_right txt_black button__fs26"}>Трекинг поссылок</Button>
            <div className='centering_on_page__logo_login'><CompanyLogo /></div>
            <Container className={Container.style.login}>
                <div className='container__wrapped'>Вход в личный кабинет</div>
                {!isRegistration &&
                    <>
                        <InputTitleup className={InputTitleup.style.login} placeholder={"Логин"} type='email' refTo={emailRef}></InputTitleup>
                        <InputTitleup className={InputTitleup.style.login} placeholder={"Пароль"} type='password' refTo={passwordRef} ></InputTitleup>
                    </>
                }

                {isRegistration &&
                    <>
                        
                        <InputTitleup className={InputTitleup.style.login} placeholder={"Имя"} type='text' refTo={fNameRef} ></InputTitleup>
                        <InputTitleup className={InputTitleup.style.login} placeholder={"Фамилия"} type='text' refTo={sNameRef} ></InputTitleup>
                        <InputTitleup className={InputTitleup.style.login} placeholder={"Отчество"} type='text' refTo={tNameRef} ></InputTitleup>
                        <InputTitleup className={InputTitleup.style.login} placeholder={"Логин"} type='email' refTo={emailRef}></InputTitleup>
                        <InputTitleup className={InputTitleup.style.login} placeholder={"Пароль"} type='password' refTo={passwordRef} ></InputTitleup>
                    </>
                }


                <div className='container__button-line'>
                    <Button className={Button.style.success + "button__fs26"} style={{ marginTop: "48rem" }} onClick={isRegistration ? () => setIsRegistration(false) : handlerLogIn} >{isRegistration ? "Назад" : "Войти"}</Button>
                    <Button className={Button.style.default + "button__fs26"} style={{ marginTop: "48rem" }} onClick={handleRegistration} > Регистрация</Button>
                </div>
                {authError && <p className='txt_danger mes'>{authError}</p>}
            </Container>
        </CenterPage>
    )
}

















