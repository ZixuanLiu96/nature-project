import { Navigate } from "react-router-dom"
import { useUser } from "../context/user.context"

function ProtectedRoutes({children}) {
    const { user } = useUser(); 

    const localUser = localStorage.getItem('user')

    if(!user && !localUser) {
        return <Navigate to="/" />
    }
  return children
}

export default ProtectedRoutes