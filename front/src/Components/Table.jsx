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

function createRow(row) {
    let line = [];
    let result = []
    for (let i in row) {
        let elem = row[i];
        for (let j of Object.keys(elem)) {
            if(j !== 'id'){
                line.push(<td key={elem[j]}>{elem[j]}</td>);
            }
            
        }
        result.push(<WrapperTr key={row[i].id}>{line}</WrapperTr>);
        line = [];
    }
    return result;

}

function Table(props) {
    let headers = props.header;
    console.log(headers)
    let jsxHeaders = createThElem(headers);

    let row = [...props.row];
    console.log(row)
    let jsxRow = createRow(row);

    return (
        <table>
            <thead>
                {jsxHeaders}
            </thead>
            <tbody>
                {jsxRow}
            </tbody>
        </table>
    )
}

export default Table