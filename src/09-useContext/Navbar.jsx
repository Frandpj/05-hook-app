import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink className={({isActive}) => `nav-link ${ isActive ? 'active' : '' }`} to="/">
                            Home
                        </NavLink>

                        <NavLink className={({isActive}) => `nav-link ${ isActive ? 'active' : '' }`} to="/about">
                            About
                        </NavLink>

                        <NavLink className={({isActive}) => `nav-link ${ isActive ? 'active' : '' }`} to="/login">
                            Login
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
