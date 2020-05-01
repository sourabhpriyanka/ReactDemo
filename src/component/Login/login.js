import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import { connect } from 'react-redux';
//import { userActions } from '../../actions/actions';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            username: '',
            password: '',
            submitted: false,
            loggedin: '',
            errusername: '',
            errpassword: '',
           
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        const token = localStorage.getItem('token');
        this.state = { token: token }
      
    }

   

    componentDidMount() {
        if (this.state.token) {
            this.setState({ loggedin: true });
        }
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }


    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;
 
        const isvalid = this.validateForm();
        console.log(isvalid);

        if (username === 'admin' && password === '1234') {
            localStorage.setItem('token', 'testdata');
            this.setState({ loggedin: true });
        }
    }



    validateForm = () => {
        
        let  errusername= '';
        let  errpassword= '';
        let formIsValid = true;

        if(!this.state.username){
            formIsValid = false;
            errusername = "Username is required";

        }
        if(!this.state.password){
            formIsValid = false;
            errpassword = "Password is required";

        }
       
        this.setState({ errusername: errusername ,errpassword:errpassword});
        return formIsValid;
      }


    render() {

        const { username, password, submitted, loggedin,errusername} = this.state;
          
        if (this.state.loggedin) {
            return <Redirect to="/admin"></Redirect>
        }
        
        return (
            <div className="container">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={this.state.value} onChange={this.handleChange} />
                        <div className='error'>{this.state.errusername}</div>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={this.state.value} onChange={this.handleChange} />
                        <div className='error'>{this.state.errpassword}</div>
                    </div>
                    <div className="container">
                        <button className="btn btn-primary">Login</button>
                        <a href="/signup">SignUp</a>
                    </div>
                </form>
            </div>

        )
    }

}

export default Login;


