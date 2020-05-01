import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


class Logout extends React.Component {
    constructor(props) {
        super(props);
        localStorage.removeItem('token');
    }

   
    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Home</h2>
                <a href="/">Again Login </a>
            </div>
        )
    }

}
export default Logout;


