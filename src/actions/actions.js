 /*export const anothername =(name)=>{
  return{
	    type:'CHANGE_NAME',
		payload:name,
	  }
} */

export const anothername =(name)=>{
    return{
          type:'CHANGE_NAME',
          payload:name,
        }
  } 



export const userActions = {
    login 
};

function login(username, password) {
    
}

/*
function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

*/

