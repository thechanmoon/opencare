import React from 'react';

const ReviewCard = (props) => {

return(
    <div className= "reviewCard">
    <h3>  <img className="profileImage" src= {props.review.user.img_url}/>  {props.review.user.first_name} </h3>
     {props.review.review.rating? <h4> {props.review.review.rating} Stars </h4> : <h4> 0 </h4> } 
    <label>{props.review.review.message} </label>
    <br/>
    <br/>
    </div>
)
}
export default ReviewCard