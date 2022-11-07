import { useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Table from '../Components/Table';
import CenterPage from '../Components/templateStyle/CenterPage';
import { createOrdersHead } from '../Components/bd';
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



const someComp = (isOpened, onClose) => {
    console.log('sdfsd')
    return (
        <OrderPopup isOpened={isOpened} onClose={onClose}>
            SOME INFO
        </OrderPopup>
    )
}

function Allorders() {

    const [rowData, setRowData] = useState();
   
    const [openPopup, setOpenPopup] = useState(false)
    const [searchParams] = useSearchParams();

    const clearQuery = () => {
        window.location.search = '';
    }

    const onClose = () => {
        setOpenPopup(!openPopup)
    }

    const [ordersHeader] = useState(createOrdersHead(onClose));


    useEffect(() => {
        let filter = Object.fromEntries([...searchParams]);

        const getData = async () => {
            if (filter.cost) filter.cost = Number(filter.cost);
            if (filter.paid) filter.paid = filter.paid === 'true';
            if (filter.complete) filter.complete = filter.complete === 'true';

            console.log(filter)
            const res = await request.filter.post(filter);
            console.log(res.data.orders)
            setRowData(res.data.orders);
            
        }
        getData();
    }, []);
    

    return (

        <CenterPage>
            {openPopup && someComp(openPopup, onClose)}
            <div className='containerPage'>
                <div className='containerPage__title'>
                    <h3>Все заказы</h3>
                    <Button className={Button.style.success + 'button__fs24'} onClick={clearQuery}>Очистить фильтры</Button>
                </div>

                <Table header={ordersHeader} row={rowData} init={initRowdata}/>
            </div>
        </CenterPage>

    )
}

export default Allorders