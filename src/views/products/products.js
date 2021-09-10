import { useEffect, useState } from "react";
import { Header } from "../../layout/header/header";
import { Sidebar } from "./components/sidebar";
import { View } from "./pages/view/view";

//Product Pages
import "./products.scss"

const Dashboard = () => {
    const [activePage, setActivePage] = useState(1);

    const url = window.location;
    const page = url.pathname.split("/")[2];

    useEffect(() => {
        if(page === "edit"){
            setActivePage(2);
        }
        else if(page === "delete"){
            setActivePage(3);
        }
        else if(page === "add"){
            setActivePage(4);
        }
    }, [page])

    return(
        <>
            <Header />
            <main className="products">
                <Sidebar />
                <View />
            </main>
        </>
    )
}

export default Dashboard;
