import axios from 'axios';

export const populateLocalitiesSearchPageAction = (searchUrl) => async (dispatch) => {
    try {
        axios.defaults.withCredentials = true
        const {data} = await axios.get(`/searchPage/getLocalities${searchUrl}`,
        {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        dispatch({
            type: "PopulateLocalitiesSuccess",
            payload: data.uniqueLocList
        })

    } catch (error) {
        dispatch({
            type: "PopulateLocalitiesFailure",
            payload: "Error occured"
        })
    }
}


export const finalHouseSearchAcion = (searchUrl) => async (dispatch) => {
    try {
        axios.defaults.withCredentials = true
        const {data} = await axios.get(`/searchPage${searchUrl}`,
        {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        dispatch({
            type: "FinalSearchSucess",
            payload: data.searchPageHouses
        })

    } catch (error) {
        dispatch({
            type: "FinalSearchFailure",
            payload: "Error occured"
        })
    }
}