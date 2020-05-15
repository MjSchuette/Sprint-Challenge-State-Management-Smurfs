import axios from 'axios';

export const GET_DATA = 'GET_DATA';
export const LOADING_SUCCESS = 'LOADING-SUCCESS';

//Loads smurfs from server to screen
export const loadSmurf = () => dispatch => {
    dispatch({ type: GET_DATA });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: LOADING_SUCCESS, payload: res.data });
        })
}

//adds new smurf to the thing
export const addSmurf = smurf => dispatch => {
    axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            dispatch({ type: LOADING_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log('addSmurf isnt working');
        })
};