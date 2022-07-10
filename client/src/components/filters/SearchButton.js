import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {finalHouseSearchAcion} from '../../actions/SearchHouse'
const SearchButton = () => {
   
    const dispatch = useDispatch()
    const history = useHistory()
    var params = new URLSearchParams(history.location.search);
   const finalSearchHandler =(e)=>{
       e.preventDefault()
       dispatch(finalHouseSearchAcion(`/search?${params}`))
       window.location.reload()
   }
    return (
<div>
<button onClick={finalSearchHandler} className="btn btn-primary atBtn" type="button">Seach</button>
               
</div>
    )
}
export default SearchButton;