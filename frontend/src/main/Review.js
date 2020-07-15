import React, { Component} from 'react';
import { connect } from 'react-redux'
import Header from "../component/Header.js"
import swal from 'sweetalert';
import { Redirect } from 'react-router-dom';
import {newBusiness} from "../actions/reviews.js"

import { Rating } from 'semantic-ui-react'



class ReviewCard extends Component {

    state = {
        formValue: "",
        ratingValue: 5,
        redirectShow: false
     }


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


     handleRating = (e) => {
        
        this.setState({ratingValue: e.target.ariaPosInSet})

    }

    handleChange = (e) => {
        this.setState({formValue: e.target.value})

    }

    handleSubmit= ()=> {
        if(this.state.formValue =="" || this.state.ratingValue =="" ){
            // swal("Must have Rating and Written Review")
            swal({ 
                text: "A review must have rating and written review",
                icon: "warning"
        })
            // swal("Good job!", "Must have Rating and Written Review!", "success");
        } else if (this.props.currentUser === null){
            swal("Sign in to write a review")
        } else {

            let data = {
                formValue: this.state.formValue,
                ratingValue: this.state.ratingValue,
                currentUser: this.props.currentUser.id,
                currentBusiness: this.props.currentBusiness.id
            }

            console.log(data)
            fetch('http://localhost:3000/review/new', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            this.props.newBusiness(data)
            this.setState({redirectShow: true})
            })
            .catch((error) => {
            console.error('Error:', error);
            });
        }   
    }

    render(){
         if (this.state.redirectShow === true) {
                return <Redirect to={`/Show/${this.props.currentBusiness.name}/${this.props.currentBusiness.id}`} />
            } else {
                return(
                    <div >
                        <Header/>
                        Write a Review 
                        
                        <div className="show-container">
                        <div>
                        <Rating onRate={this.handleRating} maxRating={5} defaultRating={1} icon='star' size='huge' />
                        </div>

                        {/* <select onChange={this.handleRating} value = {this.state.ratingValue} >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select> */}



                        <br/>
                        
                      
                        <textarea className="formInput" onChange={(e) =>this.handleChange(e)}  rows="20" cols="60"  /> 
                        <br/>
                        <button className="buttonMain" onClick={this.handleSubmit} > Submit </button> 
                        </div>
                    </div>
                )
            }
        }
}

const mapStateToProps = state =>  {
    return { 
        currentBusiness: state.currentBusiness,
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = dispatch =>  {
    return { 
        newBusiness: (business)=>{dispatch(newBusiness(business))}
    }
}



export default connect(mapStateToProps, mapDispatchToProps )(ReviewCard);