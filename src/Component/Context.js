import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'

// export const ContextAPI = createContext() //external location

export const ContextAPI = createContext()


const InfoProvider = ({children}) => {
    const [user, setUser] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            setUser(res.data)
        })
    },[])
    return (
        <div>
            <ContextAPI.Provider value={{user}} >
                {children}
            </ContextAPI.Provider>
        </div>
    )
}

export default InfoProvider