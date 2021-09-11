import { Link, NavLink } from "react-router-dom"
import Image from "../../components/Image/image"
import "./header.scss"

export const Header = () => {
    return(
        <header>
            <Link className="logo" to="/"></Link>
            <nav>
                <ul>
                    <li><NavLink to="" className="current">Products</NavLink></li>
                    <li><a href="https://mpharma.com/" target="_blank" rel="noreferrer">Website</a></li>
                </ul>
            </nav>
        </header>
    )
}