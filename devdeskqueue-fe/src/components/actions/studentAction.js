import axios from "axios"
import axiosWithAuth from '../../utils/AxiosWithAuth'

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL'
export const REGISTER_RESOLVED = 'REGISTER_RESOLVED'

export const register = input => dispatch => {
    dispatch({
        type: REGISTER_START
    });
    axiosWithAuth()
        .post('auth/register', input)
        .then(res => {
            console.log(res)
            dispatch({ type: REGISTER_SUCCESS })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: REGISTER_FAIL })
        })
}

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGIN_RESOLVED = 'LOGIN_RESOLVED';

export const login = input => dispatch => {
    dispatch({ type: LOGIN_START });
    axiosWithAuth()
        .post('auth/login', input)
        .then(res => {
            console.log(res);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: LOGIN_FAIL, payload: err })
        })
}

export const GET_DATA_START = "GET_DATA_START";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAIL = "GET_DATA_FAIL";

export const getData = () => dispatch => {
    dispatch({ type: GET_DATA_START });
    axiosWithAuth()
        .get('/tickets')
        .then(res => {
            dispatch({ type: GET_DATA_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: GET_DATA_FAIL, payload: err });
        });
};

export const ADD_TICKET_START = 'ADD_TICKET_START'
export const ADD_TICKET_SUCCESS = 'ADD_TICKET_SUCCESS';
export const ADD_TICKET_FAIL = 'ADD_TICKET_FAIL';

export const addTicket = newTicket => dispatch => {
    dispatch({ type: ADD_TICKET_START });
    axiosWithAuth()
        .post('/tickets/create', newTicket)
        .then(res => {
            dispatch({
                type: ADD_TICKET_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({ type: ADD_TICKET_FAIL, payload: err.response });
        });
};

export const EDIT_TICKET_START = "EDIT_TICKET_START";
export const EDIT_TICKET_SUCCESS = "EDIT_TICKET_SUCCESS";
export const EDIT_TICKET_FAIL = "EDIT_TICKET_FAIL";
export const editTicket = (id, updatedTicket) => dispatch => {
 dispatch({ type: EDIT_TICKET_START });
 axiosWithAuth()
    .put(
      `/tickets/${id}`,
      updatedTicket
    )
    .then(res => {
      dispatch({
        type: EDIT_TICKET_SUCCESS,
        payload: res.data,
        id
      });
    })
    .catch(err => {
      dispatch({ type: EDIT_TICKET_FAIL, payload: err.response });
    });
};

export const DELETE_TICKET_START = 'DELETE_TICKET_START';
export const DELETE_TICKET_SUCCESS = 'DELETE_TICKET_SUCCESS';
export const DELETE_TICKET_FAIL = 'DELETE_TICKET_FAIL';

export const deleteTicket = id => dispatch => {
 dispatch({ type: DELETE_TICKET_START });
 axiosWithAuth()
    .delete(`/tickets/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_TICKET_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: DELETE_TICKET_FAIL, payload: err.response });
    });
};


