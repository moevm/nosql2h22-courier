import { useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Table from '../Components/Table';
import CenterPage from '../Components/templateStyle/CenterPage';
import { createOrdersHead, currentUser } from '../Components/bd';
import Button from '../Components/Button';
import request from '../packages/API';
import OrderPopup from '../Components/UiKit/popup/OrderPopup';

export const initRowdata = [
    "_id",
    "address",
    "expected_date",
    "cost",
    "size",
    "paid",
    "complete",
    "Open"
];



const popUpInnerContent = (isOpened, onClose, data) => {
    console.log(data)
    return (
        <OrderPopup isOpened={isOpened} onClose={onClose}>
           <div className='container__alightItemStart'>
                        <p>Поссылка: {data._id}</p>
                        <p>Ожидаемое время доставки: {data.expected_date}</p>
                        {data.complete && <p>Фактическое время доставки: {data.real_date}</p>}
                        <p>Статус: {data.complete ? "Завершено" : "Не завершено"}</p>
                        <p>Курьер: {data.courier_info[0]} {data.courier_info[1]}</p>
            </div>
            <Button className={Button.style.success + "button__fs26"} onClick={onClose} style={{padding:"10rem 80rem", color:"black"}}>Ок</Button>
        </OrderPopup>
    )
}

function Allorders() {

    const [rowData, setRowData] = useState();
    const [currentOrder, setCurrentOrder] = useState('')
    const [openPopup, setOpenPopup] = useState(false)
    const [searchParams] = useSearchParams();

    const clearQuery = () => {
        window.location.search = '';
    }
    
  

    useEffect(() => {
        
        const getData = async () => {
            let filter = Object.fromEntries([...searchParams])
            if (filter.cost) filter.cost = Number(filter.cost);
            if (filter.paid) filter.paid = filter.paid === 'true';
            if (filter.complete) filter.complete = filter.complete === 'true';
    
            const res = await request.filter.post(filter);
            setRowData(res.data.orders);
    
        }
        getData();
    },[searchParams]);

    const changeStateProps = (indexPopup) => {
        setOpenPopup(!openPopup);
        if(typeof indexPopup == 'number')setCurrentOrder(indexPopup)
        else setCurrentOrder(null);
    }




    const [ordersHeader] = useState(createOrdersHead(changeStateProps));

    return (

        <CenterPage>
            {openPopup && popUpInnerContent(openPopup, changeStateProps, rowData[currentOrder])}
            <div className='containerPage'>
                <div className='containerPage__title'>
                    <h3>Все заказы</h3>
                    <Button className={Button.style.success + 'button__fs24'} onClick={clearQuery}>Очистить фильтры</Button>
                </div>

                <Table header={ordersHeader} row={rowData} init={initRowdata} />
            </div>
        </CenterPage>

    )
}

export default Allorders