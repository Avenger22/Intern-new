// #region "Importing stuff"
import { FC, useEffect, useState } from "react"
import onLogout from "../../main/store/stores/user/login.store.on-logout"
import { useDispatch, useSelector } from "react-redux"
import {RootState} from '../../main/store/redux/rootState'
import { Link, useNavigate, useParams } from "react-router-dom";
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


const DashboardPage : FC = () => {


    // #region "React hooks"
    const params = useParams()
    // #endregion


    // #region "Pagination in frontend not implemented"

    const [pageNumber, setPageNumber] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(20)

    let pagesVisited = pageNumber * itemsPerPage
    let pageCount

    // if (params.query) {
    //     pageCount = Math.ceil(moviesCountSearch / itemsPerPage)
    // }

    // else {
    //     pageCount = Math.ceil(moviesCount?.count / itemsPerPage)
    // }

    function handleChangingPageNumber(selected:any) {
        setPageNumber(selected)
    }
    
    const changePage = ({ selected }:any) => {

        if ( params.sort === undefined && params.query === undefined ) {
            handleChangingPageNumber(selected)
            navigate(`../movies/page/${selected + 1}`)
        }

        else if ( params.sort && params.query === undefined ) {
            handleChangingPageNumber(selected)
            navigate(`../movies/sortBy/${params.sort}/page/${selected + 1}`)
        }

        else {
            handleChangingPageNumber(selected)
            navigate(`../movies/search/${params.query}/page/${selected + 1}`)
        }

    }

    // #endregion


    // #region "Using react hooks and other stuff"
    const navigate = useNavigate()
    const dispatch = useDispatch();
    // #endregion


    // #region "Products state and fetching etc with axios"
    const products: TProduct[] = useSelector((state: RootState) => state.dashboard.products);
    
    //@ts-ignore
    const productItem: TProduct = useSelector((state: RootState) => state.dashboard.productItem);

    async function getProductsFromServer() {
        let result = await (await axios.get(`/product/get-all?PageNumber=1&PageSize=10`)).data;
        dispatch(setProducts(result.data))
    }

    useEffect(()=> {
        getProductsFromServer()
    }, [])

    // #endregion


    // #region "Checking if the user came from server"
    if (products[0]?.name === undefined) {

        return (

            <div className="loading-wrapper">
                <ReactLoading type={"spin"} color={"#000"} height={200} width={100} className="loading" />
            </div>

        )    
    
    }
    // #endregion


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