import React, {useState, useEffect} from 'react'
import {interestedAction, singleHouseAction} from '../../actions/House'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

const SingleHouseDetail = () => {
  const params = useParams();
  const history = useHistory()
  const dispatch = useDispatch()
  console.log("params.id.toString()"+params.id.toString())

    useEffect(() => {
        dispatch(singleHouseAction(params.id))
    }, [dispatch, params, history])


    const props = useSelector((state) => {
        if(state.homeState.curHouse)
        {
            return state.homeState.curHouse
        }
        else
            return {}
    })

    const curUserid = useSelector(state => {
        if(state.myweb.user) {
            return state.myweb.user._id
        }
        return "null";
     })
    
     const authStatus = useSelector(state => {
          return state.myweb.isAuth
    })
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

   

    

    const [interest, setInterest] = useState(props.interestedPeopleList.includes(curUserid.toString()))
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
      props?.imgs[0]?.map((m, index) => {
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


  </div>
</div>         
     
</div>
    )
}
export default SingleHouseDetail;


