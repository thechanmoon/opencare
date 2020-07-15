import React from "react"
import { useHistory, useLocation } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux'
import Geocode from "react-geocode";

import { FaSearch } from 'react-icons/fa'

import { loadLat, loadLong } from '../actions/map.js'

import  {locationSearch, businessNameSearch } from "../actions/search.js"
import  {loadCurrentUser } from "../actions/User.js"

const GOOGLE_API_KEY = `${process.env.REACT_APP_GOOGLE_MAP_KEY}`

const Header = (props) => {

    const history = useHistory();
    const {currentUser , currentRenderedBusinesses} = useSelector(state => {
        return {currentUser: state.currentUser, 
            currentRenderedBusinesses: state.currentRenderedBusinesses}
    })

    let location = useLocation();
  console.log(location.pathname);

    const dispatch = useDispatch()

    const getLatLng = (address) => {
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
            dispatch(loadLat(lat))
            dispatch(loadLong(lng))
        },
        error => {
            console.error(error);
        })
    }

    
    const  dispatchCurrentMapLocation = (newA)=> {
        
        let address = newA
        getLatLng(address) 
        
      }

  

const handleRoute = (e) => {
    history.push(e.target.name)
}

const handleHeaderSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.location.value)
        if(location.pathname !== "/"){
            history.push("/")
        }
        dispatch(businessNameSearch(e.target.businessSearch.value))
        dispatch(locationSearch(e.target.location.value))
        if(e.target.location.value != ""){
        dispatchCurrentMapLocation(e.target.location.value)
        }
       
        if(e.target.location.value !== "" && e.target.businessSearch.value !== "" ){
            console.log(currentRenderedBusinesses[0].address)
            dispatchCurrentMapLocation(currentRenderedBusinesses[0].address)
            console.log("happy")
            }
    }

    const handleImage = ()=> {
        history.push("/")
    }

    const handleLogout = () => {
        


        const data = { currentUser: currentUser.id };
        console.log(data)
        fetch('http://localhost:3000/logout', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            dispatch(loadCurrentUser(null))
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
        
    }


return(
    <div className= "headerContainer" >

            <img className="logo" onClick = {handleImage} src={require("../images/opencare.png")}  alt=" pin"  />
    <div className="input-div"> 

    <form onSubmit = {(e) => handleHeaderSubmit(e)}>
        <input className="input-box" name="businessSearch"  type="text" placeholder={"Business name"} />
        <input  className="input-box" name="location"  type="text" placeholder={"Location"} />
<button className= "buttonSubmit" type= "submit" > <FaSearch /> </button>
    </form>
    </div>

    <div className= "buttonsDiv">

    { currentUser? "" : <button className = "buttonMain"  onClick={(e) => handleRoute(e)} name= "/Login"> Login </button>}
    { currentUser? "" : <button className = "buttonMain2 buttonMargin" onClick={(e) => handleRoute(e)}  name="/Signup" > Signup  </button>}
    {/* { currentUser?  <button className = "buttonMain" onClick={(e) => handleRoute(e)}  name="/Profile" > Profile  </button>  : ""} */}
    {/* { currentUser?  <button onClick={(e) => handleRoute(e)}  name="/create-business" > Create Business  </button>  : ""} */}
    { currentUser? <button className = "buttonMain buttonMargin" onClick={handleLogout}  name="/business/form/new" > Logout  </button> : ""}
    { currentUser? <button className = "buttonMain2 buttonMargin" onClick={(e) => handleRoute(e)}  name="/business/form/new" > Create Business  </button> : ""}

 {/* <button className = "buttonMain" onClick={handleLogout}  name="/business/form/new" > Logout  </button>  */}
    </div>

    { currentUser?  <div className= "profileImageDiv">  <img name="/Profile" onClick={(e) => handleRoute(e)} className= "profileImage" src= {currentUser.img_url} /> </div>  : ""}
    </div>
)
}
export default Header