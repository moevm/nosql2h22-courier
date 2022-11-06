import React from 'react'

function WrapperTr(props) {
    return <tr>{props.children}</tr>
}

function createThElem(data) {
    let result = [];
    for (let i of Object.values(data)) {
        result.push(<th key={i}>{i}</th>);
    }

    return <WrapperTr key={'tableHeaders'}>{result}</WrapperTr>;
}

function createRow(row, header) {
    let line = [];
    let result = []
    for (let i in row) {
        let elem = row[i];
        for (let j of Object.keys(elem)) {
            line.push(<td key={elem._id+i}>{elem[j]}</td>);
        }
        result.push(<WrapperTr key={row[i]._id}>{line}</WrapperTr>);
        line = [];
    }
    return result;

}

const prepareRowData = (row, header) => {
    let rowData = [];
    for (let i in row) {
        rowData.push({});
        for (let j of Object.keys(header)) {
            rowData[i][j] = row[i][j];

        }
    }
    console.log(rowData)
    return rowData;
}

function Table(props) {
    const {
        header,
        row
    } = props
    let jsxHeaders = createThElem(header);
    let rowNew = prepareRowData(row, header);
    let jsxRow = createRow(rowNew);

    return (
        <table>
             
            
                {jsxHeaders}
            
                {jsxRow}
            
       
        </table>
    )
}

export default Table