import { useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

//import Table from '../Components/Table';
import BootstrapTable from 'react-bootstrap-table-next';
import CenterPage from '../Components/templateStyle/CenterPage';
import { data } from '../packages/API/bd';
import { DateFilter, SelectFilter, TextFilter } from '../Components/filter';
import Button from '../Components/Button';
import request from '../packages/API';

import check from '../Assets/img/check.png';
import error from '../Assets/img/error.png';
export const heaaders = [
    "_id",
    "address",
    "expected_date",
    "cost",
    "size",
    "paid",
    "complete",
    "Open"

];




const prepareRowData = (row, header) => {
    let rowData = [];
    for (let i in row) {
        rowData.push({});
        for (let j of heaaders) {
            
            rowData[i][j] = row[i][j];

        }
    }
    return rowData;
}

function Allorders() {

    const [rowData, setRowData] = useState(data);

    const [searchParams] = useSearchParams();

    useEffect(() => {
        let filter = Object.fromEntries([...searchParams]);
        
        const getData = async () => {
            if(filter.cost) filter.cost = Number(filter.cost);
            if(filter.paid) filter.paid = filter.paid  === 'true';
            if(filter.complete) filter.complete = filter.complete === 'true';
            console.log(filter)
            const res = await request.filter.post(filter);
            
            setRowData(prepareRowData(res.data.orders, heaaders));
        }
        getData()
    }, []);

    const clearQuery = () => {
        window.location.search = '';
    }
    const s = [
        {
            text:
                <div>
                    <p>Номер</p>
                    <TextFilter queryKey="_id" placeholder={"Token"} type={"text"} />
                </div>,
            dataField: '_id',
            formatter: (cell, row, rowIndex, extraData) =>
                <div className='table-cell'>
                    {cell}
                </div>,
            headerStyle: (colum, colIndex) => { return { width: '10%', textAlign: 'center', position: 'sticky', top: '0', }; },
        },
        {
            text:
                <div>
                    <p>Адресс</p>
                    <TextFilter queryKey="address" placeholder={"Adress"} type={"text"} />
                </div>,

            dataField: 'address',
            formatter: (cell, row, rowIndex, extraData) =>
                <div className='table-cell'>
                    {cell}
                </div>,
            headerStyle: (colum, colIndex) => {
                return {
                    width: '20%', textAlign: 'center',
                    position: 'sticky', top: '0',
                };
            },
        },
        {
            text:
                <div>
                    <p>Доставка к</p>
                    <DateFilter queryKey="expected_date" />
                </div>,
            dataField: 'expected_date',
            formatter: (cell, row, rowIndex, extraData) =>
                <div className='table-cell'>
                    {cell?.replaceAll('/','-')}
                </div>,
            headerStyle: (colum, colIndex) => {
                return {
                    width: '10%', textAlign: 'center',
                    position: 'sticky', top: '0',
                };
            },
        },
        {
            text:
                <div >
                    <p> Стоимость</p>
                    <TextFilter queryKey="cost" placeholder={"Cost"} />
                </div>,
            dataField: 'cost',
            formatter: (cell, row, rowIndex, extraData) =>
                <div className='table-cell'>
                    {cell}
                </div>,
            headerStyle: (colum, colIndex) => {
                return {
                    width: '10%', textAlign: 'center', 
                    position: 'sticky', top: '0',
                };
            },
        },
        {
            text:
                <div >
                    <p> Габариты</p>
                    <TextFilter queryKey='size' placeholder={"Size"} />
                </div>,
            dataField: 'size',
            formatter: (cell, row, rowIndex, extraData) =>
                <div className='table-cell'>
                    {cell}
                </div>,
            headerStyle: (colum, colIndex) => {
                return {
                    width: '10%', textAlign: 'center',
                    position: 'sticky', top: '0',
                };
            },
        },
        {
            text:
                <div >
                    <p> Оплачено</p>
                    <SelectFilter queryKey='paid' value={{ true: 'Да', false: 'Нет' }} />
                </div>,
            dataField: 'paid',
            formatter: (cell, row, rowIndex, extraData) =>
                <div className='table-cell'>
                    {cell?<img src={check}/>:<img src={error}/>}
                </div>,
            headerStyle: (colum, colIndex) => {
                return {
                    width: '10%', textAlign: 'center',
                    position: 'sticky', top: '0',
                };
            },
        },
        {
            text:
                <div >
                    <p> Состояние</p>
                    <SelectFilter queryKey='complete' value={{ true: 'Да', false: 'Нет' }}/>
                </div>,
            dataField: 'complete',
            formatter: (cell, row, rowIndex, extraData) =>
                <div className='table-cell'>
                    {cell?<Button className={Button.style.success + 'button__fs20'}>Отправлено</Button>:<Button className={Button.style.danger + 'button__fs20'}>Не прибыло</Button>}
                </div>,
            headerStyle: (colum, colIndex) => {
                return {
                    width: '10%', textAlign: 'center',
                    position: 'sticky', top: '0',
                };
            },
        },
        {
            text: "Открыть",
            formatter: (cell, row, rowIndex, extraData) =>
                <div className='table-cell'>
                    {<Button className={Button.style.success + 'button__fs20'}>Открыть</Button>}
                </div>,
            headerStyle: (colum, colIndex) => {
                return {
                    width: '10%', textAlign: 'center',
                    position: 'sticky', top: '0',
                };
            },
        },

    ];

    return (

        <CenterPage>
            <div className='containerPage'>
                <div className='containerPage__title'>
                    <h3>Все заказы</h3>
                    <Button className={Button.style.success + 'button__fs24'} onClick={clearQuery}>Очистить фильтры</Button>
                </div>

                <BootstrapTable striped hover
                    keyField='Номер'
                    data={rowData}
                    columns={s}
                />
            </div>
        </CenterPage>

    )
}

export default Allorders