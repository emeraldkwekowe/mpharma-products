import { NavLink } from "react-router-dom"
import "./sidebar.scss"
import Image from "../../../components/Image/image";

export const Sidebar = props => {
    const activePage = props.activePage
    return(
        <aside>
             <nav>
                <ul>
                    <li><NavLink to="/products/view/" className={`${activePage === 1 && 'current'}`}> <i className="fa fa-bars"></i> View Products</NavLink></li>
                    <li><NavLink to="/products/edit/" className={`${activePage === 2 && 'current'}`}><i className="fa fa-pencil"></i>  Edit a product</NavLink></li>
                    <li><NavLink to="/products/delete" className={`${activePage === 3 && 'current'}`}><i className="fa fa-trash"></i>  Delete a product</NavLink></li>
                </ul>
            </nav>
            <Image onClick={() => props.setshowAddModal(true)} src="person.svg" alt="Person" />

        </aside>
    )
}