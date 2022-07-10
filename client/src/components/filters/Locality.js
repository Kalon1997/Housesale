import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {populateLocalitiesSearchPageAction} from '../../actions/SearchHouse'
import Select from 'react-select'
const Locality = () => {
    const dispatch = useDispatch();
    const uniqueLocList = useSelector((state) => {
      return state.searchHomeState.localitiesSelectList
    })
    // const [locals, setLocals] = useState()
    // useEffect(() => {
    //   setLocals(uniqueLocList)
    //   console.log("locals",locals)
    //   console.log("uniqueLocList",uniqueLocList)
    // }, [])
    // const localitiesList = [
    //     { value: 'a', label: 'a' },
    //     { value: 'b', label: 'b' },
    //     { value: 'c', label: 'c' },
    //   ];
    const history = useHistory()
    var params = new URLSearchParams(history.location.search);
    var urlLoc = params.get('loc').toString();
    
    
    
    var urlLocList = urlLoc.split(' ');
    var urlLocInitialState = [];
    for(var j=0; j<urlLocList.length; ++j)
    {
      if(urlLocList[j] !== "")
      {
        urlLocInitialState.push({
          value: urlLocList[j],
          label: urlLocList[j]
        })
      }
     
    }
    
    

      var [localityState, setLocalityState] = useState(urlLocInitialState);
   
      
      const locChangeHandler = (e) => {
        setLocalityState(e)
        var refreshedLocQuery = "";
        
        for(var i=0; i<e.length; ++i)
        {
          refreshedLocQuery = refreshedLocQuery.concat(e[i].label).toString()
          refreshedLocQuery = refreshedLocQuery.concat(' ').toString()
        }
          
       

        // var currentLocString = params.get('loc')
        // const newLocString = currentLocString.concat(e[e.length-1].label)
        // const newLocStringFinal = newLocString.concat(' ')
        // params.set('loc',newLocStringFinal);
        console.log("refreshedLocQuery",refreshedLocQuery)
        params.set('loc', refreshedLocQuery)
        params.toString();
        const searchUrl = `/search?${params}`
        console.log(searchUrl)
        history.push(searchUrl);
      }
     //urlLocInitialState.length>1 ? urlLocInitialState : [] 
    return (
        <div onClick={(e)=>{ dispatch(populateLocalitiesSearchPageAction(`/search?${params}`))}}>
        <Select className=''
        defaultValue={localityState}
        onChange={(event)=>locChangeHandler(event)}
        options={uniqueLocList}
        isMulti={true}
      />
      {console.log("localityState",localityState)}
      </div>
        
    )
}
export default Locality;