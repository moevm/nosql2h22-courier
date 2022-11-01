import React from 'react'

import Table from '../Components/Table';
import CenterPage from '../Components/templateStyle/CenterPage';
import { data, heaaders } from '../API/bd';





function Allorders() {

    let rowData = data;
    let headers = heaaders;


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