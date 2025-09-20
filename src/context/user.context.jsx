import { createContext, useContext, useState } from "react"

const UserContext = createContext()

export function UserProviderWrapper({children}) {

const [user, setUser] = useState(null); 

const login = (userData) => {
    setUser(userData)
}; 

const logout = () => {
    setUser(null); 
}; 

    return <UserContext.Provider value={{ user, login, logout }}>
        {children}
    </UserContext.Provider>
}

export function useUser()
{ return useContext(UserContext) }; 