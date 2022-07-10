import React, {useState} from 'react'
import {interestedAction, singleHouseAction} from '../../actions/House'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

const FinalEachHouse = (props) => {
  const params = useParams();
  
  const curUserid = useSelector(state => {
    if(state.myweb.user) {
        return state.myweb.user._id
    }
    return "null";
 })

 const authStatus = useSelector(state => {
      return state.myweb.isAuth
})

    const [interest, setInterest] = useState(props.interestedPeopleList.includes(curUserid.toString()))
    
    const history = useHistory()
    const dispatch = useDispatch();
    const interestedHandler = (e) => {
     e.preventDefault();
     if(authStatus=== true)
     {
      setInterest((bval) => bval = !bval)
      dispatch(interestedAction(props._id))
     }
     else
     {
       alert("Login first!")
     }
     
   }
    return (
<div>

<div class="card bg-light mb-3" style={{width: "18rem"}}>
<div class="card-header">
  {
    interest===true ? <button onClick={interestedHandler}>Unfollow</button> :   <button onClick={interestedHandler}>I'm interested</button>
  }
  

</div>

<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
<div class="carousel-inner">
<div class="carousel-item active" data-interval="1">
    <img src={props.imgs[0][0].base64} alt={props.imgs[0].name} width="250px" height="150px"></img>
  </div>
    {
      props.imgs[0].map((m, index) => {
        return (<div key={index} class="carousel-item" >
          <img src={m.base64} alt={m.name} width="250px" height="150px"></img>
        </div>)
      })
    }

  </div>
  <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>


  <div class="card-body">
    <h5 class="card-title">
        {props.ag }
        5000/month
    </h5>
    <h6 class="card-subtitle mb-2 text-muted">1 BHK - Flat</h6>
    <p class="card-text">located in - {props.city} - {props.locality} </p>

    <button onClick={(e) => {
      e.preventDefault();
      var url = `/getSingleHouse/${props._id}`
      history.push(url)
      dispatch(singleHouseAction(props._id))
    }}>View More</button>
  </div>
</div>              
</div>
    )
}
export default FinalEachHouse;


