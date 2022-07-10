import React from 'react'
import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import './Navbar.css';
import { logoutAction } from '../../actions/User';
const Navbar = () => {
  const dispatch = useDispatch()
  const history = useHistory();
  const {isAuth} = useSelector((state) => {
    return state.myweb;
  })
    return (
        <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand a brand" href="/"><h1 className='text-success'><u>House Sale</u></h1></a>

  </div>

{ isAuth===true ?
  <>
      <button class="btn btn-success mx-2" onClick={(e)=>{ e.preventDefault(); history.push('/not')}}>Notifications</button>
      <button class="btn btn-success mx-2" type="submit" onClick={(e)=>{ e.preventDefault(); history.push('/form')}}>Post an ad</button>
      <button class="btn btn-success mx-2" type="submit" onClick={(e) => {e.preventDefault(); dispatch(logoutAction())}}>Logout</button>
  </>

  :

  <>
    <button class="btn btn-success mx-2" type="submit" onClick={(e)=>{ e.preventDefault(); history.push('/login')}}>Login</button>  
    <button class="btn btn-success mx-2" type="submit" onClick={(e)=>{ e.preventDefault(); history.push('/register')}}>Register</button> 
  </>
}


</nav>
    )
}
export default Navbar;