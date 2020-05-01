import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Redirect, Link } from 'react-router-dom';



class Admin extends React.Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem('token');
        let loggedin=true;

        if (token == null) {
            loggedin=false;
        }
        this.state = { loggedin }
        console.log(this.state.loggedin);
        console.log(token);
    }


    render() {
       if(this.state.loggedin ===false){
           return <Redirect to="/login"></Redirect>
       }

        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Admin is login now</h2>
                <a href="/logout">Logout </a>
            </div>

        )
    }

}

export default Admin;


