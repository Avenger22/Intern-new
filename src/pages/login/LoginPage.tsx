import { FC, useEffect } from "react"
// import { useStore } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css"

const LoginPage : FC = ()=>{

    const navigate = useNavigate()

    return (

        <>

            <div className="login-page-wrapper">

                <div className="login-main-wrapper">

                    <form
                        id="login-form"
                        onSubmit={function (e) {
                            // logInUser(e)
                            // navigate("../dashboard");
                        }}
                    >

                        <h1>Bank System</h1>

                        <label htmlFor="">

                            <input
                                type="text"
                                name="usernameLogin"
                                placeholder="Enter your userName: "
                                required
                                onChange={function (e) {
                                    // setUserNameLogin(e)
                                }}
                            />

                        </label>

                        <label htmlFor="">

                            <input
                                type="password"
                                name="passwordLogin"
                                placeholder="Enter your password"
                                required
                                onChange={function (e) {
                                    // setPasswordLogin(e)
                                }}
                            />

                        </label>

                        <label htmlFor="">
                            <button>Log In</button>
                        </label>

                        <label id="signup-link-wrapper" htmlFor="">

                            Don't have an account?{" "}

                            <Link id="link" to={"../register"}>

                                Sign Up

                            </Link>

                        </label>

                    </form>

                </div>

            </div>
            
        </>

    )
    
}

export default LoginPage