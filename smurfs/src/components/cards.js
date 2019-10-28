import React, {useEffect } from "react"
import {connect} from "react-redux"
import { getSmurf } from "../actions/actions"

import Card from "./card"


function Cards (props) {

    useEffect(()=>{
        props.getSmurf()
    }, [])

    return(
        <div>
    
           {props.smurfIsLoading ? (
               <h1>LOADING...</h1>
           ) :(
            props.smurf.map(smurf => (
               <Card smurf={smurf}/>
            ))

            )}
        
        </div>
    );


}


function mapStateToProps(state) {
    console.log(state.smurf)
    return {
        
        smurf: state.smurf.smurf,
        smurfIsLoading: state.smurf.isLoading,
        smurfError:  state.smurf.error
    }
}

const mapDispatchToProps = {
    getSmurf
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cards);