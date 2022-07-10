import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
const AgreementType = () => {
    const history = useHistory()
    var params = new URLSearchParams(history.location.search);
    const [atState, setAtState] = useState(params.get('at'))
    return (
<div>
<button className="btn btn-success dropdown-toggle atBtn" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">{atState}</button>
                <div className="dropdown-menu">
                    <h5 className="dropdown-item atItem"
                    onClick={(e)=>{
                        setAtState("Rent")
                        var city = params.get('city')
                        var loc = params.get('loc')
                        const searchUrl = `/search?at=Rent&city=${city}&loc=${loc}`
                        console.log(searchUrl)
                        history.push(searchUrl);
                    }}
                    >Rent</h5>

                    <h5 className="dropdown-item atItem"
                    onClick={(e)=>{
                        setAtState("Buy")
                        var city = params.get('city')
                        var loc = params.get('loc')
                        const searchUrl = `/search?at=Buy&city=${city}&loc=${loc}`
                        console.log(searchUrl)
                        history.push(searchUrl);
                    }}
                    >Buy</h5>
                </div>    
</div>
    )
}
export default AgreementType;