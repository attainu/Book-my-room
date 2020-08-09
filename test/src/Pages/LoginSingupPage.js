import React, { useState } from 'react';
import firebase from './../firebase'
import "./../CustomCss/LoginSingup.css";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useDispatch, useSelector } from 'react-redux';
import { upadateLoggedIn } from './../actions';
import Singinimg from './../images/signin.jpg'
import Singupimg from './../images/signup.jpg'




function Main(props) {
    const dispatch = useDispatch();
    const [viewSingin, setVieSingin] = useState(true);
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
        var rep_pass = document.getElementById("re_pass").value;
        var name = document.getElementById("name").value;
        console.log(pass, rep_pass);
        if (pass == rep_pass) {
            try {
                await firebase.register(email, pass, name);
                setVieSingin(true);
            } catch (error) {
                alert(error.message);
            }
        } else {
            alert("passwords dont much")
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

            <section className="sign-in">
                <div className="container">
                    <div className="signin-content">
                        <div className="signin-image">
                            <figure><img src={Singinimg} /></figure>
                            <a href="#" onClick={() => { setVieSingin(false) }} className="signup-image-link">Create an account</a>
                        </div>

                        <div className="signin-form">
                            <h2 className="form-title">Sign in</h2>
                            <form className="register-form" id="login-form">
                                <div className="form-group">
                                    <label for="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="email" name="email" id="email" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <label for="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="pass" id="pass" placeholder="Password" />
                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" name="signin" id="signin" onClick={Login} className="form-submit" value="Log in" />
                                </div>
                            </form>
                            <div className="social-login">
                                <span className="social-label">Or login with</span>
                                <StyledFirebaseAuth
                                    uiConfig={uiConfig}
                                    firebaseAuth={firebase.auth}

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }

    function SingupPage() {
        return (
            <section class="signup">
                <div class="container">
                    <div class="signup-content">
                        <div class="signup-form">
                            <h2 class="form-title">Sign up</h2>
                            <form method="POST" class="register-form" id="register-form">
                                <div class="form-group">
                                    <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="name" id="name" placeholder="Your Name" />
                                </div>
                                <div class="form-group">
                                    <label for="email"><i class="zmdi zmdi-email"></i></label>
                                    <input type="email" name="email" id="remail" placeholder="Your Email" />
                                </div>
                                <div class="form-group">
                                    <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="pass" id="rpass" placeholder="Password" />
                                </div>
                                <div class="form-group">
                                    <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                                    <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
                                </div>

                                <div class="form-group form-button">
                                    <input type="submit" name="signup" id="signup" onClick={Singup} class="form-submit" value="Register" />
                                </div>
                            </form>
                        </div>
                        <div class="signup-image">
                            <figure><img src={Singupimg} alt="sing up image" /></figure>
                            <a href="#" class="signup-image-link" onClick={() => { setVieSingin(true) }}>I am already member</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }



    return (

        <>
            {viewSingin ? <SinginPage /> : <SingupPage />}
        </>

    );
}

export default Main;