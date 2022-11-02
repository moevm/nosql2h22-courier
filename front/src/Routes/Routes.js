import React, {useEffect} from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { auth } from '../Actions/login';
import Header from '../layouts/Header';
import Allorders from '../Pages/Allorders';
import LogIn from '../Pages/LogIn'
import Main from '../Pages/Main'
import TrackingParcels from '../Pages/TrackingParcels';
import Shifts from '../Pages/Shifts';


function WrapperPage(JsxPage) {


    return (
 
            <div className='page'>
                <Header />
                    <div className='page__content'>
                        {JsxPage}
                    </div>
            </div>
      
    )
}

function Router() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('token')){
            dispatch(auth(navigate));
        }

    }, [])

    return (
        <Routes>
            <Route index exact path="/" element={<LogIn />} />
            <Route index exact path="/tracking" element={<TrackingParcels />} />
            <Route exact path="/main" element={WrapperPage(<Main />)} />
            <Route exact path="/orders/active" element={WrapperPage(<Allorders />)} />
            <Route exact path="/orders/competed" element={WrapperPage(<Allorders />)} />
            <Route exact path="/carpark" element={WrapperPage(<Allorders />)} />
            <Route exact path="/accounting/statistics" element={WrapperPage(<Allorders />)} />
            <Route exact path="/orders/allorder" element={WrapperPage(<Allorders />)} />
            <Route exact path="/shifts" element={WrapperPage(<Shifts />)} />
            <Route exact path="/placeanorder" element={WrapperPage(<Allorders />)} />
            <Route exact path="/myorder" element={WrapperPage(<Allorders />)} />
            <Route exact path="/orders/active" element={WrapperPage(<Allorders />)} />
            <Route exact path="/orders/competed" element={WrapperPage(<Allorders />)} />
        </Routes>
    );
}

export default Router