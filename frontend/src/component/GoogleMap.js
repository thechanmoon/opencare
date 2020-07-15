
import React, { Component, createRef } from 'react';
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";
import { connect } from 'react-redux'
import { loadLat, loadLong} from "../actions/map.js"


const Marker = ({ text }) => {

    // const GOOGLE_API_KEY = `${process.env.REACT_APP_GOOGLE_MAP_KEY}`
return (
<div id= "content" > 

<img className="setpin" src={require("../images/mappin.png")}  alt=" pin"  />
    <h4 className="setpin" >{text}</h4>
</div>)}

const GOOGLE_API_KEY = `${process.env.REACT_APP_GOOGLE_MAP_KEY}`

class GoogleMap extends Component {

  state = {
    lat: 0,
    lng: 0
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
        
        // let obj = { 
        //     lat: lat,
        //     lng: lng
        // } 

        // console.log(obj)
        // return obj
    },
    error => {
        console.error(error);
    })
}

  // static defaultProps = {
  //   center: {
  //     lat: 32.792610,
  //     lng: -79.93
  //   },
  //   zoom: 11
  // };

  dispatchCurrentMapLocation = () => {
    
    let address = "Alabama"
    this.getLatLng(address) 
    
  }

  renderPins = () => {
    console.log('renderPins');
    if(this.props.currentRenderedBusinesses.length > 0){
   return  this.props.currentRenderedBusinesses.map( business => {
        return <Marker  lat={business.latitude} key = {business.id} lng={business.longitude} text="" />
    })
    }
  }

 componentDidMount(){
   console.log("LOOK HERE", this.props.lat, this.props.long)
  //  this.dispatchCurrentMapLocation()
}

  render() {
        console.log(this.props.currentLocationSearch)
        console.log(this.props)
    return (
      
      // Important! Always set the container height explicitly
      
      <div  className = "mapPageLocation" style={{ height: '86vh', width: '30%'  }}>
       
         <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
          // defaultCenter= {{
          //   lat: 32.792610,
          //   lng: -79.93
          // }}
          defaultZoom={5}
          center= {{
            lat: this.props.lat,
            lng: this.props.long
          }}
          zoom={11}
        >
            {this.renderPins()}

        </GoogleMapReact>  
        
      </div>
   
    );
    }
  }




const mapStateToProps = state =>  {
    return { 
        currentRenderedBusinesses: state.currentRenderedBusinesses,
        lat: state.lat,
        long: state.long,
        currentLocationSearch: state.currentLocationSearch
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
    loadLat: (lat) => dispatch(loadLat(lat)),
    loadLong: (long) => dispatch(loadLong(long))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(GoogleMap);