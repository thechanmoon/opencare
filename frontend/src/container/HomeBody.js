import React, { Component, createRef} from 'react';
import FilterContainer from './FilterContainer'
import BusinessCardContainer from './BusinessCardContainer.js'

import GoogleMap from '../component/GoogleMap.js'
import { Sticky, Ref} from 'semantic-ui-react'

class HomeBody extends Component {
contextRef = createRef()
render(){


return(
    <div className = "homebody-container">
    
    <FilterContainer/>
    <BusinessCardContainer/>

    {/* <Ref innerRef={this.contextRef}>
    <Sticky context={this.contextRef}> */}
    <GoogleMap/>
    {/* </Sticky>
    </Ref> */}
    </div>
    
)
}
}
export default HomeBody