import { useEffect, useState } from "react"
import {useNavigate } from "react-router"
import FooterCommon from "../../main/components/Common/FooterCommon/FooterCommon"
import axios from "axios"
import HeaderCommon from "../../main/components/Common/HeaderCommon/HeaderCommon"
import "./CartPage.css"
import { Link } from "react-router-dom"

export default function BagPage() {

    const navigate = useNavigate()

    const [bankAccounts, setBankAccounts] = useState<any>([])
    const [selectedBankAccount, setSelectedBankAccount] = useState<any>("")

    async function getProductsFromServer() {
        let result = await (await axios.get(`/bankaccount/get-all?PageNumber=1&PageSize=10`)).data;
        setBankAccounts(result.data)
        setSelectedBankAccount(result.data[0].name)
    }

    useEffect(()=> {
        getProductsFromServer()
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

                    </ul>

                    <h3>Your total: 0</h3>

                    <button className="button-proceed-payment" onClick={function () {
                        navigate(`/transaction/2/checkout`)
                    }}>

                            Proceed to payment

                    </button>

                    <button className="button-clear-cart">
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