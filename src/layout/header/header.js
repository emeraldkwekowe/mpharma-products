import { Link, NavLink } from "react-router-dom"
import "./header.scss"

export const Header = () => {
    return(
        <header>
            <Link className="logo" to="/"></Link>
            <nav>
                <ul>
                    <li><NavLink to="" className="current">Products</NavLink></li>
                    <li><NavLink to="">Website</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}