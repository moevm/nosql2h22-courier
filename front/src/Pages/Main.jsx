import React from 'react'
import { useNavigate } from 'react-router-dom';

import Button  from '../Components/Button'
import CenterPage from '../Components/templateStyle/CenterPage'
import Container from '../Components/templateStyle/Container'
import logout from '../Assets/img/logout.png'
import avatar from '../Assets/img/Accountant.png'


function Main({}) {
  const navigate = useNavigate();
  let name = "Maria" //данные надо будет брать из одного файла
  let shift = "Пн-Пт 10:00 - 19:00";
  let position = 'Администратор';

  const logoutUser = () =>{
    //сделать логику по выходу из аккаунта
    navigate("/");
  }

  return (
    <CenterPage>
      <Container className={Container.style.logout}>
        <img src={avatar}></img>
        <h2>{name}</h2>
        <p>Должность: {position}</p>
        <p>График: {shift}</p>
        <Button  onClick={logoutUser} className={Button.style.danger + 'button__fs20'} image={logout}>LogOut</Button>
      </Container>
    </CenterPage>
  )
}

export default Main