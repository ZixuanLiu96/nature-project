import { Navigate } from "react-router-dom"
import { useUser } from "../context/user.context"

function ProtectedRoutes({children}) {
    const { user } = useUser(); 

    if(!user) {
        return <Navigate to="/" />
    }
  return children
}

export default ProtectedRoutes