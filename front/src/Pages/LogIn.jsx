

import React, { useRef, useState } from 'react'
import {useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';

import { Login } from '../Actions/login';
import Button from '../Components/Button'
import InputTitleup from '../Components/InputTitleup'
import CenterPage from '../Components/templateStyle/CenterPage'
import CompanyLogo from '../Components/templateStyle/CompanyLogo'
import Container from '../Components/templateStyle/Container'

export default function LogIn() {
    const navigate = useNavigate();
    const [authError, setAuthError] = useState('');
    const dispatch = useDispatch();


    const emailRef = useRef();
    const passwordRef = useRef();
    const emailRegExp = '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])';

    const setError = (error) =>{
        setAuthError(error)
    }

    const handlerLogIn = () =>{
        dispatch(Login(emailRef.current.value,passwordRef.current.value,navigate,setError))
    }



    return (
        <CenterPage>
            <Button onClick={() => navigate('/tracking')} className={Button.style.success + " top_right txt_black button__fs26"}>Трекинг поссылок</Button>
            <div className='centering_on_page__logo_login'><CompanyLogo /></div>
            <Container className={Container.style.login}>
                <div className='container__wrapped'>Вход в личный кабинет</div>
                <InputTitleup className={InputTitleup.style.login} placeholder={"Логин"} type='email' refTo={emailRef} pattern={emailRegExp}></InputTitleup>
                <InputTitleup className={InputTitleup.style.login} placeholder={"Пароль"} type='password' refTo={passwordRef} ></InputTitleup>
                <Button className={Button.style.success + "button__fs26"} style={{ marginTop: "48rem" }} onClick={handlerLogIn} > Войти</Button>
                {authError && <p className='txt_danger mes'>{authError}</p>}
            </Container>
        </CenterPage>
    )
}








 








 