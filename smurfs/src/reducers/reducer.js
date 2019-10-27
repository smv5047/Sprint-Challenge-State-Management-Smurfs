import {
    GET_SMURF_START,
    GET_SMURF_SUCCESS,
    GET_SMURF_FAILURE
} from "../actions/actions"


const initialState = {
    smurf: null,
    isLoading: false,
    error: null
}

export function reducer (state =initialState, action) {
    switch(action.type){
        case GET_SMURF_START:
            return{
                ...state,
                isLoading: true
            }
        case GET_SMURF_SUCCESS:
            return{
                ...state,
                isLoading: false,
                smurf: action.payload
            }
        case GET_SMURF_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;    
    }
}