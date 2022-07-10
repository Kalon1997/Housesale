import axios from 'axios';

export const getAllHousesAction = () => async (dispatch) => {
    try {
        dispatch({
            type: "GetAllHouseRequest"
        })
        axios.defaults.withCredentials = true
        const {data} = await axios.get('/allHouses',
        {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        dispatch({
            type: "GetAllHouseSuccess",
            payload: data.allHouses
        })
    } catch (err) {
        dispatch({
            type: "GetAllHouseFailure",
            payload: "Error occured"
        })
    }
}

export const sendSearchUrlAction = (searchUrl) => async (dispatch) => {
    try {
        axios.defaults.withCredentials = true
        const {data} = await axios.get(`/searchedHouses/${searchUrl}`,
        {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );

        dispatch({
            type: "SearchedResultSuccess",
            payload: [data.searchedHomes, data.localities]
        })
    } catch (error) {
        dispatch({
            type: "SearchedResultFailure",
            payload: "Error occured"
        })
    }
} 

// export const getLocalitiesAction = (searchUrl) => async (dispatch) => {
//     try {
//         axios.defaults.withCredentials = true
//         const {data} = await axios.get(`http://localhost:5000/allLocalities/${searchUrl}`,
//         {
//             headers: {
//               "Content-Type": "application/json",
//             }
//           }
//         );
//         dispatch({
//             type: "getLocalitiesArraySuccess",
//             payload: data.localities
//         })

//     } catch (error) {
//         dispatch({
//             type: "getLocalitiesArrayFailure",
//             payload: "Error occured"
//         })
//     }
// }



export const postHouseAction = (agreementType, city, locality, imgs, pinCode, price) => async (dispatch) => {
    try {
        //request
        dispatch({
            type: "POSTHOUSER"
        })
        //success
        // {withCredentials: true}
        axios.defaults.withCredentials = true
        const { data } = await axios.post(
            "/createHouse",
            { agreementType, city, locality, imgs, pinCode, price },
            {
              headers: {
                "Content-Type": "application/json",
              }
            }
          );
          dispatch({
            type:"POSTHOUSES",
            payload: data.h,
          })
          window.location.assign('/')
    } catch (error) {
      dispatch({
        type: "POSTHOUSEF",
        payload: error.response.data.message
      })
    }
  }



  export const interestedAction = (_id) => async (dispatch) => {
    try {
        //request
        dispatch({
            type: "INTERESTR"
        })
        //success
        // {withCredentials: true}
        axios.defaults.withCredentials = true
        const { data } = await axios.put(
            `/interested/${_id}`,
            {
              headers: {
                "Content-Type": "application/json",
              }
            }
          );
          dispatch({
            type:"INTERESTS",
          })
    } catch (error) {
      dispatch({
        type: "INTERESTF",
        payload: error.response.data.message
      })
    }
  }


  export const singleHouseAction = (_id) => async (dispatch) => {
    try {
        //request
        dispatch({
            type: "SingleHouseR"
        })
        //success
        // {withCredentials: true}
        axios.defaults.withCredentials = true
        const { data } = await axios.get(
            `/getSingleHouse/${_id}`,
            {
              headers: {
                "Content-Type": "application/json",
              }
            }
          );
          dispatch({
            type:"SingleHouseS",
            payload: data.singlehouse,
          })
    } catch (error) {
      console.log("error"+error)
      dispatch({
        type: "SingleHouseF",
        payload: error.response.data.err
      })
    }
  }