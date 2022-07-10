import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Notify = () => {
    var nots = [];
    nots = useSelector((state) => {
        if(!state.myweb.user)
            return null
        else
            return state.myweb.user.myNotifications;
      })

    return (
        <div className='container'>
        {  
          nots && nots?.map((i, index) => (
            <h1 className='pt-5 mt-5' key={index}>{i}</h1>
            ))
        }
        </div>
    )
}
export default Notify;