import NavBarUser from "../components/NavBarUser"
import { UserContext } from "../context/user.context"


function DashboardPage() {

  const isLoggedIn = useContext(UserContext)
  return (
    <div>
      <NavBarUser />
      <h2>DashboardPage</h2>
    </div>
  )
}

export default DashboardPage