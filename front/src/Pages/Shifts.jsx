import React from 'react'
import { dataShifts, headersShifts } from '../packages/API/bd';
import Table from '../Components/Table'
import CenterPage from '../Components/templateStyle/CenterPage'



function Shifts() {
    let data = dataShifts;
    let heaaders = headersShifts;
    return (
        <CenterPage>
            <Table header={heaaders} row={data} />
        </CenterPage>
    )
}

export default Shifts