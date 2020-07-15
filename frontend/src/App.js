import React, { Component } from 'react';
import './App.css';
import { renderBusinessCards, businessNameSearch, locationSearch } from "./actions/search.js";



import { connect } from 'react-redux'

import  Home from "./main/Home.js"
import  Login from "./main/Login.js"
import  Show from "./main/Show.js"
import  SignUp from "./main/SignUp.js"
import  Review from "./main/Review.js"

import  Profile from "./main/Profile.js"
import  ResetPassword from "./main/ResetPassword.js"
import  EditInfo from "./main/EditInfo.js"
import  CreateBusiness from "./main/CreateBusiness.js"
import Geocode from "react-geocode";

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import { loadAllTraits } from './actions/filter.js'
import { loadLat, loadLong} from "./actions/map.js"

const GOOGLE_API_KEY = `${process.env.REACT_APP_GOOGLE_MAP_KEY}`
class App extends Component {

  
  componentDidMount(){

fetch('http://localhost:3000/businesses')
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
  this.props.loadBusinesses(data)
})
.catch((error) => {
  console.error('Error:', error);
})

  fetch('http://localhost:3000/traits')
  .then(response => response.json())
  .then(data => {
  console.log('Success:', data);
  this.props.loadAllTraits(data)
  })
  .catch((error) => {
  console.error('Error:', error);
  });
  }


  renderBusinessesFilter = ()=> {
    let array = this.props.allBusinesses
    console.log(this.props.currentBusinessSearch)
    console.log(this.props.toggleFilter)
      
    if(this.props.toggleFilter === true){
      let followsArray = this.props.currentUser.follows.map(follow => follow.business_id)
      array = array.filter(bussiness => followsArray.includes(bussiness.id))
    }
      if(this.props.currentBusinessSearch !== ""){
      array =  array.filter(el => { 
        return el.name.toLowerCase().includes(this.props.currentBusinessSearch.toLowerCase()) 
      })
    }

    if(this.props.currentLocationSearch !== ""){
      array =  array.filter(el => { 
        return el.fulladdress.toLowerCase().includes(this.props.currentLocationSearch.toLowerCase()) 
      })
    }

   

  if(this.props.checkedTraits.length > 0)
  {
    array = array.filter((business)=> {
      console.log(business)
      console.log(business.traits.length)
 
      let retVal = false;
      if(business.traits.length>0 && this.props.checkedTraits.length > 0)
      {
        business.traits.forEach(trait => {
          this.props.checkedTraits.forEach(checkedTrait =>
            {
              if(trait.name === checkedTrait)
              {
                retVal = true;
                
              }
            }
          )
        });
      }
    

        return retVal;
      })
    }
    if(array.length > 0){
      console.log("happy")
    this.dispatchCurrentMapLocation(array[0].fulladdress)
    }
    this.props.renderBusinessCards(array)
  }


  getLatLng = (address) => {
    // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
    Geocode.setApiKey(GOOGLE_API_KEY);
    // set response language. Defaults to english.
    Geocode.setLanguage("en");
    // set response region. Its optional.
    // A Geocoding request with region=es (Spain) will return the Spanish city.
    Geocode.setRegion("es");
    // Enable or disable logs. Its optional.
    Geocode.enableDebug();

    Geocode.fromAddress(address).then(
    response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log("kljhslfkjh")
        console.log(lat, lng)
        this.props.loadLat(lat)
        this.props.loadLong(lng)
        
    },
    error => {
        console.error(error);
    })
}

 dispatchCurrentMapLocation = (newA)=> {
        
  let address = newA
  this.getLatLng(address) 
  
}

render(){

  this.renderBusinessesFilter()
 
  return (

    // { this.props.currentBusinessSearch !== ""?  this.renderBusinessesFilter() : null}
    <Router >
      <div>
      <Route exact path="/" render={() => <Home  /> } />
      <Route exact path="/Login" render={() => <Login /> } />
      <Route relative path="/Show" render={() => <Show /> } />
      <Route exact path="/SignUp" render={() => <SignUp /> } />
      <Route relative path="/Review" render={() => <Review /> } />
      <Route exact path="/profile" render={() => <Profile /> } />
      <Route exact path="/Reset-Password" render={() => <ResetPassword /> } />
      <Route exact path="/Edit-Info" render={() => <EditInfo /> } />
      <Route relative path="/business/form" render={() => <CreateBusiness /> } />
      </div>
    </Router>
  );
}
}

const mapStateToProps = state =>  {
    return {
      allBusinesses: state.allBusinesses,
      currentBusinessSearch: state.currentBusinessSearch,
      currentLocationSearch: state.currentLocationSearch,
      checkedTraits: state.checkedTraits,
      toggleFilter: state.toggleFilter,
      currentUser: state.currentUser
      }
}

const mapDispatchToProps = dispatch => {
  return {
    loadBusinesses: (businesses) => dispatch({ type: "Load_Businesses", payload: businesses }),
    renderBusinessCards: (businesses) => dispatch(renderBusinessCards(businesses)),
    
    businessNameSearch: (name) => dispatch(businessNameSearch(name)),
    locationSearch: (location) => dispatch(locationSearch(location)),
    loadAllTraits: (traits) => dispatch(loadAllTraits(traits)),
    loadLat: (lat) => dispatch(loadLat(lat)),
    loadLong: (long) => dispatch(loadLong(long))
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
