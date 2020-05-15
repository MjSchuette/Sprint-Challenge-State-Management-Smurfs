import { GET_DATA, LOADING_SUCCESS } from '../actions/actions';

const initialState = {
    smurfs: [],
    isLoading: false
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DATA:
            return {
                ...state,
                isLoading: true
            }
        case LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            }
        default: return state;
    }
}