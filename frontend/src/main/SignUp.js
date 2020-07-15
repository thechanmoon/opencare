import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'

const SignUp = () => {

    const dispatch = useDispatch()
    const history = useHistory()


    const handleSubmit = (e) => {
        e.preventDefault()

        if(e.target.email.value === ""){
            window.alert("Account must have a email")
        }else if (e.target.password.value === "" || e.target.confirmPassword.value === "" ){
            window.alert("Please Confirm Password")
        }else if  (e.target.password.value !== e.target.confirmPassword.value ){
            window.alert("Passwords must be the same")
        } else {

    let data = { 
        email: e.target.email.value,
        password: e.target.password.value
    }

    fetch('http://localhost:3000/createAccount', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })

        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        if (data.error !== "A user already has an account with this email"){
        dispatch({type: "ADD_CURRENT_USER", payload: data})
        history.push('/')
        } else {
            window.alert("A user already has an account with this email")
        }

        })
        .catch((error) => {
        console.error('Error:', error);
        });
        }
    }

return(
    <div>
    SignUp component
    
    <form onSubmit= {(e)=> handleSubmit(e)} >
        <label> Email: </label> 
        <br/>
        <input type= "text" name = "email" /> 
        <br/>
        <br/>
        <label> Password: </label>
        <br/>
        <input type= "text" name = "password"/> 
        <br/>
        <br/>
        <label> Confirm Password: </label>
        <br/>
        <input type= "text" name = "confirmPassword"/> 
        <br/>
        <br/>
        <input type= "submit" value="Submit" />
        </form>
    </div>
)
}
export default SignUp