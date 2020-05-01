import React, { Component } from "react";
import { connect } from 'react-redux';
import {Container,Row,Col} from 'react-bootstrap';


class UserList extends React.Component {
   constructor (props){
      super (props); 
    }
    
    componentDidMount() {
      this.props.fetchUserDate();
    }
   render() {
     
      const users = this.props.users.users;
      const UserRow = users.map((user,index)=>{   
         return (
               <tr key={index}>
                  <td>{index+1}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td><button className="btn btn-primary" style={{marginRight:'2px'}}
                        onClick={()=>this.props.getUser(user.id)}>
                        Edit
                        </button>
                        <button className="btn btn-primary"
                        onClick={()=>this.props.deleteUser(user.id)}>
                        Delete</button></td>
               </tr>
         );   
     });  
   
   return (
      <React.Fragment>
       <h4>List User  </h4>
        <div className="table-responsive">
         <table className="table table-striped table-bordered">
          <thead>
             <tr>
               <th>Sr NO</th> 
               <th>Name</th>
               <th>UsersName</th>
               <th>Email</th>
               <th>Action</th> 
            </tr>
          </thead>
          <tbody>
            {UserRow} 
         </tbody>
         </table>
         </div>
      </React.Fragment>
       );
   }
}

export default UserList;
