import React from 'react'

import Table from '../Components/Table';
import CenterPage from '../Components/templateStyle/CenterPage';
import { data } from '../packages/API/bd';

export const heaaders = {
    number:
        <div>
            <p style={{color:"red"}}>Номер заказа</p>

        </div>,
    address: "адресс",
    time: "Доставка к",
    summ: "сумма",
    size: "Габариты",
    pay: "Оплачено",
    Status: "Состояние",
    Open: "Открыть",

};



function Allorders() {

    const rowData = data;
    const headers = heaaders;



    return (

        <CenterPage>
            <div className='containerPage'>
                <h3>Все заказы</h3>
                <Table header={headers} row={rowData} />
            </div>

        </CenterPage>

    )
}

export default Allorders