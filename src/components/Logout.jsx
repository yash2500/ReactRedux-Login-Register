import React from 'react'
import { useDispatch } from 'react-redux';

const Logout = () => {
    const dispatch = useDispatch();
  return (
    <div className='card p-3 w-25 mx-auto'>
        <input type="button" value="Logout" className='btn btn-primary' onClick={() => {
            dispatch({
              type: "LOGOUT",
            });
          }} />
    </div>
  )
}

export default Logout