import { FC } from "react"
import onLogout from "../../main/store/stores/user/login.store.on-logout"
import { useDispatch, useSelector } from "react-redux"
import {RootState} from '../../main/store/redux/rootState'
import { Link, useNavigate } from "react-router-dom";

const DashboardPage : FC = ()=>{

    // #region "Using react hooks and other stuff"
    const navigate = useNavigate()
    const dispatch = useDispatch();
    // #endregion

    return (

        <>

            <button onClick = { function (e: any) {
                e.stopPropagation()
                dispatch(onLogout())
            }}>

                Log Out

            </button>
                
        </>

    )

}

export default DashboardPage