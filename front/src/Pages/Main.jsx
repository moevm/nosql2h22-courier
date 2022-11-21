import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button  from '../Components/Button'
import CenterPage from '../Components/templateStyle/CenterPage'
import Container, { containerStyleTEmplate } from '../Components/templateStyle/Container'
import logoutImg from '../Assets/img/logout.png'
import avatar from '../Assets/img/Accountant.png'

import { logout } from '../Reducers/reducer/userReducer'


function Main({user}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(user)
  //return;

  let name = user.first_name;
  console.log(name,user.first_name)
  let shift = "Пн-Пт 10:00 - 19:00";
  let position = user.type;

  const logoutUser = () =>{
    //сделать логику по выходу из аккаунта
    dispatch(logout())
    navigate("/");
  }

  return (
    <CenterPage>
      <Container className={Container.style.logout}>
        <img src={avatar}></img>
        <h2>{name}</h2>
        <p>Должность: {position}</p>
        <p>График: {shift}</p>
        <Button  onClick={logoutUser} className={Button.style.danger + 'button__fs20'} image={logoutImg}>LogOut</Button>
      </Container>
    </CenterPage>
  )
}

export default Main