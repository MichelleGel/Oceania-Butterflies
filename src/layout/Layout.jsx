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
            
            <div className="gallery-container">
                {
                    butterfliesData.butterfly.map(butterfly => (
                        <ButterflyCard key={butterfly.id} butterfly={butterfly} />
                    ))
                }
            </div>

            <Footer />
        </>
    )
}

export default Layout