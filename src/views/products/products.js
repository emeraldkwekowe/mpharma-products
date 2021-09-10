import { useEffect, useState } from "react";
import { Header } from "../../layout/header/header";
import { Sidebar } from "./components/sidebar";
import AddProduct from "./pages/add/add";
import { View } from "./pages/view/view";

//Product Pages
import "./products.scss"

const Dashboard = () => {
    const [activePage, setActivePage] = useState(1);
    const [showAddModal, setshowAddModal] = useState(false);

    //Get the current page
    const url = window.location;
    const page = url.pathname.split("/")[2];

    useEffect(() => {
        if(page === "edit"){
            setActivePage(2);
        }
        else if(page === "delete"){
            setActivePage(3);
        }
    }, [page])

    return(
        <>
            <Header />
            <main className="products">
                <Sidebar setshowAddModal={setshowAddModal}/>
                <View />
                {
                    showAddModal &&
                    <AddProduct closeModal={() => setshowAddModal(false)}/>
                }
            </main>
        </>
    )
}

export default Dashboard;
