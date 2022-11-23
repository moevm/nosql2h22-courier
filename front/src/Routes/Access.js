
import { Navigate, Outlet } from "react-router-dom"
import Loading from "../Pages/InfoPage/Loading";


function Access({ role, allowedRole = [], isAuth = false }) {

    if (role === 'AUTH') return isAuth ? <Outlet /> : <Loading />;
    else return (

        allowedRole.includes(role) ?
            <Outlet />
            :
            <Navigate to='/accessdenied' />
    )
}

export default Access

