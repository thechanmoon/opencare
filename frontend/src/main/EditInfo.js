
import React from "react"

import { useHistory } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux'

 import { loadBusinesses } from "../actions/Business.js"

const EditInfo = () => {

const history = useHistory()
const dispatch = useDispatch()

const handleEditAccount = (e) => {

    e.preventDefault()
    console.log(e.target.email.value)
    let data = { 
        first_name: e.target.first_name.value,
        last_name: e.target.last_name.value,
        img_url: e.target.img_url.value,
        } 

    fetch('http://localhost:3000/editProfile', {
        method: 'PATCH', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })

        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
            
       
        dispatch(loadBusinesses(data))
        history.push('/Profile')
        })
        .catch((error) => {
        console.error('Error:', error);
        }); 

}

const handleBack = () => {
history.push("/Profile")

}




return(

    <div className="">
            
    
    <h1>New Business </h1>
    <form onSubmit= {(e)=> handleEditAccount(e)} >
    <label> First Name: </label>
    <br/>
    <input type= "text" name = "first_name" /> 
    <br/>
    <br/>
    <label> Last Name: </label>
    <br/>
    <input type= "text" name = "last_name" /> 
    <br/>
    <br/>
    <label> Profile Image: </label>
    <br/>
    <input type= "text" name = "img_url" /> 
    </form>
    {/* <button onClick={handleCreateAccount}> Create Account</button> */}
    <button onClick={handleBack}> Back </button>

      
    </div>

)

}
export default EditInfo