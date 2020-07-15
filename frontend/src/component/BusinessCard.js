
import React from 'react';

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { Rating } from 'semantic-ui-react'
import {resetTraits} from "../actions/User.js"

const BusinessCard = (props) => {


   
    const history = useHistory();
    const {currentBusiness} = useSelector(state => {
        return {currentBusiness: state.currentBusiness }
    })

const handleCardClick = () => {
console.log("card clicked")
dispatch({type: "ADD_CURRENT_BUSINESS", payload: props.business})
if (currentBusiness !== {}){
    dispatch(resetTraits())
    history.push(`/show/${props.business.name}/${props.business.id}`)
}

}
const dispatch = useDispatch()

return(
    <div  onClick = {handleCardClick} className= "business-card">

    <div className="card-img" >
    {/* <img  src={require("../images/testimg.png")} width = "100px" />  */}
    <img  src= {props.business.img_url} width = "200px" />
    </div>
    <div className="card-content">
    <h3> {props.business.name} </h3>

    <h5> {props.business.address} </h5>
    
    {props.business.avg_review?<div> <Rating maxRating={5} defaultRating={Math.floor(props.business.avg_review)} icon='star' size='massive' disabled />   <label> { props.business.avg_review} Stars </label> </div> : <h4>0 reviews </h4>}

    <label> Description:</label>
    <p> {props.business.bio}  </p>

    </div>
    </div>

)
}
export default BusinessCard