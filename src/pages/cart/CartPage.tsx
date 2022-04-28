import { useEffect, useState } from "react"
import {useNavigate } from "react-router"
import FooterCommon from "../../main/components/Common/FooterCommon/FooterCommon"
import axios from "axios"
import HeaderCommon from "../../main/components/Common/HeaderCommon/HeaderCommon"
import "./CartPage.css"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { TProduct } from "../../main/interfaces/TProduct"
import { RootState } from "../../main/store/redux/rootState"
import { ICartProduct } from "../../main/store/stores/cart/cart.store"

import {
    deleteProductById,
    changeProductQuantity,
    invalidateCart
} from "../../main/store/stores/cart/cart.store"

export default function BagPage() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [bankAccounts, setBankAccounts] = useState<any>([])
    const [selectedBankAccount, setSelectedBankAccount] = useState<any>("")
    const [selectedQuantityCart, setSelectedQuantityCart] = useState<any>("")

    const productsInTheCart: ICartProduct[] = useSelector((state: RootState) => state.cart.products);
    const totalValue: number = useSelector((state: RootState) => state.cart.totalValue);

    async function getBankAccountsFromServer() {
        let result = await (await axios.get(`/bankaccount/get-all?PageNumber=1&PageSize=10`)).data;
        setBankAccounts(result.data)
        setSelectedBankAccount(result.data[0].name)
    }

    useEffect(()=> {
        getBankAccountsFromServer()
    }, [])

    function handleOnChangeSelect(e:any) {
        setSelectedBankAccount(e.target.value)
    }
    
    return (

        <>

            <div className="bag-menus-wrapper">

                <HeaderCommon />

                <section className="basket-container">

                    <form id="filter-by-sort">

                        <label htmlFor="filter-by-type">
                            <h3>Choose bank account: </h3>
                        </label>
                        
                        <select name="filter-by-sort" id="filter-by-sort" 
                        onChange={function (e: any) {
                            handleOnChangeSelect(e)
                        }}>
                            
                            {
                            
                                bankAccounts?.length === 0 ? (
                                    <option value="Default">No Bank Account</option>
                                ): (
                 
                                    //@ts-ignore
                                    bankAccounts.map(bankAccount =>  
                                        <option value={bankAccount.name}>{bankAccount.name}</option>
                                    )

                                )

                            }

                        </select>
                    
                    </form>

                    <h2>Your Orders Cart</h2>

                    <ul>
                            
                        {

                            productsInTheCart.map(productCart => 
                                
                                <li key={productCart.product.id}>

                                    <article className="basket-container__item">

                                        <img
                                            src={`data:image/jpeg;base64,${productCart.product.base64Image}`}
                                            alt = {productCart.product.name}
                                            width="90"
                                        />

                                        <p>{productCart.product.name}</p>

                                        <p>
                                            
                                            <span>Quantity: </span>

                                            <select 
                                                name = "total-options" 
                                                defaultValue = {productCart.quantity}

                                                onChange={function(e) {
                                                    setSelectedQuantityCart(e.target.value)
                                                    dispatch(changeProductQuantity({ productId: productCart.product.id, quantity: Number(selectedQuantityCart) }))
                                                }}>
                                                    
                                                <option value="1">
                                                    1
                                                </option>
                                                    
                                                <option value="2">
                                                    2
                                                </option>

                                                <option value="3">
                                                    3
                                                </option>

                                                <option value="4">
                                                    4
                                                </option>

                                                <option value="5">
                                                    5
                                                </option>

                                            </select>

                                        </p>
                                        
                                        {/* <p>Item total: {totalValue}</p> */}
                                        
                                        <button 
                                            onClick={function () {
                                                navigate(`/products/${productCart.product.id}`)
                                            }}>

                                            Go to product
                                        </button>
                                        
                                        <button onClick={function () {
                                            dispatch(deleteProductById(productCart.product.id))
                                        }}>X</button>

                                    </article>

                                </li>
                                
                            )

                        }

                    </ul>

                    <h3>Your total: {totalValue}</h3>

                    <button className="button-proceed-payment" onClick={function () {
                        navigate(`/transaction/2/checkout`)
                    }}>

                            Proceed to payment

                    </button>

                    <button className="button-clear-cart" onClick={function () {
                        dispatch(invalidateCart())
                    }}>
                        Clear Cart
                    </button>

                    <Link to = "/createBankAccount" className="create-account-bank">
                        Create a bank account
                    </Link>

                </section>

                <FooterCommon />

            </div>
      
        </>

    )
    
}