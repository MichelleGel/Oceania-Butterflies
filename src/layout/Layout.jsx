import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import ButterflyCard from "../components/ButterflyCard"
import butterfliesData from '../../server/butterfly.json';

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