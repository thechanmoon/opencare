import React from 'react';
// import Header from '../component/Header.js'
// import HomeBody from '../container/HomeBody.js'

import { useHistory } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux'


const Profile = (props) => {

    const history = useHistory()

 const handlePress = (e) => {

    history.push(`${e.target.name}`)
 }


return(
    <div>
        {/* <Header /> */}

        <button onClick= {(e)=> handlePress(e)} name = "/"> back </button> 
        <button onClick= {(e)=> handlePress(e)} name = "Reset-Password"> Reset Password </button>

        <button onClick= {(e)=> handlePress(e)} name = "Edit-Info"> Edit Info </button> 

    

   


    </div>
)
}
export default Profile