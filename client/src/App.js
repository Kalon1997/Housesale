import './App.css';
import { Switch, Route, Router } from 'react-router-dom';
// import AllHouseCards from './components/houseCards/AllHouseCards';
// import Searchbar from './components/searchbar/Searchbar';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserAction } from './actions/User';
import { useEffect } from 'react';
import Home from './pages/Home';
import Search from './pages/Search'
import History from './components/History.js'
import Login from './components/auth/Login';
import HouseDetails from './components/filters/HouseDetails';
import Register from './components/auth/Register'
import HouseForm from './components/houseCards/HouseForm';
import Navbar from './components/navbar/Navbar';
import Notify from './pages/Not';
import SingleHouseDetail from './components/filters/SingleHouseDetail'
import Notfound from './pages/Notfound';

function App() {

  const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(loadUserAction());
    },[dispatch])
    const {isAuth} = useSelector((state) => {
      return state.myweb;
    })
  return (
    <Router className="App" history={History}>
      <Navbar />
      <Switch>
      <Route path='/' exact><Home /></Route>
      <Route path='/search'><Search /></Route>
      <Route path='/login'><Login /></Route>
      <Route path='/register'><Register /></Route>
      <Route path='/form'>
      {
        isAuth === true ? <HouseForm /> : <Login />
      }   
      </Route>
    
      <Route path='/not'><Notify /></Route>
      <Route path='/getSingleHouse/:id'><SingleHouseDetail /></Route>
      <Route path='/map'><HouseDetails /></Route>
      <Route path='*'><Notfound /></Route>
      </Switch>
    </Router>
  );
}

export default App;
