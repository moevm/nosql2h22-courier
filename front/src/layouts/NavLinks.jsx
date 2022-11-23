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
    completed: "Завершенные",
    my_order: "Мои заказы",
    place_an_order: "Оформить заказ",
    shifts: "Смены",
    ordersAdmin: "Заказы",
    accounting: "Бухгалтерия",
    statistics: "Статистика",
    allOrders: "Все заказы",
    car_park: "Автопарк"
}

function DropDownList({ data, header }) {

    const [isDroped, setisDroped] = useState(false);
    const ref = useRef();

    const dropedData = () => {
        setisDroped(!isDroped)
    }

    return (
        <li key={header}>
            <div className='custom_select'>
                <button className='custom_select__button' onClick={dropedData}>
                    {translatePage[header]}
                    <img className={isDroped ? "custom_select__img rotate" : "custom_select__img"} src={arrow} />
                </button>

                <CSSTransition
                    nodeRef={ref}
                    in={isDroped}
                    timeout={300}
                    classNames="my-node"
                    unmountOnExit
                    mountOnEnter
                    onEnter={() => setisDroped(true)}
                    onExited={() => setisDroped(false)}>
                    <div ref={ref}>

                        {Object.keys(data).map((key) => {
                            return (
                                <div className='custom_select__option' key={key + ' ' + data[key]} >
                                    <NavLink to={data[key]}>
                                        {translatePage[key]}
                                    </NavLink>
                                </div>
                            )
                        })}

                    </div>
                </CSSTransition>
            </div>
        </li>
    );
}

const GenerateLinks = ({ listLink }) => {
    return (
        Object.keys(listLink).map((key, index) => {
            return (
                (typeof listLink[key] == "object") ?

                    <DropDownList data={listLink[key]} header={key} />
                    :
                    <li key={listLink[key]}>
                        <NavLink to={listLink[key]}
                            style={
                                ({ isActive }) => isActive ? { color: '#585757' } : null
                            }
                        >
                            {translatePage[key]}
                        </NavLink>
                    </li>
            )
        })
    )
}

function NavLinks({ position }) {
    let objLink = existPages[position];

    return (
        <nav>
            <ul>
                <GenerateLinks listLink={objLink} />
            </ul>
        </nav>
    )
}

export default NavLinks