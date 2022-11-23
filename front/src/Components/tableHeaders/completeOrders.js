import { format } from "date-fns";
import Button from "../Button";
import { DateFilter, SelectFilter, TextFilter } from "../filter";

export const completeOrdersHeader = () => {
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
            text: "Адресс",

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
            headerFormatter: (column, colIndex) => {
                return (

                    <div >
                        <p> {column.text}</p>
                        <TextFilter queryKey="address" placeholder={"Adress"} type={"text"} />
                    </div>
                )
            }
        },
        {
            text: "Выполнен",
            dataField: 'real_date',
            formatter: (cell, row, rowIndex, extraData) =>
                <div className='table-cell'>
                    {cell? format(new Date(cell), "MM.dd.yyyy HH:mm"): null}
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
                        <DateFilter queryKey="expected_date" />
                    </div>
                )
            }
        },
        {
            text: "Стоимость",
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
            headerFormatter: (column, colIndex) => {
                return (

                    <div >
                        <p> {column.text}</p>
                        <TextFilter queryKey="cost" placeholder={"Cost"} />
                    </div>
                )
            }
        },
        {
            text: "Габариты",
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
            headerFormatter: (column, colIndex) => {
                return (

                    <div >
                        <p> {column.text}</p>
                        <TextFilter queryKey='size' placeholder={"Size"} />
                    </div>
                )
            }
        },
        {
            text: "Состояние",
            dataField: 'complete',
            formatter: (cell, row, rowIndex, extraData) =>
                <div className='table-cell'>
                    {cell ? <Button className={Button.style.success + 'button__fs20'}>Отправлено</Button> : <Button className={Button.style.danger + 'button__fs20'}>Не прибыло</Button>}
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
                        <SelectFilter queryKey='complete' value={{ true: 'Да', false: 'Нет' }} />
                    </div>
                )
            }
        }

    ]);
}