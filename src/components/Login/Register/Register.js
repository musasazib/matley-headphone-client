import React, { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import image from '../../../images/banner.jpg'

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const history = useHistory();

    const { registerUser, isLoading, user, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password dont Match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        <div className="container">
        <div className="row align-items-center" style={{ height: "100vh" }}>
            <div className="col-md-6 col-12 login-style ">
                <h3 className="text-center pt-5 login-title">Please Register</h3>
                <Form onSubmit={handleLoginSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                            onBlur={handleOnBlur}
                            name="name"
                            type="text"
                            placeholder="Your name" />
                    </Form.Group>
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
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Retype Password</Form.Label>
                        <Form.Control
                            onBlur={handleOnBlur}
                            name="password2"
                            type="password"
                            placeholder="Retype password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <br />
                    <NavLink
                        to="/login"
                        style={{ textDecoration: 'none' }}
                    ><Button variant="text">Already Register? Please Login</Button>
                    </NavLink>
                    {isLoading && <Spinner animation="border" role="status" />}
                    {user?.email && <Alert variant="success">
                        Login successfully </Alert>}

                    {authError && <Alert variant="warning">{authError}</Alert>}
                </Form>
                
            </div>
            <div className="col-md-6 col-12 d-none d-md-block">
                <img className="img-fluid" src={image} alt="" />
            </div>
        </div>
    </div>
    );
};

export default Register;