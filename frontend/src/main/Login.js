import React from 'react';
import { useHistory } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux'
import {resetTraits} from "../actions/User.js"

const Login = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const {currentUser} = useSelector(state => {
        return {currentUser: state.currentUser }
    })

    console.log(currentUser)

const handleSubmit = (e) => {

    
    e.preventDefault()
    console.log(e.target.email.value)
    let data = { 
        email: e.target.email.value,
        password: e.target.password.value
     }

     fetch('http://localhost:3000/login', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })

        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        if (data.error !== "Invalid username or password"){
        dispatch({type: "ADD_CURRENT_USER", payload: data})
        dispatch(resetTraits())
        history.push('/')
        } else {
            window.alert("Wrong Password")
        }

        })
        .catch((error) => {
        console.error('Error:', error);
        });
}

const handleCreateAccount = ()=> {
    history.push('/signup')
}


return(

    <div className = "loginContainer">
        <div className= "loginForm">
        <img className="logo"  src={require("../images/opencare.png")}  alt=" pin"  />
        <br/>
        <h2 className= "headerLabel"> Login</h2>
        <form onSubmit= {(e)=> handleSubmit(e)} >
        <label> Email </label>
        <br/>
         <input className = "formInput" type= "text" name = "email" /> 
        <br/>
        <br/>
        <label> Password </label>
        <br/>
        <input className = "formInput" type= "password" name = "password"/> 
        <br/>
        <br/>
        <button className="buttonMain" type= "submit" value="Submit" >Submit</button>
        </form>
        <br/>
        <button className="buttonMain2" onClick={handleCreateAccount}> Create Account</button>
        </div>
        <div>



        </div>
  <img className="imageRight"  src={require("../images/wood-people.jpg")}  alt=" pin"  />

    </div>
)
}
export default Login