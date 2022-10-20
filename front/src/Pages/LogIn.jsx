import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button, { buttonStyle } from '../Components/Button'
import InputTitleup, { inputStyleTemplate } from '../Components/InputTitleup'
import CenterPage from '../Components/templateStyle/CenterPage'
import CompanyLogo from '../Components/templateStyle/CompanyLogo'
import Container, { containerStyleTEmplate } from '../Components/templateStyle/Container'

export default function LogIn() {
    const navigate = useNavigate();
    const [authError, setAuthError] = useState('');
    const emailRef = useRef();
    const passwordRef = useRef();

    const logIn = () => {
        console.log('dfs')
        try {
            const validEmail = new RegExp('(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])');
            if (validEmail.test(emailRef.current.value)) {
                console.log(true);
            } else {
                console.log(false);
                throw { message: "Неверный Email" }
            }
             
            let tryToLogin = true; //api
            if(tryToLogin) navigate(`/main`)
            else throw { message: "Неверный логин или пароль" }
        } catch (error) {
            setAuthError(error.message);
            console.log(error);
        }

    }



    return (
        <CenterPage>
            <Button onClick={() => navigate('/tracking')} text="Трекинг поссылок" className={buttonStyle.success + " top_right txt_black"}/>
            <CompanyLogo />
            <Container className={containerStyleTEmplate.login}>
                <div className='container__wrapped'>Вход в личный кабинет</div>
                <InputTitleup className={inputStyleTemplate.login} placeholder={"Логин"} type='email' refTo={emailRef}></InputTitleup>
                <InputTitleup className={inputStyleTemplate.login} placeholder={"Пароль"} type='password' refTo={passwordRef}></InputTitleup>
                <Button text="Войти" className={buttonStyle.success} style={{ marginTop: "48rem" }} onClick={logIn} />
                {authError && <p className='txt_danger mes'>{authError}</p>}
            </Container>
        </CenterPage>
    )
}








 // let heaaders = {
    //     fullName: "ФИО",
    //     shifts: "Смены",
    //     price: "Цена",
    //     jobTitle: "Должность"
    // };

    // let data = [
    //     {
    //         id: '95',
    //         fullName: "Иерусалимов Никита",
    //         shifts: "пн-сб",
    //         price: "90 000",
    //         jobTitle: <Button onClick={() => console.log("fuck")} text="LogIn" style={buttonStyle.success} />
    //     },
    //     {
    //         id: '94',
    //         fullName: "Иерусалимов Никита",
    //         shifts: "пн-сб",
    //         price: "90 000",
    //         jobTitle: <Button onClick={() => console.log("fuck")} text="LogIn" style={buttonStyle.success} />
    //     },
    //     {
    //         id: '93',
    //         fullName: "Иерусалимов Никита",
    //         shifts: "пн-сб",
    //         price: "90 000",
    //         jobTitle: <Button onClick={() => console.log("fuck")} text="LogIn" style={buttonStyle.success} />
    //     },
    //     {
    //         id: '92',
    //         fullName: "Иерусалимов Никита",
    //         shifts: "пн-сб",
    //         price: "90 000",
    //         jobTitle: <Button onClick={() => console.log("fuck")} text="LogIn" style={buttonStyle.success} />
    //     },
    //     {
    //         id: '91',
    //         fullName: "Иерусалимов Никита",
    //         shifts: "пн-сб",
    //         price: "90 000",
    //         jobTitle: <Button onClick={() => console.log("fuck")} text="LogIn" style={buttonStyle.success} />
    //     },
    //     {
    //         id: '90',
    //         fullName: "Иерусалимов Никита",
    //         shifts: "пн-сб",
    //         price: "90 000",
    //         jobTitle: <Button onClick={() => console.log("fuck")} text="LogIn" style={buttonStyle.success} />
    //     },
    // ];
