import { NavLink, useLocation } from "react-router-dom";
import { useUser } from "../context/user.context";

function NavBarUser() {
  const { user, logout } = useUser();
  const location = useLocation();

  //   console.log(location.pathname);
  const routeNames = {
    "/users/:id/my-collection": "My Collection",
    "/users/:id/new-scenery": "Add New Spot",
    "/users/:id/favourite": "My Favourite",
  };

  let navName = "My Collection";
  if (location.pathname.includes("/my-collection")) navName = "My Collection";
  else if (location.pathname.includes("/new-scenery")) navName = "Add New Spot";
  else if (location.pathname.includes("/favourite")) navName = "My Favourite";

  return (
    <>
      <div>
        {" "}
        {/* Barbaras changes */}
        {/* Navbar for small screens */}
        <div className="navbar bg-[#15aabf] shadow-sm text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-[#15aabf] rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink to="/users/explore">Explore</NavLink>
                </li>
                <li>
                  <NavLink to={`/users/${user.userId}/my-collection`}>
                    My collection
                  </NavLink>

                  <ul className="p-2">
                    <li>
                      <NavLink to={`/users/${user.userId}/new-scenery`}>
                        Add new spot
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={`/users/${user.userId}/favourite`}>
                        My favorite
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to={`/users/${user.userId}/profile`}>
                    My Profile
                  </NavLink>
                </li>
                <li>Logout</li>
              </ul>
            </div>
            <NavLink
              to={`/users/${user.userId}`}
              className="btn btn-ghost text-xl"
            >
              Nature's Jewels
            </NavLink>
          </div>
          {/* Navbar visible on larger screens */}
          <div className="navbar-center hidden lg:flex z-100 ">
            <ul className="menu menu-horizontal px-1 text-lg">
              <li>
                <NavLink to="/users/explore">Explore</NavLink>
              </li>
              <li>
                <details>
                  <summary className="w-40">{navName}</summary>
                  <ul className="p-2 bg-[#15aabf] rounded-box">
                    <li className="w-40">
                      <NavLink to={`/users/${user.userId}/my-collection`}>
                        My Collection
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={`/users/${user.userId}/new-scenery`}>
                        Add New Spot
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={`/users/${user.userId}/favourite`}>
                        My Favourite
                      </NavLink>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <NavLink to={`/users/${user.userId}/profile`}>
                  My Profile
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="navbar-end">
            {/* <span className="text-xl m-2 hidden sm:block">Hello, {user.userName}!</span> */}
            <button
              onClick={logout}
              className="btn btn-primary bg-[#f59f00] border-none shadow-none text-lg hover:bg-amber-400 m-2 hidden sm:block"
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBarUser;
