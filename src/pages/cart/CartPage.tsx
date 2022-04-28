import {useNavigate } from "react-router"
import FooterCommon from "../../main/components/Common/FooterCommon/FooterCommon"
import HeaderCommon from "../../main/components/Common/HeaderCommon/HeaderCommon"
import "./CartPage.css"

export default function BagPage() {

    const navigate = useNavigate()

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
                        onChange={function (e) {
                            // handleOnChangeSelect(e.target.value)
                        }}>

                            <option value="Default">No Sorting (Deffault)</option>
                            <option value="price-asc">Sort by price ascending</option>
                            <option value="price-desc">Sort by price descending</option>
                            <option value="date-asc">Sort by oldest</option>
                            <option value="date-desc">Sort by newest</option>
                            <option value="name-asc">Sort by name ascending</option>
                            <option value="name-desc">Sort by name descending</option>

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

                </section>

                <FooterCommon />

            </div>
      
        </>

    )
    
}