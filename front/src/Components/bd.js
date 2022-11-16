import Button from "./Button";
import check from '../Assets/img/check.png'
import error from '../Assets/img/error.png';
import { DateFilter, SelectFilter, TextFilter } from './filter';

export const heaaders = {
    number: "Номер заказа",
    address: "адресс",
    time: "Доставка к",
    summ: "сумма",
    size: "Габариты",
    pay: "Оплачено",
    Status: "Состояние",
    Open: "Открыть",

};

export const createOrdersHead = (setIsOpenPopup) => {
    return ([
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
                    {cell?.replaceAll('/', '-')}
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
                    {cell ? <img src={check} /> : <img src={error} />}
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
                    <SelectFilter queryKey='complete' value={{ true: 'Да', false: 'Нет' }} />
                </div>,
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
        },
        {
            text: "Информация",
            formatter: (cell, row, rowIndex, extraData) =>
                <div className='table-cell'>
                    {<Button className={Button.style.success + 'button__fs20'} onClick={() => setIsOpenPopup(rowIndex)}>Открыть</Button>}
                </div>,
            headerStyle: (colum, colIndex) => {
                return {
                    width: '10%', textAlign: 'center',
                    position: 'sticky', top: '0',
                };
            },
        },

    ]);
}

export const headersShifts = {
    fullName: "ФИО",
    position: "Должность",
    schedule: "График"
};

export const dataShifts = [
    {
        id: '1',
        fullName: "Иерусалимов Никита",
        position: "Администратор",
        schedule: <div>пн-пт <br /><br />8:00 - 18:00</div>,

    }, {
        id: '2',
        fullName: "Сорокумов Сергей",
        position: "Администратор",
        schedule: <div>пн-пт <br /><br />8:00 - 18:00</div>,

    },
    {
        id: '3',
        fullName: "Голубева Валентина",
        position: "Администратор",
        schedule: <div>пн-пт <br /><br />8:00 - 18:00</div>,

    },
    {
        id: '4',
        fullName: "Иерусалимов Никита",
        position: "Администратор",
        schedule: <div>пн-пт <br /><br />8:00 - 18:00</div>,

    },
]

export const currentUser = {
    name: "Maria",
    position: "accountant"
}