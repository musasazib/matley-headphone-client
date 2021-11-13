import React, { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import image from '../../../images/img1.png'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, isLoading, user, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleSignInGoogle = () => {
        signInWithGoogle(location, history);
    }

    return (
        <div className="container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6 col-12 login-style ">
                    <h3 className="text-center pt-5 login-title header-style pb-5">Please Login</h3>
                    <Form onSubmit={handleLoginSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                onBlur={handleOnBlur}
                                name="email"
                                type="email"
                                placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                onBlur={handleOnBlur}
                                name="password"
                                type="password"
                                placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <br />
                        <NavLink
                            to="/register"
                            style={{ textDecoration: 'none' }}
                        ><Button variant="text" className="text-danger">New user? Please Register</Button>
                        </NavLink>
                        {isLoading && <Spinner animation="border" role="status" />}
                        {user?.email && <Alert variant="success">
                            Login successfully </Alert>}

                        {authError && <Alert variant="warning">{authError}</Alert>}
                    </Form>
                    <p> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </p>
                    <Button onClick={handleSignInGoogle} variant="primary">Google Sign In</Button>
                </div>
                <div className="col-md-6 col-12 d-none d-md-block">
                    <img className="img-fluid" src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;