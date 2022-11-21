import React from 'react'
import { Outlet, Route, Routes } from "react-router-dom";
import { useSelector } from 'react-redux';

import Header from '../layouts/Header';
import Allorders from '../Pages/Allorders';
import LogIn from '../Pages/LogIn'
import Main from '../Pages/Main'
import TrackingParcels from '../Pages/TrackingParcels';
import Shifts from '../Pages/Shifts';
import Access from './Access';
import Loading from '../Pages/InfoPage/Loading';
import NoAccess from '../Pages/InfoPage/NoAccess';



function WrapperPage({ user }) {


    return (
        <div className='page'>
            <Header user={user} />
            <div className='page__content'>
                <Outlet />
            </div>
        </div>

    )
}

const role = {
    u: "client",
    a: "accountant",
    c: "courier",
    d: "driver"
}

function Router() {
    const user = useSelector(state => state.user);

    let currentUser = user.currentUser;
    let isAuth = user.isAuth;
    if (currentUser.type) currentUser.type = role[currentUser.type];
    return (
        <Routes>
            <Route index exact path="/" element={<LogIn />} />
            <Route index exact path="/tracking" element={<TrackingParcels />} />

            <Route element={<Access role={'AUTH'} isAuth={isAuth} />}>

                <Route element={<WrapperPage user={currentUser} />}>

                    <Route exact path="/main" element={<Main user={currentUser} />} />
                    
                    <Route element={<Access role={currentUser.type} allowedRole={["driver","courier"]} />}>
                        <Route exact path="/orders/active" element={<Allorders />} />
                        <Route exact path="/orders/competed" element={<Allorders />} />
                    </Route>

                    <Route element={<Access role={currentUser.type} allowedRole={["driver"]} />}>
                        <Route exact path="/carpark" element={<Allorders />} />
                    </Route>

                    <Route element={<Access role={currentUser.type} allowedRole={["accountant"]} />}>
                        <Route exact path="/accounting/statistics" element={<Allorders />} />
                        <Route exact path="/orders/allorder" element={<Allorders />} />
                        <Route exact path="/shifts" element={<Shifts />} />
                    </Route>

                    <Route element={<Access role={currentUser.type} allowedRole={["client"]} />}>
                        <Route exact path="/placeanorder" element={<Allorders />} />
                        <Route exact path="/myorder" element={<Allorders />} />
                    </Route>


                </Route>

            </Route>
            <Route path='/loading' element={<Loading />} />
            <Route path='/accessdenied' element={<NoAccess />} />
        </Routes>
    );
}

export default Router