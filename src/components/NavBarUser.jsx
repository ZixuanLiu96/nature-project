import { NavLink } from "react-router-dom"

function NavBarUser() {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
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
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/user/:id">Explore</NavLink></li>
                        <li>
                            <details>
                                <summary>My Collections</summary>
                                <ul className="p-2">
                                    <li><NavLink to="/my-collection">My collection</NavLink></li>
                                    <li><NavLink to="/new-scenery">Add new scenery</NavLink></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <span>Hello, user!</span>
                    <a className="btn">Log out</a>
                </div>
            </div>
        </>

    )
}

export default NavBarUser