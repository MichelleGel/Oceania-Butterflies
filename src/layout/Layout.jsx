import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import ButterflyCard from "../components/ButterflyCard"

const Layout=()=> {
    return (
        <>
        <NavBar/>        
        <hr></hr>
        <ButterflyCard></ButterflyCard>
        <hr></hr>
        <Outlet/>
        
        <Footer/>
        </>
    )
}

export default Layout