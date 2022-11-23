import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import Button from '../../Components/Button';
import Table from '../../Components/Table';
import CenterPage from '../../Components/templateStyle/CenterPage';
import { userOrders } from '../../Components/bd';
import request from '../../packages/API';
import storage from '../../packages/storage';

function MyOrders() {
    const [rowData, setRowData] = useState([]);
    const [ordersHeader] = useState(userOrders())
    const [searchParams] = useSearchParams();

    const clearQuery = () => {
        window.location.search = '';
    }

    useEffect(() => {

        const getData = async () => {
            console.log(storage.login.getLogin());
            const res = await request.clientOrders.post(storage.login.getLogin());

            setRowData(res.data.my_orders);
        }
        getData();
    }, [searchParams])

    return (
        <CenterPage>
            <div className='containerPage'>
                {rowData.length ?
                    <>
                        <div className='containerPage__title'>
                            <h3>Все заказы</h3>
                            <Button className={Button.style.success + 'button__fs24'} onClick={clearQuery}>Очистить фильтры</Button>
                        </div>
                        <Table header={ordersHeader} row={rowData}/>
                    </>
                    : <h1>У вас не было еще заказов</h1>}
            </div>
        </CenterPage>

    )
}

export default MyOrders