import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loginAction} from '../../actions/User'
import './Login.css'
const Login = () => {
  const dispatch = useDispatch()
    // const [loginMode, setLoginMode] = useState(true)
    const [userData, setUserData] = useState({
      email: "",
      password: ""
    });
    const { email, password } = userData;

    const errorMsg = useSelector((state) => (state.myweb.lerror))

    const userDataChangeHandler = ( e ) => {
        e.preventDefault();
        setUserData({...userData, [e.target.name]: e.target.value})
    }

    const submitHandler = async (e) => {
      e.preventDefault();
      console.log(email, password)
      dispatch(loginAction(userData.email, userData.password));
  }
    return (
        <form className='container mt-5 pt-5 login'>
<h2>Login form</h2>
        <div class="form-outline mb-4 mt-5 pt-5">
          <input name="email" value={email} onChange={userDataChangeHandler} type="email" id="form2Example1" class="form-control"  />
          <label  class="form-label" for="form2Example1">Email address</label>
        </div>
      

        <div class="form-outline mb-4">
          <input name="password" type="password" value={password} onChange={userDataChangeHandler} id="form2Example2" class="form-control" />
          <label  class="form-label" for="form2Example2">Password</label>
        </div>
      

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
        { errorMsg ? <p className="text-danger">{errorMsg}</p> : null }

        <button type="button" class="btn btn-primary btn-block mb-4" onClick={submitHandler}>Login</button>
      

        <div class="text-center">
          <p>Not a member? <a href="/register">Register</a></p>
          <p>or sign up with:</p>
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-facebook-f"></i>
          </button>
      
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-google"></i>
          </button>
      
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-twitter"></i>
          </button>
      
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-github"></i>
          </button>
        </div>

      </form>
    )
}
export default Login;