import React,{useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import FinalEachHouse from './FinalEachHouse'
import {finalHouseSearchAcion} from '../../actions/SearchHouse'

const SearchButton = () => {
   
    const dispatch = useDispatch()
    const history = useHistory()
    var params = new URLSearchParams(history.location.search);

const hs = useSelector((state) => (state.searchHomeState.finalHouses));
//    const [homeFinalList, setHomeFinalList] = useState();
useEffect(() => {
    dispatch(finalHouseSearchAcion(`/search?${params}`))
},[])

    return (
<div>
<div class="card-columns">
            {
  hs && hs?.map((i, index) => {
    return (

      <FinalEachHouse
      key={index}
      ag={i.agreementType}
      city={i.city}
      locality={i.locality}
      imgs={i.imgs}
      _id={i._id}
      interestedPeopleList={i.interestedPeopleList}
      />

    )
   
  })
}
           
            </div>
               
</div>
    )
}
export default SearchButton;