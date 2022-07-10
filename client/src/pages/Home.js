import React from 'react'
import AllHouseCards from '../components/houseCards/AllHouseCards';
// import Navbar from '../components/navbar/Navbar';
import Searchbar from '../components/searchbar/Searchbar';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className='homePageTop'>
                <div className='pt-5'></div>
                <div className='pt-5'></div>

     
                <Searchbar className='pt-5 mt-5' />
                <div className='pt-5'></div>
                <div className='pt-5'></div>
            </div>
            <div className='mx-5 mt-5 my-5'>
            <AllHouseCards className='px-5' />
            </div>
        </div>
    )
}
export default Home;
//<HouseCard className='px-5' />