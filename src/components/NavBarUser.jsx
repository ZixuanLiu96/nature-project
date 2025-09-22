import { NavLink } from "react-router-dom"
import { useUser } from "../context/user.context"

function NavBarUser() {
    const { user, logout } = useUser(); 

    return (
        <>
            <div className="navbar bg-[#15aabf] shadow-sm text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/user/:id">Explore</NavLink></li>
                            <li>
                                <NavLink to="/my-collection">My collection</NavLink>

                                <ul className="p-2">
                                    <li><NavLink to="/new-scenery">Add new scenery</NavLink></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li></li>
                        </ul>
                    </div>
                    <NavLink to="/" className="btn btn-ghost text-xl">Nature's Jewels</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        <li><NavLink to="/user/:id">Explore</NavLink></li>
                        <li>
                            <details>
                                <summary>My Collection</summary>
                                <ul className="p-2 bg-[#f59f00] dropdown-content menu">
                                    <li><NavLink to="/my-collection">My collection</NavLink></li>
                                    <li><NavLink to="/new-scenery">Add new spot</NavLink></li>
                                </ul>
                            </details>
                        </li>
                        <li><NavLink to="/user/:id">My Profile</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <span className="text-xl m-2">Hello, {user.userName}!  </span>
                    <button onClick={logout} className="btn btn-primary bg-[#f59f00] border-none shadow-none text-lg hover:bg-amber-400 m-2">Log out</button>
                </div>
            </div>
        </>

    )
}

export default NavBarUser