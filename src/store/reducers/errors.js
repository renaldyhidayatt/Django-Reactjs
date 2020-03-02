import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
  } from "../actions/types";
  
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: false,
    user: null
  };

  export default function(state = initialState, action){
      switch(action.type){
          case LOGIN_SUCCESS:
          case REGISTER_SUCCESS:
              localStorage.setItem("token", action.payload.token);
              return{
                  ...state,
                  ...action.payload,
                  isAuthenticated: true,
                  isLoading: false
              };
          case LOGIN_FAIL:
          case LOGOUT_SUCCESS:
          case REGISTER_FAIL:
              localStorage.removeItem("token");
              return {
                  ...state,
                  token: null,
                  isAuthenticated: false,
                  isLoading: false
              }
            default:
                return state;
              
      }
  }
