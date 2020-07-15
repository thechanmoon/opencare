
import React from "react"

import { useHistory } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux'

import { loadBusinesses } from "../actions/Business.js"

const EditBizInfo = () => {

const history = useHistory()
const dispatch = useDispatch()

const handleEditAccount = (e) => {

    e.preventDefault()
    console.log(e.target.email.value)
    let data = { 
        name: e.target.name.value,
        bio: e.target.bio.value,
        email: e.target.email.value,
        website: e.target.website.value,
        address: e.target.address.value,
        city: e.target.city.value,
        state: e.target.state.value,
        zip: e.target.state.zip,
        img_url: e.target.img_url.value,
        } 

    fetch('http://localhost:3000/createbusiness', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })

        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
            
        if (data.error){
            window.alert("Must have a name email and address")
        } else {
        dispatch(loadBusinesses(data))
        history.push('/')
        }
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
            
    <   div>
    <h1>New Business </h1>
    <form onSubmit= {(e)=> handleEditAccount(e)} >
    <label> Name: </label>
    <br/>
    <input type= "text" name = "name" /> 
    <br/>
    <br/>
    <label> Bio: </label>
    <br/>
    <input type= "text" name = "bio" /> 
    <br/>
    <br/>
    <label> Profile Image: </label>
    <br/>
    <input type= "text" name = "img_url" /> 
    <br/>
    <br/>
    <label> Email: </label>
    <br/>
    <input type= "text" name = "email" /> 
    <br/>
    <br/>
    <label> Website Link: </label>
    <br/>
    <input type= "text" name = "website"/> 
    <br/>
    <br/>
    <label> Address: </label>
    <br/>
    <input type= "text" name = "address"/> 
    <br/>
    <br/>
    <label> City: </label>
    <br/>
    <input type= "text" name = "city"/> 
    <br/>
    <br/>
    <label> State: </label>
    <br/>
    <input type= "text" name = "state"/> 
    <br/>
    <br/>
    <label> Zip Code: </label>
    <br/>
    <input type= "text" name = "zip"/> 
    <br/>
    <br/>
    <input type= "submit" value="Submit" />
    </form>
    <br/>
    <br/>
    {/* <button onClick={handleCreateAccount}> Create Account</button> */}
    <button onClick={handleBack}> Back</button>

        </div>
    </div>
       

     
)
}
export default EditBizInfo