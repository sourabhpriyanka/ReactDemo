import axios from "axios";

export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const GET_USER = 'GET_USER';
export const UPDATE_USER ='UPDATE_USER';



export const fetchUserDate = () =>{
    const url = "https://jsonplaceholder.typicode.com/users";
    return function(dispatch) {
      axios.get(url).then(response => response.data)
      .then((data) => {
        dispatch({ type: "FETCH_USER_DATA", payload: data });
       })
    };
  } 


  export const addUser = (data) =>{
    return ({
      type:'ADD_USER',
      payload : data
    }
    )  
  } 

  export const deleteUser = (id) =>{
    return ({
      type:'DELETE_USER',
      payload : id
    }
    )  
  } 

  export const getUser = (id) =>{  
   // const url =`https://jsonplaceholder.typicode.com/users/${id}`;
    //return function(dispatch) {
      //axios.get(url).then(response => response.data)
      //.then((data) => {
        //dispatch({ type: "GET_USER", payload: id });
       //})
    //};

    return ({
      type:'GET_USER',
      payload : id
    }) 
  } 


  export const updateUser = (data) =>{
    console.log(data);
    return ({
      type:'UPDATE_USER',
      payload : data
    }) ;
  }
  


