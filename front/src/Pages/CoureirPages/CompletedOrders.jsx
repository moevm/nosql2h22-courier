import { useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Table from '../../Components/Table';
import CenterPage from '../../Components/templateStyle/CenterPage';
import Button from '../../Components/Button';
import request from '../../packages/API';
import { completeOrdersHeader } from '../../Components/tableHeaders/completeOrders';


function CompleteOrders() {

    const [rowData, setRowData] = useState();
    const [searchParams] = useSearchParams();
    const [ordersHeader] = useState(completeOrdersHeader);

    const clearQuery = () => {
        window.location.search = '';
    }

    useEffect(() => {
        
        const getData = async () => {
            let filter = Object.fromEntries([...searchParams])
            if (filter.cost) filter.cost = Number(filter.cost);
            if (filter.paid) filter.paid = filter.paid === 'true';
            if (filter.complete) filter.complete = filter.complete === 'true';
    
            const res = await request.completeOrders.post(filter);
            console.log(res.data.my_orders)
            setRowData(res.data.my_orders);
    
        }
        getData();
        return(()=> setRowData({}));
    },[searchParams]);

   

    return (

        <CenterPage>
            <div className='containerPage'>
                <div className='containerPage__title'>
                    <h3>Завершенные заказы</h3>
                    <Button className={Button.style.success + 'button__fs24'} onClick={clearQuery}>Очистить фильтры</Button>
                </div>

                <Table header={ordersHeader} row={rowData} />
            </div>
        </CenterPage>

    )
}

export default CompleteOrders
