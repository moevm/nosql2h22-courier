import React from 'react'

function NoAccess() {
    return (
            <div className='forbidden'>
                <h1 className='forbidden__code_error'>403</h1>
                <h2 className='forbidden__discription'>Forbidden</h2>
                <h3 className='forbidden__info'>Нет доступа на эту страницу</h3>
                <button className='forbidden__button' onClick={() => window.location = '/'}>На главную</button>
            </div>
    )
}

export default NoAccess