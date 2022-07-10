import React, { useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import {getAllHousesAction} from '../../actions/House'
import HouseCard from './HouseCard';
const AllHouseCards = () => {

const dispatch = useDispatch();

useEffect(() => {
  dispatch(getAllHousesAction());
}, [])

const h = useSelector((state) => (state.homeState.allHouses));

return(
  
<div>
  <div class="card-columns">

{
  h && h?.map((i, index) => {
    return (

      <HouseCard
      key={index}
      ag={i.agreementType}
      city={i.city}
      locality={i.locality}
      />

    )
   
  })
}

  </div>
</div>
)
}
export default AllHouseCards;
//      <div class="card" >
//      </div>