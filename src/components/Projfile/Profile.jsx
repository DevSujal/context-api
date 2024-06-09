import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'

const Profile = () => {

    const {user} = useContext(UserContext)

    if(!user){
        return (
            <div className='text-center font-2xl'>Please Login</div>
        )
    }
  return (
    <div className='text-center font-2xl'>
      Welcome {user.userName}
    </div>
  )
}

export default Profile
