import { Link, NavLink } from "react-router-dom"
import Image from "../../components/Image/image"
import "./header.scss"

export const Header = () => {
    return(
        <header>
            <Link className="logo" to="/"></Link>
            <Image src="input.svg" alt="in" />
            <nav>
                <ul>
                    <li><NavLink to="" className="current">Products</NavLink></li>
                    <li><NavLink to="">Website</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}