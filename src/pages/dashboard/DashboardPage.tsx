import { FC, useEffect } from "react"
import onLogout from "../../main/store/stores/user/login.store.on-logout"
import { useDispatch, useSelector } from "react-redux"
import {RootState} from '../../main/store/redux/rootState'
import { Link, useNavigate } from "react-router-dom";
import HeaderCommon from "../../main/components/Common/HeaderCommon/HeaderCommon"
import FooterCommon from "../../main/components/Common/FooterCommon/FooterCommon"
import axios from "axios";

const DashboardPage : FC = ()=>{

    // #region "Using react hooks and other stuff"
    const navigate = useNavigate()
    const dispatch = useDispatch();
    // #endregion

    async function getProductsFromServer() {
        let result = await (await axios.get(`/product/get-all?PageNumber=1&PageSize=20`)).data;
        // console.log(result.data) save them in redux state
    }

    useEffect(()=> {
        getProductsFromServer()
    }, [])

    return (

        <>

            <HeaderCommon />

            <div className="dashboard-wrapper">

                <button onClick = { function (e: any) {
                    e.stopPropagation()
                    dispatch(onLogout())
                }}>

                    Log Out

                </button>

                <div className="products-wrapper">

                    {

                    }
                    <div className="product-item">

                        

                    </div>

                </div>

            </div>
                
            <FooterCommon />

        </>

    )

}

export default DashboardPage