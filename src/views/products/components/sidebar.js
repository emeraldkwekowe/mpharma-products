import { NavLink } from "react-router-dom"
import "./sidebar.scss"
import Image from "../../../components/Image/image";

//Redux
import { useDispatch } from "react-redux";
import { clearState } from "../../../redux/products/actions";
import { useState } from "react";

export const Sidebar = props => {
    const dispatch = useDispatch();
    const activePage = props.activePage
    const [showSideMenu, toggleSideMenu] = useState(false);

    return(
        <>
        <Image className="draw" src="drag.svg" alt="drag sidebar img" onClick={() => toggleSideMenu(true)}/>
        <aside className={`${showSideMenu && 'out'}`}>
            <Image className="close" src="close.svg" alt="close img" onClick={() => toggleSideMenu(false)}/>
             <nav>
                <ul>
                    <li><NavLink to="/products/view/" className={`${activePage === 1 && 'current'}`}> <i className="fa fa-bars"></i> View Products</NavLink></li>
                    <li><NavLink to="/products/edit/" className={`${activePage === 2 && 'current'}`}><i className="fa fa-pencil"></i>  Edit a product</NavLink></li>
                    <li><NavLink to="/products/delete" className={`${activePage === 3 && 'current'}`}><i className="fa fa-trash"></i>  Delete a product</NavLink></li>
                </ul>
            </nav>
            <Image onClick={() => props.setshowAddModal(true)} src="add.svg" alt="Add Icon" />
            <span onClick={() => dispatch(clearState())}>Reset State</span>


        </aside>
        </>
    )
}