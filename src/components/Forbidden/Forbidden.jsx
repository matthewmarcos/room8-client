import React, { Component } from 'react';
import { Link } from 'react-router-bootstrap';

const Forbidden = (props) => {
    const LoginPage = (
        <Link to="login">Login page</Link>
    );

    return (
        <div>
            <h1>Forbidden!</h1>
        </div>
    );
}

export default Forbidden;
