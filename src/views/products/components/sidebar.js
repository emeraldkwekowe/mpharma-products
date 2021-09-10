import { NavLink } from "react-router-dom"
import "./sidebar.scss"
import Image from "../../../components/Image/image";

export const Sidebar = () => {
    return(
        <aside>
             <nav>
                <ul>
                    <li><NavLink to="products/view" className="current"> <i className="fa fa-bars"></i> View Products</NavLink></li>
                    <li><NavLink to="products/edit"><i className="fa fa-pencil"></i>  Edit a product</NavLink></li>
                    <li><NavLink to="products/delete"><i className="fa fa-trash"></i>  Delete a product</NavLink></li>
                </ul>
            </nav>
            {/* <Image src="person.svg" alt="Person" /> */}

        </aside>
    )
}