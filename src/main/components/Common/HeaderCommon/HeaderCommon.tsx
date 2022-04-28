import { useEffect, useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import "./HeaderCommon.css"
import {RootState} from '../../../store/redux/rootState'
import onLogout from "../../../store/stores/user/login.store.on-logout"

import useGetUser from "../../../hooks/useGetUser/index"
import { useDispatch } from "react-redux";

export default function HeaderCommon(this: any) {
    
    const user = useGetUser()
    const dispatch = useDispatch();
    // console.log(user)

    return (

        <>

            <header className="header">
                        
                <div className="header-group-1">

                    <Link to="/">Bank System</Link>
                    
                    <ul className="list-nav">

                        <div className="div-inside-li">                            
                            <NavLink to = "/" className="special-uppercase" >Nav1</NavLink>
                        </div>

                        <div className="div-inside-li-special">

                                <div className="genre-drop">

                                    <li className="special-uppercase" onClick={function (e) {
                                        e.stopPropagation()
                                    }}>Nav 2</li>

                                </div>

                        </div>

                        <div className="div-inside-li">                           
                            <NavLink to ="/" className="special-uppercase" >Nav 3</NavLink>                           
                        </div>

                    </ul>

                </div>

                <div className="header-group-2">
                    
                    <form className="button-search" onSubmit={function (e) {
                        
                        // e.preventDefault()
                        // //@ts-ignore
                        // setSearchTerm(e.target.value)
                        // //@ts-ignore
                        // navigate(`../movies/search/${e.target.searchMovie.value}`)
                    
                    }}>

                        <input type="search" name="searchMovie"  placeholder="Search for Products..." aria-label="Search through site content" 
                        onChange={function (e) {

                            // navigate(`../movies/search/${e.target.value}`)

                            // if (e.target.value.length > 0) {
                            //     setSearchTerm(e.target.value)
                            //     navigate(`../movies/search/${e.target.value}`)
                            // }

                            // else {
                            //     setSearchTerm(e.target.value)
                            //     navigate(`../movies/search/`)
                            // }
                            
                        }}/>

                        <button type="submit">
                            <i className="fa fa-search"></i>
                        </button>

                    </form>

                    { user === null ? (

                            <button className="button-login-header" onClick={function () {
                            //   navigate("../login")
                            }}>

                                <i className="material-icons special-icon">account_circle</i>
                                
                                Sign In

                            </button>

                        ): (

                            <div className="dropdown">

                              <li
                                className="dropbtn"
                                onClick={function () {
                                    // redirectToProfile(user);
                                }}
                              >

                                <img src={"/assets/images/blank-avatar.jpg"} />
                                {user.username}
                                
                              </li>
                    
                              <div className="dropdown-content">

                                <button
                                  className="log-out"
                                  onClick={function (e) {
                                    e.stopPropagation()
                                    dispatch(onLogout())
                                  }}
                                >
                                  <span>Log Out</span>

                                </button>

                              </div>

                            </div>

                        )}

                </div>

            </header>

        </>

    )

}