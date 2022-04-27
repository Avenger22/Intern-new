// #region "Importing stuff"
import { FC, useEffect } from "react"
import onLogout from "../../main/store/stores/user/login.store.on-logout"
import { useDispatch, useSelector } from "react-redux"
import {RootState} from '../../main/store/redux/rootState'
import { Link, useNavigate } from "react-router-dom";
import HeaderCommon from "../../main/components/Common/HeaderCommon/HeaderCommon"
import FooterCommon from "../../main/components/Common/FooterCommon/FooterCommon"
import axios from "axios";
import "./DashboardPage.css"

import { 
    setProducts,
    invalidateProducts
} from "../../main/store/stores/dashboard/dashboard.store"

import { TProduct } from "../../main/interfaces/TProduct";
// #endregion

const DashboardPage : FC = ()=>{

    // #region "Using react hooks and other stuff"
    const navigate = useNavigate()
    const dispatch = useDispatch();
    // #endregion

    // #region "Products state and fetching etc with axios"
    const products: TProduct[] = useSelector((state: RootState) => state.dashboard.products);

    async function getProductsFromServer() {
        let result = await (await axios.get(`/product/get-all?PageNumber=1&PageSize=20`)).data;
        dispatch(setProducts(result.data))
        // console.log(result.data) save them in redux state
    }

    useEffect(()=> {
        getProductsFromServer()
    }, [])

    console.log(products)
    // #endregion

    return (

        <div className="dashboard-main-wrapper">

            <HeaderCommon />

            <button onClick = { function (e: any) {
                    e.stopPropagation()
                    dispatch(onLogout())
                }}>

                    Log Out

                </button>
                
            <div className="dashboard-wrapper">

                <table className='table-data'>

                    <thead>
  
                        <tr>
            
                            <th>Id: </th>
                            <th>ProductName: </th>
                            <th>shortDescription: </th>
                            <th>longDescription: </th>
                            <th>Price: </th>
                            <th>CategoryId: </th>
                            {/* <th>base64Image: </th> */}
            
                        </tr>
            
                    </thead>
  
                <tbody>

                    { 
                    
                        // @ts-ignore
                        products.map(product => 
                            
                            <tr className="post-item" key = {product.id} onClick={() => {
                                // handlePostClick(post)
                            }}>

                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.shortDescription}</td>
                                <td>{product.longDescription}</td>
                                <td>{product.price}</td>
                                <td>{product.categoryId}</td>
                                {/* <td>{product.price}</td> */}

                            </tr>
                        
                        )

                    }

                </tbody>

                </table>

            </div>
                
            <FooterCommon />

        </div>

    )

}

export default DashboardPage