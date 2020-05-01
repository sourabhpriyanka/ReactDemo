import {FETCH_USER_DATA,ADD_USER,DELETE_USER,GET_USER,UPDATE_USER} from '../actions/users.js';

const intialState = {
  users: [],
  user:[],
  isInsert:false,
  isedit:false
};




 const users = (state=intialState,action)=>{
  
  switch(action.type) {
    case FETCH_USER_DATA:
      return {
        ...state,
        users: action.payload
      };
    case ADD_USER:
      return {
        ...state,
        users: state.users.concat([action.payload]),
        isInsert: true
      };
    case GET_USER:
        return {...state,
          user:state.users.filter((user)=>user.id == action.payload),
          isedit: !users.isedit
          
        };   
    case UPDATE_USER:
      return { 
        ...state, 
        users: state.users.map(
            (user) => user.id == action.payload.id ? {...user, name:action.payload.name, username:action.payload.username,email:action.payload.email,isedit:!users.isedit}
                                    : user
        )
     }
  
    /* return  state.users.map((user)=>{
         
        if(user.id === action.payload.id) {
         
          return {
             ...user,
             name:action.payload.name,
             username:action.payload.username,
             email:action.payload.email,
          }
          
         
        } else return user;
      })*/
     
    case DELETE_USER:
          return {...state,
            users:state.users.filter((user)=>user.id !== action.payload)
          };      
    default:
       
    return state;
    }
}
export default users;

