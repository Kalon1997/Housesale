import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { Hint } from 'react-autocomplete-hint';
import {sendSearchUrlAction} from '../../actions/House'
import './Searchbar.css'

const Searchbar = () => {
    
const dispatch = useDispatch();
const history = useHistory()    

const locsArray = useSelector((state) => {
    if(!state.homeState.allLocalities)
        return []
    else
        return state.homeState.allLocalities;          
})

const cities = [{
    id: 0,
    label: "Mangaluru"
},
{
    id: 1,
    label: "Hyderabad"
}]

const [at, setAt] = useState("Buy")
const [city, setCity] = useState("Mangaluru")
const [loc, setLoc] = useState("");
const [newLocList, setnewLocList] = useState([]);

const sendSearchQuery  = (e) => {
    e.preventDefault();
    const searchUrl = `search?at=${at}&city=${city}&loc=${loc}+`
    history.push(searchUrl);
    dispatch(sendSearchUrlAction(searchUrl))
}

const getLocalities = (e) => {
    e.preventDefault();
    const searchUrlL = `search?at=${at}&city=${city}`                   
    dispatch(sendSearchUrlAction(searchUrlL))
    var hintarray = []
                                for(var k = 0; k<locsArray.length; ++k)
                                {
                                    hintarray.push(locsArray[k].locality)
                                }
                                console.log(hintarray)
                                setnewLocList(hintarray)
    console.log(locsArray)
}

    return (
    <div>    
        <div className="input-group mb-3 px-5 py-5">
            <div className="input-group-prepend">
                <button className="btn btn-success dropdown-toggle py-4 atBtn" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">{at}</button>
                <div className="dropdown-menu">
                    <h5 className="dropdown-item atItem" onClick={(e) => {
                        setAt("Rent")
                        dispatch(sendSearchUrlAction(`search?at=Rent&city=${city}`))
                    }} >Rent</h5>
                    <h5 className="dropdown-item atItem" onClick={(e) => {
                        setAt("Buy")
                        dispatch(sendSearchUrlAction(`search?at=Buy&city=${city}`))
                    }} >Buy</h5>
                    <h5 className="dropdown-item atItem" onClick={(e) => setAt("Lessee")} >Lessee</h5>
                </div>
            </div>

            <div className="mx-1 input-group-prepend cur ">
                <button className="btn btn-success dropdown-toggle py-4 atBtn" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">{city}</button>
                <div className="dropdown-menu">
                {
                    cities?.map((i, index) => {
                        return(
                            <h5 key={index} className="dropdown-item atItem"  
                            onClick={(e) => {
                                setCity(i.label)
                                const searchUrlL = `search?at=${at}&city=${i.label}`
                                
                                dispatch(sendSearchUrlAction(searchUrlL))
                            
                            }
                            }
                                 >{i.label}</h5>  
                        )
                    })
                }
               


                </div>
            </div>
            
            
        <Hint options={newLocList} allowTabFill>
            <input className='input-with-hint form-control searchbar cur'
            placeholder='Select from locations..'
            value={loc}
            onChange={e => setLoc(e.target.value)} 
            onClick={(e)=>{getLocalities(e)}}
        />
      </Hint>
        
        <button className="btn btn-success py-4 px-5" type="button" onClick={(e) => {sendSearchQuery(e)}}>Search</button>
        
        </div>

    </div>    
    )
}
export default Searchbar;


