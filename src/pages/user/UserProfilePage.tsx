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
import ITransaction from '../../main/interfaces/ITransaction';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../main/store/redux/rootState';
import axios from 'axios';
// #endregion


export default function UserProfilePage({validateUser}:any) {


    // #region "state redux and other react hooks here"
    const [tab, setTab] = useState<any>("home")
    const navigate = useNavigate()
    const params = useParams()
    const user = useGetUser()
    const dispatch = useDispatch()
    // #endregion


    // #region "fetch things"
    const transactions: ITransaction[] = useSelector((state: RootState) => state.profile.transactions);

    async function getProductsFromServer() {
        let result = await (await axios.get(`bankaccount/32/transactions?PageNumber=1&PageSize=10`)).data;
        dispatch(setTransactions(result.data))
    }

    useEffect(()=> {
        getProductsFromServer()
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

    
    return (

        <main>

            <HeaderCommon />

            <section className="container-profile-menus">

                <div className="container-profile-nav">

                    <div className="profile-info">

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

                                <div className="container-videos">

                                    
                                    <ul className='favorite-movies'>

                                    </ul>

                                </div>

                            </>

                        ): params.tab === "about" ? (

                            <div className="container-about">
                                <span>This is my account {user?.username}</span>
                            </div>

                        ):null

                    }

                </div>

            </section>

            <FooterCommon />
        
        </main>

    )
    
}