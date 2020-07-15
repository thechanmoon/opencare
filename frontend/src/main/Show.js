import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReviewCard from '../component/ReviewCard.js'
import Header from '../component/Header.js'
import { NavLink } from 'react-router-dom';
import { loadBusinesses } from "../actions/Business.js";
import { loadCurrentUser } from "../actions/User.js";
import { newBusiness } from "../actions/reviews.js";

import swal from 'sweetalert';
import { Rating } from 'semantic-ui-react'





class Show extends Component {


    getBusinessFromWindow = () => {
        console.log(window.location.pathname)

       let currentPath = window.location.pathname 
       let pathArray = currentPath.split("/")
       let businessId = pathArray[pathArray.length-1]
 
       fetch(`http://localhost:3000/business/${businessId}`)
        .then(response => response.json())
        .then(data => {console.log(data)
            this.props.newBusiness(data)

        }
        );


    }

    
    renderReviews = () => {
        if(this.props.currentBusiness){
       return this.props.currentBusiness.reviews.map(review => {
           
            return  <ReviewCard review = {review} />
            })
        }
    }

    handleClaim = () => {
        if(this.props.currentBusiness && this.props.currentUser){

            let data = 
            {
                id: this.props.currentBusiness.id,
                userId: this.props.currentUser.id
            }

        
     fetch('http://localhost:3000/claimBusiness', {
        method: 'PATCH', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })

        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        this.props.loadBusinesses(data)

        })
        .catch((error) => {
        console.error('Error:', error);
        });
    } 
        
    }

    handleFollow = () => {
        if(this.props.currentUser){
        let data = 
        {
            id: this.props.currentBusiness.id,
            userId: this.props.currentUser.id
        }

        fetch('http://localhost:3000/followBusiness', {
            method: 'post', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
    
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            this.props.loadCurrentUser(data)
    
            })
            .catch((error) => {
            console.error('Error:', error);
            });
    } else {
        swal({ 
            text: "You Must be Loggedin to follow a business",
            icon: "warning"
    })
    }
}

renderFollowBtn = () => {
    if(this.props.currentUser !== null) {
       let follows =  this.props.currentUser.follows.map(follow => { return follow.business_id })
        if (!follows.includes(this.props.currentBusiness.id)) {
            return  <button className="buttonMain2" onClick={this.handleFollow} > Follow </button> 
        }  else if (follows.includes(this.props.currentBusiness.id)) {
            return  <button className="buttonMain2" onClick={this.handleFollow} > Unfollow </button> 
        }
    } else { 
        return  <button className="buttonMain2" onClick={this.handleFollow} > Follow </button>
   }
}

    
        
renderClaimBusinessButton = () => {
     if( this.props.currentBusiness){
         if(this.props.currentBusiness.user_id == null && this.props.currentUser) 
            return  <button className= "buttonMain2" onClick = {this.handleClaim} > Claim business </button> 
     }
    }
    
    
    componentDidMount(){
        this.getBusinessFromWindow()
        
    }

    rentWebsiteLink = () => {
        if (this.props.currentBusiness){
            if (this.props.currentBusiness.website !== null){
                console.log(`window.location.${this.props.currentBusiness.website}`)
             return   <a href={this.props.currentBusiness.website} target="_blank">Website</a> 
              
            }
        }
    }

    renderReviewRatings = () => {
        if (this.props.currentBusiness){
           return this.props.currentBusiness.avg_review? <div> <Rating maxRating={5} defaultRating={Math.floor(this.props.currentBusiness.avg_review)} icon='star' size='massive' disabled />   <label> { this.props.currentBusiness.avg_review} Stars </label> </div> : <h4>0 reviews </h4>
              
            }
        }
    


    render(){
       
return(
    <div >
    <Header/>
    <br/>
    <div class="show-container">
    {/* {this.renderClaimBusinessButton()} */}
   {/* { this.props.currentBusiness.user_id == "nil" && this.props.currentUser? <button onClick = {this.handleClaim} > Claim business </button> : null} */}
    <br/>
    <br/>
    { this.props.currentBusiness? <img src= { this.props.currentBusiness.img_url } width = "200px" /> : null}
    
   
    { this.props.currentBusiness?  <h2> { this.props.currentBusiness.name } </h2> : null}
    {this.renderReviewRatings()}
    {/* { this.props.currentBusiness? <> <Rating maxRating={5} defaultRating={Math.floor(this.props.currentBusiness.avg_review)} icon='star' size='massive' disabled />   <label> { this.props.currentBusiness.avg_review} Stars </label> </>: null} */}

    {/* { this.props.currentBusiness?  <h3> { this.props.currentBusiness.avg_review} Stars </h3> : null} */}
    { this.props.currentBusiness? <h5> { this.props.currentBusiness.address } </h5> : null}
    {this.rentWebsiteLink()}
    { this.props.currentBusiness? <h4> { this.props.currentBusiness.bio } </h4> : null}
  
    

    
    <br/>
    {this.props.currentBusiness? <NavLink to={`/Review/${this.props.currentBusiness.name}/${this.props.currentBusiness.id}`} exact>   <button className="buttonMain" href= "http://localhost:3001/Show"> Write Review </button> </NavLink> : null }
    {/* <button onClick={this.handleFollow()} > Follow </button> */}
   
    {/* {this.props.currentBusiness.website? <NavLink to={`/Review/${this.props.currentBusiness.name}/${this.props.currentBusiness.id}`} exact>   <button className="buttonMain2" href= "http://localhost:3001/Show"> Write Review </button> </NavLink> : null } */}
    {this.renderFollowBtn()}
    <h4> Reviews </h4>
    {this.props.currentBusiness && this.renderReviews() } 

    
    </div>
    </div>
)
}
}

const mapStateToProps = state =>  {
    return { 
        currentBusiness: state.currentBusiness,
        currentReviews: state.currentReviews,
        currentUser: state.currentUser
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
    loadBusinesses: (businesses) => dispatch(loadBusinesses(businesses)),
    loadCurrentUser: (user) => dispatch(loadCurrentUser(user)),
    newBusiness: (business) => dispatch(newBusiness(business)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Show);