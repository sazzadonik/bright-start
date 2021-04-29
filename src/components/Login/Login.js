import React, { useContext } from 'react';
import "./Login.css"
import google from "../../images/google-icon.svg";
import firebase from 'firebase';
import { firebaseConfig } from "./FirebaseConfig"
import { LoggedInContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


if (firebase.apps.length === 0) { firebase.initializeApp(firebaseConfig) }


const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const [loggedInUser, setLoggedInUser] = useContext(LoggedInContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleLogIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                findAdmin(displayName, photoURL, email);

            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });



        const findAdmin = (name, image, mail) => {
            fetch("https://gentle-depths-60007.herokuapp.com/isAdmin", {
                method: "POST",
                headers: {
                    "Content-type": "Application/json",
                },
                body: JSON.stringify({ email: mail })
            }).then(res => res.json()).then(data => {
                const newUser = { name: name, image: image, email: mail, isLoggedIn: true, isAdmin: data };
                setLoggedInUser({ ...newUser });
                history.replace(from)
            });
        }

    }

    return (
        <section className="mb-5 pb-5">
            <h1 className="mt-5">LogIn Here</h1>
            <div className="loginPage d-flex align-items-center">

                <div className="container">
                    <div className="row item-container">
                        <div className="col-md-12 m-auto  d-flex justify-content-around">
                            <button onClick={handleLogIn} className="bg-white buttonGoogle p-2"> LogIn With Google <img src={google} alt="" height="20px" className="mx-3" /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;