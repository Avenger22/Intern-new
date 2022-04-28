// #region "Importing stuff"
import { FC, useEffect } from "react"
import onLogout from "../../main/store/stores/user/login.store.on-logout"
import { useDispatch, useSelector } from "react-redux"
import {RootState} from '../../main/store/redux/rootState'
import { Link, useNavigate } from "react-router-dom";
import HeaderCommon from "../../main/components/Common/HeaderCommon/HeaderCommon"
import FooterCommon from "../../main/components/Common/FooterCommon/FooterCommon"
import axios from "axios";
import "../dashboard/DashboardPage.css"
import ReactLoading from 'react-loading';

import { 
    setProducts,
    invalidateProducts,
    setProductItem,
    invalidateProductItem
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
    
    //@ts-ignore
    const productItem: TProduct = useSelector((state: RootState) => state.dashboard.productItem);

    async function getProductsFromServer() {
        let result = await (await axios.get(`/product/get-all?PageNumber=1&PageSize=20`)).data;
        dispatch(setProducts(result.data))
    }

    useEffect(()=> {
        getProductsFromServer()
    }, [])

    // #endregion


    if (products[0]?.name === undefined) {

        return (
            <div className="loading-wrapper">
                <ReactLoading type={"spin"} color={"#000"} height={200} width={100} className="loading" />
            </div>
        )    
    
    }


    return (

        <div className="dashboard-main-wrapper">

            <HeaderCommon />
                
            <div className="dashboard-wrapper">

                <div className='products-wrapper'>

                    { 
                    
                        // @ts-ignore
                        products.map(product => 
                            
                            <div className="product-item" key = {product.id} onClick={() => {
                                navigate(`/products/${product.id}`)
                            }}>

                                <img
                                    src={`data:image/jpeg;base64,${product.base64Image}`}
                                    alt={`${product.name}`}
                                />

                                <span><strong>Product Name:</strong> {product.name}</span>
                                <p><strong>Product Short Desc:</strong> {product.shortDescription}</p>
                                <span><strong>Product Price:</strong> {product.price}$</span>
                                <span><strong>Product Category:</strong> {product.categoryId}</span>    

                            </div>
                        
                        )

                    }

                </div>

            </div>
                
            <FooterCommon />

        </div>

    )

}

export default DashboardPage