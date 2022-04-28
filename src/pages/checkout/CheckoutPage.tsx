import FooterCommon from "../../main/components/Common/FooterCommon/FooterCommon"
import HeaderCommon from "../../main/components/Common/HeaderCommon/HeaderCommon"
import "./CheckoutPage.css"

export default function CheckoutPage() {

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

                            <span>Full name : </span>

                            <input 
                                required 
                                name="fullname" 
                                type="text" 
                                placeholder="Enter your full name : " 
                                onChange={function (e) {
                                    // handleFullNameChangePayment(e)
                                }}
                            />
                        
                        </label>

                        <label>

                            <span>Address : </span>

                            <input 
                                required 
                                name="address" 
                                type="text" 
                                placeholder="Enter your address: "
                                onChange={function (e) {
                                    // handleAddressChangePayment(e)
                                }} 
                            />
                        
                        </label>

                        <label>

                            <span>Email: </span>
                            
                            <input 
                                required 
                                name="email" 
                                type="email" 
                                placeholder="Enter your email: " 
                                onChange={function (e) {
                                    // handleEmailChangePayment(e)
                                }}
                            />

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