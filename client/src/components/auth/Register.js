import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {registerAction} from '../../actions/User'
import './Login.css'
const Register = () => {

    const dispatch = useDispatch()
    const errMsg = useSelector((state) => (state.myweb.rerror))
    const [userData, setUserData] = useState({
      username:"",
      email: "",
      password: "",
    });

    const userDataChangeHandler = ( e ) => {
      e.preventDefault();
      setUserData({...userData, [e.target.name]: e.target.value})
    }


    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(registerAction(userData.username, userData.email, userData.password))
  }

    return (
        <form className='container mt-5 pt-5 login'>
<h2>Registration form</h2>

<div class="form-outline mb-4 mt-5 pt-5">
          <input name="username" value={userData.username} onChange={userDataChangeHandler} type="text" id="form2Example0" class="form-control"  />
          <label  class="form-label" for="form2Example0">Username</label>
        </div>
        
        <div class="form-outline mb-4">
          <input name="email" value={userData.email} onChange={userDataChangeHandler} type="email" id="form2Example1" class="form-control"  />
          <label  class="form-label" for="form2Example1">Email address</label>
        </div>
      
        <div class="form-outline mb-4">
          <input name="password" value={userData.password} onChange={userDataChangeHandler} type="password" id="form2Example2" class="form-control" />
          <label  class="form-label" for="form2Example2">Password</label>
        </div>
      
        { errMsg ? <p className="text-danger">{errMsg}</p> : null }

        <div class="row mb-4">
          <div class="col d-flex justify-content-center">

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
              <label class="form-check-label" for="form2Example31"> Remember me </label>
            </div>
          </div>
      
          <div class="col">

            <a href="#!">Forgot password?</a>
          </div>
        </div>
      

        <button type="button" class="btn btn-primary btn-block mb-4" onClick={submitHandler}>Register</button>
      

        <div class="text-center">
          <p>Back to login? <a href="/login">Login</a></p>
        
         
        </div>

      </form>
    )
}
export default Register;