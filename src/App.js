import React, { Component } from 'react';
import UserList from  './container/users/userList.js';
import AddUser from  './component/users/addUser.js';
import {Container} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
 
 
  render () {
    return (
      <Container fluid >
        <AddUser/>
        <UserList/>
      </Container>
    );
   
  }
}
export default App;
