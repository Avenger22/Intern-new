import { useEffect, useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import "./HeaderCommon.css"

export default function HeaderCommon(this: any) {
    
    return (

        <>

            <header className="header">
                        
                <div className="header-group-1">

                    <Link to="/movies">Bank System</Link>
                    
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

            </header>

        </>

    )

}