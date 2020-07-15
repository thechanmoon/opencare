import React from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { addOrDeleteTrait } from '../actions/filter'
import { loadLat, loadLong} from '../actions/map'

import Geocode from "react-geocode";


const FilterToggles = (props) => {

    const state = useSelector(state => {
        return {checkedTraits: state.checkedTraits }
    })

    const {currentRenderedBusinesses} = useSelector(state => {
        return {currentRenderedBusinesses: state.currentRenderedBusinesses }
    })
    
    const dispatch = useDispatch()


    // state = {
    //     isChecked: false,
    //     checkedTraits: []
    // }


      const  handleCheck = (e) => {
        // console.log(e.target.checked)

        // console.log(e.target.name)
        
        console.log(state.checkedTraits.includes(e.target.name))
        if(!state.checkedTraits.includes(e.target.name) && e.target.checked === true ){
            dispatch(addOrDeleteTrait([...state.checkedTraits, e.target.name]))
        
            console.log("Happy")
            console.log("Happy")
            console.log("Happy")
            //  dispatchCurrentMapLocation(currentRenderedBusinesses[0].fulladdress)
        console.log("hello")
        } else if (state.checkedTraits.includes(e.target.name)){
            let newSet = state.checkedTraits.filter(name => {return name !== e.target.name })
            dispatch(addOrDeleteTrait(newSet))
            // dispatchCurrentMapLocation(currentRenderedBusinesses[0].fulladdress)
          
        }
        // this.setState({isChecked: !this.state.isChecked})
        // console.log(this.state.checkedTraits)
    }


   

    
   

return(
    <div className= "">

        {/* <input type="checkbox" id="scales" onChange= {(e)=> this.handleCheck(e)} name={this.props.trait.name} checked={this.state.isChecked} /> {this.props.trait.name} */}
        {/* <input type="checkbox" id="scales" onChange= {(e)=> handleCheck(e)} name={props.trait.name}  />  */}


<label class="container">
  <input type="checkbox" id="scales" onChange= {(e)=> handleCheck(e)} name={props.trait.name} />
  <span class="checkmark"></span> {props.trait.name}
</label>




    </div>
)
}
export default FilterToggles
