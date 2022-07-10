import {configureStore} from '@reduxjs/toolkit'
import { HouseReducer } from './reducers/House'
import { userReducer } from './reducers/User'
import { SearchHouseReducer } from './reducers/SearchHouse.js'
const Store = configureStore({
    reducer: {
        homeState : HouseReducer,
        searchHomeState : SearchHouseReducer ,
        myweb: userReducer,
    }
})
export default Store;