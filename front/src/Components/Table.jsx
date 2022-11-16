import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';



const prepareRowData = (row, header) => {
    let rowData = [];
    for (let i in row) {
        rowData.push({});
        for (let j of header) {
            rowData[i][j] = row[i][j];

        }
    }
    return rowData;
}

function Table(props) {
    const {
        header,
        row,
        init,
        keyField = init[0]
    } = props

    let rowNew = prepareRowData(row, init);


    return (
        <BootstrapTable striped hover
            keyField={keyField}
            data={rowNew}
            columns={header}
        />
    )
}

export default Table