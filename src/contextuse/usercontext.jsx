import React, {  createContext, useContext, useState } from 'react'

const userContext = createContext();
const UserProvider = ({children}) =>{
    const [user,setUser] = useState({
        firstname:'',
        lastname:'',
        email:'',
        department:'',
        userId:'',
        description:''
    })
  return (
    <userContext.Provider value={{user,setUser}}>
        {children}
    </userContext.Provider>
  )
}

export const useUser = () => useContext(userContext)
export default UserProvider;