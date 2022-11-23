

import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { auth, Login } from '../Actions/login';
import { Registration } from '../Actions/registration';
import Button from '../Components/Button'
import InputTitleup from '../Components/InputTitleup'
import CenterPage from '../Components/templateStyle/CenterPage'
import CompanyLogo from '../Components/templateStyle/CompanyLogo'
import Container from '../Components/templateStyle/Container'
import { useEffect } from 'react';
import storage from '../packages/storage';

export default function LogIn() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [isRegistration, setIsRegistration] = useState(false);
    const [isAuth] = useState(useSelector(state => state.user).isAuth)
    const dispatch = useDispatch();
    console.log(isAuth)
    // useEffect(()=>{
    //     console.log(isAuth)
    //     if (isAuth) {
    //         navigate('/main');
    //     }
    // },[])

    const emailRef = useRef();
    const passwordRef = useRef();
    const fNameRef = useRef();
    const sNameRef = useRef();
    const tNameRef = useRef();

    const setError = (error) => {
        setErrorMessage(error)
    }

    const handlerLogIn = () => {
        dispatch(Login(emailRef.current.value, passwordRef.current.value, navigate, setError))
    }

    const handleRegistration = async () => {
        if (isRegistration) {
            if (fNameRef.current.value == '' || sNameRef.current.value == '' ||
                emailRef.current.value == '' || passwordRef.current.value == '') {
                setErrorMessage("Не все поля введены!")
                return;
            }
            let isSuccess = await Registration(
                fNameRef.current.value,
                sNameRef.current.value,
                tNameRef.current.value,
                emailRef.current.value,
                passwordRef.current.value,
                navigate, setError)
            if (isSuccess) {
                setErrorMessage('');
                setIsRegistration(false);
            }

            return;
        }
        setErrorMessage('');
        setIsRegistration(true);
    }


    const isEnterPresed = (e, func) => {
        if (e.key === 'Enter') func();
    }


    return (
        <CenterPage>
            <Button onClick={() => navigate('/tracking')} className={Button.style.success + " top_right txt_black button__fs26"}>Трекинг поссылок</Button>
            <div className='centering_on_page__logo_login'><CompanyLogo /></div>
            <Container className={Container.style.login}>
                <div className='container__wrapped'>Вход в личный кабинет</div>
                {!isRegistration &&
                    <>
                        <InputTitleup className={InputTitleup.style.login} placeholder={"Логин"} type='email' refTo={emailRef} onKeyUp={(e) => isEnterPresed(e, handlerLogIn)}></InputTitleup>
                        <InputTitleup className={InputTitleup.style.login} placeholder={"Пароль"} type='password' refTo={passwordRef} onKeyUp={(e) => isEnterPresed(e, handlerLogIn)}></InputTitleup>
                    </>
                }

                {isRegistration &&

                    <div className='container_sz'>
                        <InputTitleup className={InputTitleup.style.signUp} placeholder={"Имя"} type='text' refTo={fNameRef} isNecessarily onKeyUp={(e) => isEnterPresed(e, handleRegistration)}></InputTitleup>
                        <InputTitleup className={InputTitleup.style.signUp} placeholder={"Фамилия"} type='text' refTo={sNameRef} isNecessarily onKeyUp={(e) => isEnterPresed(e, handlerLogIn)}></InputTitleup>
                        <InputTitleup className={InputTitleup.style.signUp} placeholder={"Отчество"} type='text' refTo={tNameRef} onKeyUp={(e) => isEnterPresed(e, handleRegistration)}></InputTitleup>
                        <InputTitleup className={InputTitleup.style.signUp} placeholder={"Логин"} type='email' refTo={emailRef} isNecessarily onKeyUp={(e) => isEnterPresed(e, handleRegistration)}></InputTitleup>
                        <InputTitleup className={InputTitleup.style.signUp} placeholder={"Пароль"} type='password' refTo={passwordRef} isNecessarily onKeyUp={(e) => isEnterPresed(e, handleRegistration)}></InputTitleup>
                    </div>

                }


                <div className='container__button-line'>
                    <Button className={Button.style.success + "button__fs26"} style={{ marginTop: "48rem" }} onClick={isRegistration ? () => setIsRegistration(false) : handlerLogIn} >{isRegistration ? "Назад" : "Войти"}</Button>
                    <Button className={Button.style.default + "button__fs26"} style={{ marginTop: "48rem" }} onClick={handleRegistration} > Регистрация</Button>
                </div>
                {errorMessage && <p className='txt_danger mes'>{errorMessage}</p>}
            </Container>
        </CenterPage>
    )
}

















