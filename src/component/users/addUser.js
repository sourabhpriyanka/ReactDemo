import React, { Component } from "react";
import { connect } from 'react-redux';
import {Container,Row,Col,Form,Button} from 'react-bootstrap';
import { ADD_USER ,UPDATE_USER} from '../../actions/users.js';


class AddUser extends React.Component {
   constructor (props){
      super (props); 
      this.state ={
         user:[],
         username:'',
         email:'',
         name:'',
         id:'',
         isInsert:false,
         isedit:false

      }
    }
    
    handleSubmit = (event) => {
      event.preventDefault();
      let name  =  event.target.name.value;
      let username =  event.target.username.value;
      let email    =  event.target.email.value;
      let id = event.target.id.value;
      if(this.props.isedit){
         this.props.dispatch({
            type:'UPDATE_USER',
            payload: {name,username, email,id}
         });
      }else{
         this.props.dispatch({
            type:'ADD_USER',
            payload: {id: Math.floor(Math.random() * 100),name,username, email}
         }); 
       }
    }



   render() {
     
   const user = (this.props.isedit?this.props.user[0]:this.state);
   const type= (this.props.isedit?'Update':'Save');
   const {id,username,name,email}  = user;

   return (
   <div style={{border:'2px solid #dee2e6',margin:'2px',padding:'5px' }}>
      <h4>Create User Form </h4>
       <Form onSubmit={this.handleSubmit}>
         <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
               <Form.Label>Name</Form.Label>
               <Form.Control type="text" placeholder="Enter Name"  name="name" 
               onChange={this.handleChange = (e) => this.setState({name:e.target.value}) } 
               defaultValue={name}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
               <Form.Label>User Name</Form.Label>
               <Form.Control type="text" placeholder="Enter UserName"  name= "username" 
               onChange={this.handleChange = (e) => this.setState({username:e.target.value}) }
               defaultValue={username}/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
               <Form.Label>Email</Form.Label>
               <Form.Control type="text" placeholder="Enter Email"  
               onChange={this.handleChange = (e) => this.setState({email:e.target.value}) }
                name= "email" defaultValue={email}/>
            </Form.Group>
         </Form.Row>

         <Button variant="primary" type="submit">
         <Form.Control type="hidden" name= "id" defaultValue={id}/>
            {type}
         </Button>
       </Form>  
     
       </div>
       );
   }
}

const mapStateToProps = state => {
   console.log(state);
   return { user: state.users.user,isedit:state.users.isedit};
 };
export default connect(mapStateToProps)(AddUser);
