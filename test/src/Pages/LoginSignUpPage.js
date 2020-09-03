import React, { useState } from 'react';
import firebase from './../firebase'
import "./../CustomCss/LoginSingup.css";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useDispatch, useSelector } from 'react-redux';
import { upadateLoggedIn } from './../actions';
import img from './../images/bg-01.jpg'



function Main(props) {
    const dispatch = useDispatch();
    const [viewSingin, setViewSignin] = useState(true);
    var isLogged = useSelector(state => state.isLogged);
    if (isLogged) {
        props.history.replace("/loggedin");
    }

    async function Login(e) {
        e.preventDefault();


        var email = document.getElementById("email").value;
        var pass = document.getElementById("pass").value;
        try {
            await firebase.login(email, pass);
            dispatch(upadateLoggedIn(true));
            props.history.replace("/loggedin");

        } catch (error) {
            alert(error.message);
        }



    }
    async function Singup(e) {
        e.preventDefault();
        var email = document.getElementById("remail").value;
        var pass = document.getElementById("rpass").value;
        var name = document.getElementById("name").value;


        try {
            await firebase.register(email, pass, name);
            setViewSignin(true);
        } catch (error) {
            alert(error.message);
        }

    }
    function SinginPage() {




        var uiConfig = {
            signInFlow: "popup",
            signInOptions: [
                firebase.simpleAuth.GoogleAuthProvider.PROVIDER_ID
            ],
            callbacks: {
                signInSuccessWithAuthResult: (user) => {
                    dispatch(upadateLoggedIn(true));
                }
            }
        }
        return (

            <div class="limiter">
                <div class="container-login100">
                    <div class="wrap-login100">
                        <form class="login100-form validate-form">
                           
                            <h1 >Login To Continue</h1>

                            <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input class="input100" type="text" name="email" id="email"/>
                                <span class="focus-input100"></span>
                                <span class="label-input100">Email</span>
                            </div>


                            <div class="wrap-input100 validate-input" data-validate="Password is required">
                                <input class="input100" type="password" name="pass" id="pass" />
                                <span class="focus-input100"></span>
                                <span class="label-input100">Password</span>
                            </div>

                            <div class="flex-sb-m w-full p-t-3 p-b-32">
                                <div class="contact100-form-checkbox">
                                    <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                                    <label class="label-checkbox100" for="ckb1">
                                        Remember me
							        </label>
                                </div>

                                <div>
                                    <a href="#" class="txt1">
                                        Forgot Password?
							</a>
                                </div>
                            </div>

                            <div class="container-login100-form-btn">
                                <button class="login100-form-btn" onClick={Login}>
                                    Login
						</button>
                            </div>

                            <div class="text-center p-t-46 p-b-20">
                                <span class="txt2" onClick={() => {setViewSignin(false) }} style={{ cursor: "pointer" }}>
                                    or sign up
						</span>
                            </div>

                            <div class="login100-form-social flex-c-m">
                                <StyledFirebaseAuth
                                    uiConfig={uiConfig}
                                    firebaseAuth={firebase.auth}
                                />
                            </div>
                        </form>

                        <div className="login100-more">
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    function SingupPage() {
        return (
            <>
                <div class="limiter">
                    <div class="container-login100">
                        <div class="wrap-login100">
                            <form class="login100-form validate-form">
                                <span class="login100-form-title p-b-43">
                                    Register
					</span>

                                <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                    <input class="input100" type="text" id="name" />
                                    <span class="focus-input100"></span>
                                    <span class="label-input100">Name</span>
                                </div>

                                <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                    <input class="input100" type="text" name="email" id="remail" />
                                    <span class="focus-input100"></span>
                                    <span class="label-input100">Email</span>
                                </div>


                                <div class="wrap-input100 validate-input" data-validate="Password is required">
                                    <input class="input100" type="password" name="pass" id="rpass" />
                                    <span class="focus-input100"></span>
                                    <span class="label-input100">Password</span>
                                </div>

                                <div class="flex-sb-m w-full p-t-3 p-b-32">
                                    <div class="contact100-form-checkbox">
                                        <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                                        <label class="label-checkbox100" for="ckb1">
                                            Remember me
							        </label>
                                    </div>

                                    <div>
                                        <a href="#" class="txt1">
                                            Forgot Password?
							            </a>
                                    </div>
                                </div>


                                <div class="container-login100-form-btn">
                                    <button class="login100-form-btn" onClick={Singup}>
                                        Register
						</button>
                                </div>

                                <div class="text-center p-t-46 p-b-20">
                                    <span class="txt2" onClick={() => { setViewSignin(true) }} style={{ cursor: "pointer" }}>
                                        or sign ip
						</span>
                                </div>


                            </form>

                            <div className="login100-more">

                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }



    return (

        <>
            {viewSingin ? <SinginPage /> : <SingupPage />}
        </>

    );
}

export default Main;