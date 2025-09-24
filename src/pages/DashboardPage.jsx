import { Outlet, useNavigate } from "react-router-dom";
import NavBarUser from "../components/NavBarUser";
import { useUser } from "../context/user.context";
import { useEffect } from "react";

function DashboardPage({ children }) {
  const { user } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  return (
    <div>
      <NavBarUser />
      {children || <Outlet />}
    </div>
  );
}

export default DashboardPage;
