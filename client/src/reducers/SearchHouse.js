import {createReducer} from '@reduxjs/toolkit'
var initialState = {

}

export const SearchHouseReducer = createReducer(initialState, {

    PopulateLocalitiesSuccess : (state, action) => {
        state.localitiesSelectList = action.payload;
    },
    
    PopulateLocalitiesFailure : (state, action) => {
        state.localitiesSelectList = []
        state.err = action.payload;
    },


    FinalSearchSucess : (state, action) => {
        state.finalHouses = action.payload;
    },
    
    FinalSearchFailure : (state, action) => {
        state.finalHouses = []
        state.err = action.payload;
    },
})