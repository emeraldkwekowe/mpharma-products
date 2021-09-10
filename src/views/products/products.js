import { useEffect, useState } from "react";
import { Header } from "../../layout/header/header";

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
        <Header />
    )
}

export default Dashboard;
