import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {postHouseAction} from '../../actions/House'
import FileBase from 'react-file-base64';
const HouseForm = () => {
  const dispatch=useDispatch();
  var er = useSelector((state) => {
    if(state.homeState.postHouseErr)
        return state.homeState.postHouseErr
    else
        return null    
  })
  const cities = [{
    id: 0,
    label: "Mangaluru"
},
{
    id: 1,
    label: "Hyderabad"
}]

const [agreementType, setagreementType] = useState("Buy")
const [city, setcity] = useState("Mangaluru")
const [locality, setlocality] = useState()
const [imgs, setimgs] = useState([])
const [pinCode, setpinCode] = useState()
const [price, setprice] = useState()


const postHouseHandler = (e) => {
 
  dispatch(postHouseAction(agreementType, city, locality, imgs, pinCode, price))
}

    return (
<div>
<form className='container mt-5 pt-5 login'>
<h2>Add property details</h2>
        <div class="form-outline mb-4 mt-5 pt-5">
        <button className="btn btn-primary dropdown-toggle atBtn" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">{agreementType}</button>
        
        <div className="dropdown-menu">
                    <h5 className="dropdown-item atItem"
                    onClick={(e)=>{
                      setagreementType("Rent")
                        
                    }}
                    >Rent</h5>

                    <h5 className="dropdown-item atItem"
                    onClick={(e)=>{
                      setagreementType("Buy")
                      
                  }}
                    >Buy</h5>
          </div>    
        
</div>
      
       
      
        <div>
<button className="btn btn-primary dropdown-toggle atBtn" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">{city}</button>
                <div className="dropdown-menu">
                {
                    cities?.map((i,index) => {
                        return(
                            <h5 key={index} className="dropdown-item atItem"
                            onClick={(e) => {
                              setcity(i.label)
                            }}
                            >
                                {i.label}
                            </h5>
                        )
                    })
                }  
                </div>    
</div>
        

        <div className="form-outline mb-4 pt-3">
          <input value={locality} name="locality" placeholder="Locality" 
          onChange={(e)=>{
            setlocality(e.target.value)
            
        }}
          type="text" id="form2Example2" class="form-control" />
        </div>

        
        <FileBase  
          multiple={true} 
          onDone={( base64 ) => {
            setimgs([base64])
          }}
        /> 

        <div class="form-outline mb-4 pt-3">
          <input value={price} onChange={(e)=>{
                      setprice(e.target.value)
                      
                  }} name="price" placeholder="Price" type="number" id="form2Example2" class="form-control" />
        </div>

        <div class="form-outline mb-4 pt-3">
          <input value={pinCode} onChange={(e)=>{
                      setpinCode(e.target.value)
                      
                  }} name="pincode" placeholder="pincode" type="number" id="form2Example2" class="form-control" />
        </div>



{<h3>{er}</h3>}
        <button type="button" class="btn btn-primary btn-block mb-4" onClick={postHouseHandler}>Add Post</button>

      </form>
        </div>
    )
}

export default HouseForm;