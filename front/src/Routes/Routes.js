import React from 'react'
import { Route, Routes } from "react-router-dom";
import Header from '../layouts/Header';

import LogIn from '../Pages/LogIn'
import Main from '../Pages/Main'
import TrackingParcels from '../Pages/TrackingParcels';

function WrapperPage(props) {
    return (
        <div className='page'>
            <Header />
            <div className='page__content'>
                {props.children}
            </div>
            
        </div>
    )
}

function Router() {
    return (
        <Routes>
            <Route index exact path="/" element={<LogIn />} />
            <Route index exact path="/tracking" element={<TrackingParcels />} />
            <Route exact path="/main" element={
                <WrapperPage>
                    <Main />
                </WrapperPage>

            } />
        </Routes>
    );
}

export default Router