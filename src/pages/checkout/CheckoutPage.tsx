import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import FooterCommon from "../../main/components/Common/FooterCommon/FooterCommon"
import HeaderCommon from "../../main/components/Common/HeaderCommon/HeaderCommon"
import useGetUser from "../../main/hooks/useGetUser"
import { RootState } from "../../main/store/redux/rootState"
import { IBankAccount, IBankAccountName } from "../../main/store/stores/cart/cart.store"
import "./CheckoutPage.css"

export default function CheckoutPage() {

    const user = useGetUser()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const totalValue: number = useSelector((state: RootState) => state.cart.totalValue);
    const selectedBankAccount: IBankAccount = useSelector((state: RootState) => state.cart.selectedBankAccount);
    const selectedBankAccountName: IBankAccountName = useSelector((state: RootState) => state.cart.selectedBankAccountName)
    const bankAccounts: IBankAccount[] = useSelector((state: RootState) => state.cart.bankAccounts)

    return (

        <>

        <HeaderCommon />
        
            <section className="container-payment">

                <form 
                    className="form-payment"
                    onSubmit={function (e) {
                        // e.preventDefault()
                        // handleFormSubmitPayment(e)
                    }}
                >

                    <div className="container-form-payment">

                        <h1>Payment details checkout</h1>

                        <label>
                            <span>Full name : {user.firstName} {user.lastName} </span>
                        </label>

                        <label>
                            <span>Email:  {user.email} </span>
                        </label>

                        <label>
                            <span>Phone:  {user.phone} </span>
                        </label>

                        <label>
                            <span>Total payment amount is: {totalValue} </span>
                        </label>

                        <label>
                            <span>Bank account selected by you is: {selectedBankAccount.name} </span>
                        </label>

                        <button type="submit" value="Submit">
                            Proceed to checkout
                        </button>

                    </div>

                </form>

            </section>

            <FooterCommon />
            
        </>

    )
    
}