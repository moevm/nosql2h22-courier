import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';



const prepareRowData = (rawData, header) => {
    let dataForTable = [];
    for (let i in rawData) {
        dataForTable.push({});
        for (let j of header) {
            console.log(i, j, rawData[i][j])
            let itemData = rawData[i][j];
            if (j === "cost"){
                itemData = `${itemData} р.`;
            }
            if (j === "size"){
                itemData = `${itemData[0]}x${itemData[1]}x${itemData[2]} ${itemData[3]} кг`;
            }
            dataForTable[i][j] = itemData;

        }
    }
    return dataForTable;
}

function Table(props) {
    const {
        header,
        row,
        init = [' '],
        keyField = init[0]
    } = props

    let rowNew = prepareRowData(row, header.map((obj)=> obj.dataField));


    return (
        <BootstrapTable striped hover
            keyField={keyField}
            data={rowNew}
            columns={header}
        />
    )
}

export default Table