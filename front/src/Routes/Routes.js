import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import storage, { setStorage } from "../packages/storage";

import { auth } from '../Actions/login';
import Header from '../layouts/Header';
import Allorders from '../Pages/Allorders';
import LogIn from '../Pages/LogIn'
import Main from '../Pages/Main'
import TrackingParcels from '../Pages/TrackingParcels';
import Shifts from '../Pages/Shifts';


function WrapperPage(props) {
    const {
        children
    } = props

    return (
        <div className='page'>
            <Header user={WrapperPage.userInfo} />
            <div className='page__content'>
                {children}
            </div>
        </div>

    )
}

function Router() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setStorage(localStorage);
        if (storage.token.getToken()) {
            dispatch(auth(navigate));
        }

    }, [])

    const currentUser = useSelector(state => state.user).currentUser;
    WrapperPage.userInfo = currentUser;
    return (
        <Routes>
            <Route index exact path="/" element={<LogIn />} />
            <Route index exact path="/tracking" element={<TrackingParcels />} />

            <Route exact path="/main" element={
                <WrapperPage>
                    <Main user={currentUser} />
                </WrapperPage>} />

            <Route exact path="/orders/active" element={
                <WrapperPage>
                    <Allorders />
                </WrapperPage>
            } />
            <Route exact path="/orders/competed" element={
                <WrapperPage>
                    <Allorders />
                </WrapperPage>} />

            <Route exact path="/carpark" element={
                <WrapperPage>
                    <Allorders />
                </WrapperPage>} />

            <Route exact path="/accounting/statistics" element=
                {<WrapperPage>
                    <Allorders />
                </WrapperPage>} />

            <Route exact path="/orders/allorder" element={
                <WrapperPage>
                    <Allorders />
                </WrapperPage>} />

            <Route exact path="/shifts" element={
                <WrapperPage>
                    <Shifts />
                </WrapperPage>} />

            <Route exact path="/placeanorder" element={
                <WrapperPage>
                    <Allorders />
                </WrapperPage>} />

            <Route exact path="/myorder" element={
                <WrapperPage>
                    <Allorders />
                </WrapperPage>} />

            <Route exact path="/orders/active" element={
                <WrapperPage>
                    <Allorders />
                </WrapperPage>} />

            <Route exact path="/orders/competed" element={
                <WrapperPage>
                    <Allorders />
                </WrapperPage>} />
        </Routes>
    );
}

export default Router