import axios from "axios"
import { returnErrors } from "./messages";
import{
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT_SUCCESS,
} from "./types";

export const register = ({ email, password1, password2 }) => dispatch => {
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
  
    // Request Body
    const body = JSON.stringify({ email, password1, password2 });
  
    axios
      .post("http://localhost:8000/api/register/", body, config)
      .then(res => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: REGISTER_FAIL
        });
      });
  };

export const login = (email, password) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request Body
  const body = JSON.stringify({ email, password });

  axios
    .post("http://localhost:8000/api/login/", body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

export const logout = () => (dispatch, getState) => {
    axios
    .post("http://localhost:8000/api/logout", null, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
        })
}

export const tokenConfig = getState => {
    const token = getState().auth.token;

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    if(token){
        config.headers["Authorization"] = `Token ${token}`;
    }
    return config;
}
