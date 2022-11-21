import React from 'react'
import { useNavigate } from 'react-router-dom';

import CompanyLogo from '../Components/templateStyle/CompanyLogo'
import NavLinks from './NavLinks';
import avatar from '../Assets/img/Accountant.png'



function Header({user}) {
  const navigate = useNavigate();
  console.log(user)
  //return;
  let name = user.first_name;
  let position = user.type//"accountant";// user.role;


  return (
    <div className='header'>
      <div>
        <div className='header__head'>
          <img src={avatar} onClick={() => navigate('/main')}></img>
          <div className='header__text'>
            <h3>{name}</h3>
            <p>{position}</p>
          </div>
        </div>
        <div className='header__content'>
            <NavLinks position={position}/>
        </div>
      </div>
      <div className='header__footer'><CompanyLogo /></div>
    </div>
  )
}

export default Header