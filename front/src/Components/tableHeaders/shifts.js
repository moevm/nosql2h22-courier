import { SelectFilter, TextFilter } from "../filter";

const role = {
    u: "Client",
    a: "Accountant",
    c: "Courier",
    d: "Driver"
}


export const shifts = () => {
    return ([
        {
            text:"Номер",
            dataField: '_id',
            formatter: (cell, row, rowIndex, extraData) =>
                <div className='table-cell'>
                    {cell}
                </div>,
            headerStyle: (colum, colIndex) => { return { width: '10%', textAlign: 'center', position: 'sticky', top: '0', }; },
            headerFormatter: (column, colIndex) => {
                return (

                    <div >
                        <p> {column.text}</p>
                        <TextFilter queryKey="_id" placeholder={"Token"} type={"text"} />
                </div>
                )
            }
        },
        {
            text: "ФИО",

            dataField: 'fullName',
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
            headerFormatter: (column, colIndex) => {
                return (

                    <div >
                        <p> {column.text}</p>
                        <TextFilter queryKey="fullName" placeholder={"fullName"} type={"text"} />
                    </div>
                )
            }
        },
        {
            text: "Должность",
            dataField: 'type',
            formatter: (cell, row, rowIndex, extraData) =>
                <div className='table-cell'>
                    {role[cell]}
                </div>,
            headerStyle: (colum, colIndex) => {
                return {
                    width: '10%', textAlign: 'center',
                    position: 'sticky', top: '0',
                };
            },
            headerFormatter: (column, colIndex) => {
                return (

                    <div >
                        <p> {column.text}</p>
                        <SelectFilter queryKey="type" value={{c:"courier",a:"accountant",d:"driver",u:"client"}} placeholder={"role"} type={"text"}/>
                    </div>
                )
            }
        },
        {
            text: "График",
            dataField: 'timetable',
            formatter: (cell, row, rowIndex, extraData) =>
                <div className='table-cell'>
                    {cell.map((elem) => <>{elem}<br/></>)}
                </div>,
            headerStyle: (colum, colIndex) => {
                return {
                    width: '10%', textAlign: 'center',
                    position: 'sticky', top: '0',
                };
            },
            headerFormatter: (column, colIndex) => {
                return (

                    <div >
                        <p> {column.text}</p>
                        <TextFilter queryKey="timetable" placeholder={"timetable"} />
                    </div>
                )
            }
        },
       
    ]);
}