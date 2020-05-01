import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import { connect } from 'react-redux';
//import { userActions } from '../../actions/actions';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Signup extends React.Component {

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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
	
        e.preventDefault();
		const apiUrl = 'http://localhost:4000/createusers';
		
		const options = {
		  method: 'POST',
		  body: this.state
		}	

		console.log(options);
		
		
		 fetch(apiUrl, options).then(res => res.json()).then(
				(result) => {
				  console.log(result);
				},
				(error) => {
				   console.log(error);
				  this.setState({ error });
				}
			  )
			


				
						
    }




    render() {

        const { username, password, submitted, loggedin,errusername} = this.state;
          
      
        return (
            <div className="container">
                <h2>Sign Up</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="name" value={this.state.value} onChange={this.handleChange} />
                        <div className='error'>{this.state.errusername}</div>
                    </div>
                    <div>
                        <label htmlFor="password">First Name</label>
                        <input type="text" className="form-control" name="first_name" value={this.state.value} onChange={this.handleChange} />
                        <div className='error'>{this.state.errfirst_name}</div>
                    </div>
					 <div>
                        <label htmlFor="password">Last Name</label>
                        <input type="text" className="form-control" name="last_name" value={this.state.value} onChange={this.handleChange} />
                        <div className='error'>{this.state.errlast_name}</div>
                    </div>
					 <div>
                        <label htmlFor="password">Phone</label>
                        <input type="text" className="form-control" name="phone" value={this.state.value} onChange={this.handleChange} />
                        <div className='error'>{this.state.errphone}</div>
                    </div>
					
                    <div className="container">
                        <button className="btn btn-primary">SignUp</button>

                    </div>
                </form>
            </div>

        )
    }

}

export default Signup;


