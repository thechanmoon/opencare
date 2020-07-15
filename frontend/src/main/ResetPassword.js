
import React from "react"
import swal from 'sweetalert';

import { useHistory } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux'

const ResetPassword = () => {

const dispatch = useDispatch()
const history = useHistory()



const state = useSelector( state => {
    return {currentUser: state.currentUser }  
})

if(state.currentUser === null){
    history.push("/login")
} else {

const handleSubmit = (e) => {
e.preventDefault()
    console.log(state)

    if (e.target.currentpassword.value === e.target.newpassword.value){
        swal({ 
            text: "Passwords must be different",
            icon: "warning"
    })  }else {

    const data = { 
        email: state.currentUser.email,
        currentpassword: e.target.currentpassword.value,
        newpassword: e.target.newpassword.value
}
    fetch('http://localhost:3000/resetpassword', {
    method: 'PATCH', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data); 
    if (data.error !== "Invalid"){
        dispatch({type: "ADD_CURRENT_USER", payload: data})
        swal({ 
            text: "Password Changed",
            icon: "success"
    })
        history.push('/Profile')
        } else {
            swal({ 
                text: "Wrong Password ",
                icon: "warning"
        })
        }
    })
    .catch((error) => {
    console.error('Error:', error);
    });
}
}



const handleBack = () => {
history.push("/Profile")

}



return(

    <div>
        <div>
        <h1> Reset Password</h1>
        <form onSubmit= {(e)=> handleSubmit(e)} >
        <label> Current Passord: </label>
        <br/>
        <input type= "text" name = "currentpassword" /> 
        <br/>
        <br/>
        <label> New Password: </label>
        <br/>
        <input type= "text" name = "newpassword"/> 
        <br/>
        <br/>
        <input type= "submit" value="Submit" />
        </form>
        <br/>
        <br/>
        <button onClick={handleBack}> Back</button>


        </div>


    </div>
)
}
}
export default ResetPassword