// #region "Importing stuff"
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { TProduct } from "../../main/interfaces/TProduct";
import {RootState} from "../../main/store/redux/rootState"
import ReactLoading from 'react-loading';
import "./ProductItemPage.css"

import { 
    setProductItem,
    invalidateProductItem
} from "../../main/store/stores/dashboard/dashboard.store"
import HeaderCommon from "../../main/components/Common/HeaderCommon/HeaderCommon";
import FooterCommon from "../../main/components/Common/FooterCommon/FooterCommon";
// #endregion

const randColour = ["green", "red", "blue", "yellow"][
    Math.floor(Math.random() * 4)
];

export default function ProductItemPage() {

    // #region "React hooks"
    const dispatch = useDispatch()
    const params = useParams()
    const navigate = useNavigate()
    // #endregion

    // #region "State redux and axios etc"

    //@ts-ignore
    const productItem: TProduct = useSelector((state: RootState) => state.dashboard.productItem);

    async function getProductItemFromServer() {
        let result = await (await axios.get(`/product/${params.id}`));
        dispatch(setProductItem(result.data))
    }

    useEffect(()=> {
        getProductItemFromServer()
    }, [params.id])

    // #endregion

    // #region "Checking if product came and loading if it still loading the res from server"

    if (productItem?.name === null && productItem === null) {

        return (
            <div className="loading-wrapper">
                <ReactLoading type={"spin"} color={"#000"} height={200} width={100} className="loading" />
            </div>
        )    
    
    }

    // if (productItem?.name === undefined) {
    //     return <main>Item not found</main>
    // }

    // #endregion
    
    return (

        <>

            <section className='container-product-item'>

                <HeaderCommon />
                
                <main className='main-container'>

                    <div className='product-ribbon'>
                        <span className='ribbon-span'>Products / </span>
                        <span className='ribbon-span'>{productItem?.categoryId} / </span>
                        <span className='ribbon-span'>{productItem?.name}</span>
                    </div>

                    <section className="product-detail main-wrapper">

                        <img
                            src={`data:image/jpeg;base64,${productItem?.base64Image}`}
                            alt={`${productItem?.name}`}
                        />

                        <div className="product-detail__side" style={{ borderColor: `var(--${randColour})` }}>

                            <h3>{productItem?.name}</h3>

                            <h2><span className='special-product-span'>Product Name</span> : {productItem?.name}</h2>

                            <p>
                                <span className='special-product-span'>Short Description</span> : {productItem?.shortDescription}
                            </p>

                            <p>
                                <span className='special-product-span'>Long Description</span> : {productItem?.longDescription}
                            </p>

                            <p>
                                <span className='special-product-span'>
                                    Item Price
                                </span> : ${productItem?.price}
                            </p>

                            <p>
                                <span className='special-product-span'>
                                    CategoryId
                                </span> : {productItem?.categoryId}
                            </p>

                            <div className='button-wish-wrapper'>
                                
                                <button onClick={function (e) {
                                    
                                }}>

                                    Add to Cart

                                </button>

                            </div>

                        </div>

                    </section>

                </main>

                <FooterCommon />

            </section>
            
        </>

    )

}