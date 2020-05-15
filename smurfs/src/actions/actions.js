import axios from 'axios';

export const GET_DATA = 'GET_DATA';
export const LOADING_SUCCESS = 'LOADING-SUCCESS';

export const loadSmurf = () => dispatch => {
    dispatch({ type: GET_DATA });
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        dispatch({ type: LOADING_SUCCESS, payload: res.data });
    })
}

