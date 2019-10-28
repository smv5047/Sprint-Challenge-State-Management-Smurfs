import React, {useState} from "react"
import {useDispatch} from "react-redux"
import { postSmurf } from "../actions/actions"




function Form () {
    const dispatch = useDispatch()
    const [smurf, setSmurf] = useState({
        name: "",
        age: "",
        height:""
    })
  
    const handleChange = e => {
        setSmurf({
            ...smurf,
            [e.target.name]:e.target.value
        })
    }

    const submitSmurf = e => {
        e.preventDefault()
        setSmurf({
            name:"",
            age:"",
            height:""
        })
        dispatch(postSmurf(smurf))
    }

    

    return(
        <div>
    
            <form  onSubmit={submitSmurf}>
                <br/>
                <input type="text" name="name" placeholder="Name" value={smurf.name} onChange={handleChange}/>
                <input type="number" name="age" placeholder="Age" value={smurf.age}  onChange={handleChange}/>
                <input type="text" name="height" placeholder="10cm" value={smurf.height}  onChange={handleChange}/>
                <br/>
                <button type="submit">Add Smurf</button>
            </form>
        
        </div>
    );


}



export default Form