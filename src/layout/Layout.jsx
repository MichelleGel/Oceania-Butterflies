import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import AboutMe from "../pages/Contact"

const Layout=()=> {
    return (
        <>
        <NavBar/>

        <Outlet/>

        <AboutMe />
        
        <Footer/>
        </>
    )
}

export default Layout