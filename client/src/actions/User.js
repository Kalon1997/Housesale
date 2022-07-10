import axios from "axios";
// import { useHistory } from "react-router-dom";

export const registerAction = (username, email, password) => async (dispatch) => {
    try {
        //request
        dispatch({
            type: "RegisterRequest"
        })
        //success
        // {withCredentials: true}
        axios.defaults.withCredentials = true
        const { data } = await axios.post(
            "/register",
            { username, email, password },
            {
              headers: {
                "Content-Type": "application/json",
              }
            }
          );
          dispatch({
            type:"RegisterSuccess",
            payload: data.user
          })
          window.location.assign('/login')
    } catch (error) {
      dispatch({
        type: "RegisterFailure",
        payload: error.response.data.message
      })
    }
}



export const loginAction = (email, password) => async (dispatch) => {
  try {
      //request
      dispatch({
          type: "LoginRequest"
      })
      //success
      // {withCredentials: true}
      axios.defaults.withCredentials = true
      const { data } = await axios.post(
          "/login",
          { email, password },
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        dispatch({
          type:"LoginSuccess",
          payload: data.user,
          payloadUsername: data.user.username,
        })
        window.location.assign('/')
  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message
    })
  }
}

export const loadUserAction = () => async (dispatch) => {
  try {
      //request
      dispatch({
          type: "LoadUserRequest"
      })
      //success
      // {withCredentials: true}
      axios.defaults.withCredentials = true
      const { data } = await axios.get(
          "/myProfile",
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        dispatch({
          type:"LoadUserSuccess",
          payload: data.user
        })
  } catch (error) {
    dispatch({
      type: "LoadUserFailure",
      payload: error.response.data.message
    })
  }
}

export const logoutAction = () => async (dispatch) => {
  try {
      //request
      dispatch({
          type: "LogoutRequest"
      })
      //success
      // {withCredentials: true}
      axios.defaults.withCredentials = true
      await axios.get(
          "/logout",
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        dispatch({
          type:"LogoutSuccess",
        })
        // window.location.assign('/')
        window.location.reload()
  } catch (error) {
    dispatch({
      type: "LogoutFailure",
      payload: error.response.data.message
    })
  }
}


//open google login dialogue box
// GET http://localhost:3000/google/login

// export const getBox = () => async (dispatch) => {
//   try {

//      axios.defaults.withCredentials = true
//       await axios.get(
//           "http://localhost:5000/api/v1/google/login",
//           {
//             headers: {
//               "Content-Type": "application/json",
//             }
//           }
//         );
//       const gurl = "http://localhost:5000/auth/google"
//       const newWindow = window.open(gurl, "_blank", "width=500,height=600")
//       history.push('http://localhost:5000/auth/google')
//   } catch (error) {
//     console.log(error)
//   }
// }
