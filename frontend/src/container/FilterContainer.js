import React from 'react';
import FilterToggles from '../component/FilterToggles.js'
import { loadAllTraits } from '../actions/filter.js'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { Radio } from 'semantic-ui-react'
import { followFilter } from '../actions/User'


const FilterContainer = () => {


    const dispatch = useDispatch()

    const state = useSelector(state => {
        return {allTraits: state.allTraits }
    })

    const {currentUser}= useSelector(state => {
        return {currentUser: state.currentUser }
    })

    const renderToggles = () => {

        if(state.allTraits !== []){
            return state.allTraits.map(trait => {
            return  <FilterToggles key = {trait.id} trait= {trait}/>
            }) 
        }
    }
// const handleToggle = (e) => {
//     console.log("nowowowow")
// debugger
// }

const handleCheck = ()=> {
    console.log("log")
    dispatch(followFilter())
}



return(
    <div className= "filter-container">
        <div>
        <h3> Category </h3>
        {renderToggles()}
        </div>
        {currentUser? <>
        <h3> Follows </h3>
        <label class="container">
        <input type="checkbox" id="scales" onChange= {(e)=> handleCheck(e)} name={"ahpp"} />
        <span class="checkmark"></span> {}
        </label>  </>: ""}
<br/>

{/* <h3> Following </h3>
        <div class="">
  
        <Radio  toggle onChange={(e) => handleToggle(e)}  />
</div> */}
    </div>
)
}
export default FilterContainer