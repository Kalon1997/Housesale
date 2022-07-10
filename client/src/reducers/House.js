import {createReducer} from '@reduxjs/toolkit'
var initialState = {

}
export const HouseReducer = createReducer(initialState, {
    GetAllHouseRequest : (state) => {
        state.loading = true;
    },
    GetAllHouseSuccess : (state, action) => {
        state.loading = false;
        state.allHouses = action.payload;
    },
    GetAllHouseFailure : (state, action) => {
        state.loading = false;
        state.err = action.payload;
    },


//------post a new house
    POSTHOUSER : (state) => {
        state.loading = true;
    },
    POSTHOUSES : (state, action) => {
        state.loading = false;
        state.newHouse = action.payload;
    },
    POSTHOUSEF : (state, action) => {
        state.loading = false;
        state.postHouseErr = action.payload;
    },



    INTERESTR : (state) => {
        state.loading = true;
    },
    INTERESTS : (state, action) => {
        state.loading = false;

    },
    INTERESTF : (state, action) => {
        state.loading = false;
        state.interestErr = action.payload;
    },


    SingleHouseR : (state) => {
        state.loading = true;
    },
    SingleHouseS : (state, action) => {
        state.loading = false;
        state.curHouse = action.payload;
    },
    SingleHouseF : (state, action) => {
        state.loading = false;
        state.singleHErr = action.payload;
    },

    //-------     search
    SearchedResultSuccess: (state, action) =>{
        state.allHouses = action.payload[0];
        state.allLocalities = action.payload[1];
    },

    SearchedResultFailure: (state, action) => {
        state.err = action.payload
    },

    //--------- localitiesArray
    // getLocalitiesArraySuccess : (state, action) => {
    //     state.allLocalities = action.payload;
    // },

    // getLocalitiesArrayFailure : (state, action) => {
    //     state.err = action.payload
    // }
})
