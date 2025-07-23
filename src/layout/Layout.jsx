import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import ButterflyCard from "../components/ButterflyCard"

import List from "../pages/List";
import ButterflyDetail from "../pages/ButterflyDetail";

const Layout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
            
        </>
    )
}

export default Layout