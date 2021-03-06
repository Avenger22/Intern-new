// #region "Importing stuff"
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { useNavigate, useParams } from 'react-router-dom';
import FooterCommon from '../../main/components/Common/FooterCommon/FooterCommon';
import HeaderCommon from '../../main/components/Common/HeaderCommon/HeaderCommon';
import useGetUser from '../../main/hooks/useGetUser';
import "./UserProfilePage.css"

import {
    setTransactions,
    invalidateTransactions
} from "../../main/store/stores/profile/profile.store"

import {
    setBankAccounts
} from "../../main/store/stores/cart/cart.store"

import ITransaction from '../../main/interfaces/ITransaction';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../main/store/redux/rootState';
import axios from 'axios';
import { IBankAccount } from '../../main/store/stores/cart/cart.store';
// #endregion


export default function UserProfilePage({validateUser}:any) {


    // #region "state redux and other react hooks here"
    const transactions: ITransaction[] = useSelector((state: RootState) => state.profile.transactions);
    const bankAccounts: IBankAccount[] = useSelector((state: RootState) => state.cart.bankAccounts);

    const [tab, setTab] = useState<any>("home")

    const [selectedBankProfile, setSelectedBankProfile] = useState<any>(bankAccounts[0])
    const [selectedBankProfileName, setSelectedBankProfileName] = useState<any>(bankAccounts[0]?.name)

    const navigate = useNavigate()
    const params = useParams()

    const user = useGetUser()

    const dispatch = useDispatch()
    // #endregion


    // #region "fetch things"
    async function getTransactionsFromServer() {
        let result = await (await axios.get(`bankaccount/${selectedBankProfile?.id}/transactions?PageNumber=1&PageSize=10`)).data;
        dispatch(setTransactions(result.data))
    }

    // if (selectedBankProfile !==)
    useEffect(()=> {
        getTransactionsFromServer()
    }, [selectedBankProfile])

    async function getBankAccountsFromServer() {
        let result = await (await axios.get(`/bankaccount/get-all?PageNumber=1&PageSize=10`)).data;
        dispatch(setBankAccounts(result.data))
    }

    useEffect(() => {
        getBankAccountsFromServer()
    }, [])
    // #endregion


    // #region "Checking stuff from server wich came and loading"
    if(user === null || user?.username === undefined) {

        return (

            <div className="loading-wrapper">
                <ReactLoading type={"spin"} color={"#000"} height={200} width={100} className="loading" />
            </div>

        )
        
    }
    // #endregion

    
    // #region "Helpers functions"
    function handleOnChangeSelect(e:any) {
        setSelectedBankProfileName(e.target.value)
    }

    function handleOnChangeBankAccount(e:any) {

        const newBankAccounts = [...bankAccounts]
        const bankAccountFinal = newBankAccounts.find(bankAccount => bankAccount.name === e.target.value )

        setSelectedBankProfile(bankAccountFinal)

    }
    // #endregion

    
    return (

        <main className='main-profile'>

            <HeaderCommon />

            <section className="container-profile-menus">

                <div className="container-profile-nav">

                    <div className="profile-info">]
                        <img src="https://villagesonmacarthur.com/wp-content/uploads/2020/12/Blank-Avatar.png" />
                        <span className="userName-span">{user?.username}</span>
                    </div>

                </div>

                <div className="container-tabs">

                    <ul className="list-tabs">

                        <li className= {params.tab === "favoriteMovies" ? "clicked": "videos-tab"} onClick={() => {
                            navigate(`/profile/${user?.username}/transactions`)
                        }}>User transactions</li>
                        
                        <li className= {params.tab === "aboutUs" ? "clicked": "about-tab"} onClick={() => {
                            navigate(`/profile/${user?.username}/about`)
                        }}>User information</li>

                    </ul>

                    { 

                        params.tab === "transactions" ? (

                            <>
                            
                                <h3 className="special-video-you">User Transactions</h3>
                                
                                <form id="filter-by-sort">

                                    <label htmlFor="filter-by-type">
                                        <h3>Choose bank account: </h3>
                                    </label>
                            
                                    <select name="filter-by-sort" id="filter-by-sort" 
                                    onChange={function (e: any) {
                                        handleOnChangeSelect(e)
                                        handleOnChangeBankAccount(e)
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

                                    <label htmlFor="filter-by-type">
                                        <h3>Bank balance: {selectedBankProfile?.balance}</h3>
                                    </label>
                    
                                </form>

                                <div className="container-transactions">

                                    <ul className='transactions'>

                                        {

                                            transactions.map(transaction => 
                                                
                                                <li key={transaction.id} className="transaction-element">

                                                    <h3>Transaction ID: <strong>{transaction.id}</strong></h3>
                                                    <span>Transaction bank account ID: <strong>{transaction.bankAccountId}</strong></span>
                                                    <span>Transaction bank account name: <strong>{selectedBankProfileName}</strong></span>
                                                    <span>Transaction action: <strong>{transaction.action}</strong></span>
                                                    <span>Transaction amount: <strong>{transaction.amount}</strong></span>
                                                    <span>Transaction description: <strong>{transaction.description}</strong></span>
                                                    <span>Transaction isActive: <strong>{transaction.isActive ? "true" : "false"}</strong></span>
                                                    <span>Transaction dateCreated: <strong>{transaction.dateCreated}</strong></span>

                                                </li>

                                            )

                                        }

                                    </ul>

                                </div>

                            </>

                        ): params.tab === "about" ? (

                            <div className="container-about">
                                <span>This is my account {user?.username}</span>
                                <span>My name is: {user?.firstName}</span>
                                <span>My name is: {user?.lastName}</span>
                                <span>My email is: {user?.email}</span>
                                <span>My birthdate is: {user?.birthdate}</span>
                                <span>My phone number is: {user?.phone}</span>
                            </div>

                        ): null

                    }

                </div>

            </section>

            <FooterCommon />
        
        </main>

    )
    
}