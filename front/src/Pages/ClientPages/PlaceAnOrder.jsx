import React from 'react'
import Button from '../../Components/Button'
import InputTitleup from '../../Components/InputTitleup'
import CenterPage from '../../Components/templateStyle/CenterPage'
import Container from '../../Components/templateStyle/Container'

function PlaceAnOrder() {
    return (
        <CenterPage>
            <div className='containerPage__title'>
                <h3>Оформление заказа</h3>
            </div>
            <Container className={Container.style.order}>
                <div className='placeOrder'>
                    <div className='placeOrder__block'>
                        <p>ФИО отправителя</p>
                        <InputTitleup className={InputTitleup.style.order} placeholder="Иванов Александр Александрович" isTitleUp />
                    </div>

                    <div className='placeOrder__block'>
                        <p>ФИО получателя</p>
                        <InputTitleup className={InputTitleup.style.order} placeholder="Иванова Маргарита Ивановна" isTitleUp />
                    </div>

                    <div className='placeOrder__block'>
                        <p>Адресс получателя</p>
                        <InputTitleup className={InputTitleup.style.order} placeholder="Ул. профессора попова д. 27" isTitleUp />
                    </div>

                    <hr
                        style={{
                            background: 'black',
                            color: 'black',
                            borderColor: 'black',
                            height: '1px',
                        }}
                    />
                    <div className='placeOrder__block'>
                        <p>Размер</p>
                        <InputTitleup className={InputTitleup.style.order} placeholder="Ул. профессора попова д. 27" isTitleUp />
                    </div>
                    <div className='placeOrder__block'>
                        <p>Вес</p>
                        <InputTitleup className={InputTitleup.style.order} placeholder="Ул. профессора попова д. 27" isTitleUp />
                    </div>

                    <div className='placeOrder__cost'>
                        <p>Стоимость доставки:</p>
                        <p>2000 рублей</p>
                    </div>
                    <Button className={Button.style.success}>Оплатить</Button>
                </div>
            </Container>
        </CenterPage>
    )
}

export default PlaceAnOrder