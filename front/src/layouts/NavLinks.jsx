import React, { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'

import arrow from '../Assets/img/dropDown.png';


const existPages = {
    driver: {
        orders: { active: "/orders/active", completed: "/orders/competed" },
        car_park: '/carpark',
    },
    accountant: {
        accounting: { statistics: "/accounting/statistics" },
        ordersAdmin: { allOrders: "/orders/allorder" },
        shifts: "/shifts",
    },
    client: {

        place_an_order: "/placeanorder",
        my_order: '/myorder'
    },
    courier: {
        orders: { active: "/orders/active", completed: "/orders/competed" }
    }

}

const translatePage = {
    orders: "Заказы",
    active: "Активные",
    completes: "Завершенные",
    my_order: "Мои заказы",
    place_an_order: "Оформить заказ",
    shifts: "Смены",
    ordersAdmin: "Заказы",
    accounting: "Бухгалтерия",
    statistics: "Статистика",
    allOrders: "Все заказы",
    car_park: "Автопарк"
}

function DropDownList(props) {
    const [isDroped, setisDroped] = useState(false);
    const [shit, setShit] = useState(false);
    const ref = useRef();

    const dropedData = () => {
        setisDroped(!isDroped)
    }

    const listSwitch = () => {
        setShit(!shit)
    };


    let select = [];
    let option = [];
    for (let i of Object.keys(props.data)) {
        option.push(<div className='custom_select__option'><NavLink to={props.data[i]}>{translatePage[i]}</NavLink></div>)
    }
    select.push(
        <li>
            <div className='custom_select'>
                <button className='custom_select__button' onClick={dropedData}>{translatePage[props.header]}<img className={isDroped ? "custom_select__img rotate" : "custom_select__img"} src={arrow}></img></button>

                <CSSTransition
                    nodeRef={ref}
                    in={isDroped}
                    timeout={300}
                    classNames="my-node"
                    unmountOnExit
                    mountOnEnter
                    onEnter={() => setisDroped(true)}
                    onExited={() => setisDroped(false)}>
                   <div ref={ref}>{option}</div>
                </CSSTransition>
            </div>
        </li>
    );
    return select;
}


function NavListLink(props) {
    let links = props.listLink;
    let nav_links = [];
    for (let i of Object.keys(links)) {
        if (typeof links[i] == "object") {
            nav_links.push(
                <DropDownList data={links[i]} header={i} />
            )
        } else {
            nav_links.push(<li><NavLink to={links[i]}
                style={({ isActive }) =>
                    isActive ? { color: '#585757' } : undefined
                }>{translatePage[i]}</NavLink></li>)
        }
    }


    return nav_links;
};


function NavLinks(props) {
    let objLink = existPages[props.position];



    return (
        <nav>
            <ul>
                <NavListLink listLink={objLink} />
            </ul>
        </nav>
    )
}

export default NavLinks