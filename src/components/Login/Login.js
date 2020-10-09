import React, { useContext } from 'react';
import { UserContext } from '../../App';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import './Login.css'

const Login = () => {

    const [signedInUser, setSignedInUser] = useContext(UserContext)


    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }


    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email } = res.user;
                const signedUser = {
                    email: email,
                    name: displayName
                };
                setSignedInUser(signedUser);
                history.replace(from)
            })
            .catch(error => {
                var errorMessage = error.message;
                console.error(error, errorMessage);
            })
    };

    return (
        <div className="page-bg">
            <Container align="center">
                <div className="login mb-5">
                    <h3>Login With</h3>
                    <Button onClick={handleGoogleSignIn} size="lg" className="rounded-pill" variant="outline-dark " block>Continue With Google</Button>
                </div>
            </Container>
        </div>
    );
};

export default Login;