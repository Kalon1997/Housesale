import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {populateLocalitiesSearchPageAction} from '../../actions/SearchHouse'
const City = () => {
    const cities = [{
        id: 0,
        label: "Mangaluru"
    },
    {
        id: 1,
        label: "Hyderabad"
    }]
    const dispatch = useDispatch()
    const history = useHistory()
    var params = new URLSearchParams(history.location.search);
    const [cityState, setCityState] = useState(params.get('city'))
    return (
<div>
<button className="btn btn-success dropdown-toggle atBtn" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">{cityState}</button>
                <div className="dropdown-menu">
                {
                    cities?.map((i,index) => {
                        return(
                            <h5 key={index} className="dropdown-item atItem"
                            onClick={(e) => {
                                setCityState(i.label)
                                params.set('city',i.label)
                                params.toString()
                                const searchUrl = `/search?${params}`
                                dispatch(populateLocalitiesSearchPageAction(searchUrl))
                                history.push(searchUrl);
                            }}
                            >
                                {i.label}
                            </h5>
                        )
                    })
                }  
                </div>    
</div>
    )
}
export default City;