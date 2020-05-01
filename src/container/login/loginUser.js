import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchUserDate,deleteUser,getUser} from '../../actions/users.js';
import UserList from  '../../component/users/userList.js';

const mapStateToProps = state => {
   return { users: state.users};
 };
export default connect(mapStateToProps,{fetchUserDate,deleteUser,getUser})(UserList);
