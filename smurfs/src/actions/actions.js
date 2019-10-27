import axios from "axios"

export const GET_SMURF_START = "GET_SMURF_START"
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS"
export const GET_SMURF_FAILURE = "GET_SMURF_FAILURE"
export const POST_SMURF_START = "POST_SMURF_START"
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS"
export const POST_SMURF_FAILURE = "POST_SMURF_FAILURE"


export function getSmurf() {
    return (dispatch) => {
        dispatch({type: GET_SMURF_SUCCESS})

        axios.get("http://localhost:3333/smurfs")
            .then(res=>{
                console.log(res)
                dispatch({type: GET_SMURF_SUCCESS, payload: res.data})
            })
            .catch(err =>{
                dispatch({type: GET_SMURF_FAILURE, payload: err})
            })

    }
}