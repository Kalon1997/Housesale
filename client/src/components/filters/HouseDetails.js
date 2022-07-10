import React from 'react'
import CustomMap from './CustomMap'
const HouseDetails = (props) => {

    return (
    <div style={{ width: 300, height: 300 }}>
        <CustomMap {...props} />
    </div>
        
    )
}
export default HouseDetails;