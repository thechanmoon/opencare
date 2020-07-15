import React from 'react';
import BusinessCard from '../component/BusinessCard.js'
import { useSelector} from 'react-redux'

const BusinessCardContainer = () => {


    const {currentRenderedBusinesses} = useSelector(state => {
        return {
            currentRenderedBusinesses: state.currentRenderedBusinesses
        }
    })

    const renderCards = () =>{
        if(currentRenderedBusinesses !== []){
        return currentRenderedBusinesses.map(business => {
        return  <BusinessCard key = {business.id} business= {business}/>
        }) 
    } 
    
        }

return(
    <div className = "businesscard-container" >
    All Childcare    
    {renderCards()}
    {/* {allBusinesses.map(business => <BusinessCard key = {business.id} business= {business} />)} */}
    
    </div>
)
}
export default BusinessCardContainer