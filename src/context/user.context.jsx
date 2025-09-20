import { createContext, useState } from "react"

const UserContext = createContext()

function UserProviderWrapper({children}) {

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

export { UserContext , UserProviderWrapper }