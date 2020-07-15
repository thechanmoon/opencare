import React from 'react';
import { useHistory } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux'

import { loadBusinesses } from "../actions/Business.js"

const CreateBusiness = (props) => {

    const history = useHistory()

    const dispatch = useDispatch()

    const handleCreateAccount = (e) => {
        console.log("happy")
        console.log("happy")
        console.log("happy")
        console.log("hapdsdfsdfsdfsdfsdfsdfpy")
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
            zip: e.target.zip.value,
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


    return (
        <div className="loginContainer">
            
        <div className= "loginForm">
        <h1>New Business </h1>
        <form onSubmit= {(e)=> handleCreateAccount(e)} >
        <label> Name: </label>
        <br/>
        <input className = "formInput" type= "text" name = "name" /> 
        <br/>
        <br/>
        <label> Bio: </label>
        <br/>
        <input  className = "formInput" type= "text" name = "bio" /> 
        <br/>
        <br/>
        <label> Profile Image: </label>
        <br/>
        <input className = "formInput" type= "text" name = "img_url" /> 
        <br/>
        <br/>
        <label> Email: </label>
        <br/>
        <input  className = "formInput" type= "text" name = "email" /> 
        <br/>
        <br/>
        <label> Website Link: </label>
        <br/>
        <input className = "formInput" type= "text" name = "website"/> 
        <br/>
        <br/>
        <label> Address: </label>
        <br/>
        <input className = "formInput" type= "text" name = "address"/> 
        <br/>
        <br/>
        <label> City: </label>
        <br/>
        <input className = "formInput" type= "text" name = "city"/> 
        <br/>
        <br/>
        <label> State: </label>
        <br/>
        <input  className = "formInput" type= "text" name = "state"/> 
        <br/>
        <br/>
        <label> Zip Code: </label>
        <br/>
        <input className = "formInput" type= "text" name = "zip"/> 
        <br/>
        <br/>
        <button className="buttonMain" type= "submit" value="Submit" >Submit</button>
        </form>
        <br/>
        <br/>
        {/* <button onClick={handleCreateAccount}> Create Account</button> */}
        
        </div>
        <img className="imageRight"  src={require("../images/wood-people.jpg")}  alt=" pin"  />
        </div>
      );
    };

export default CreateBusiness