import { Outlet } from "react-router-dom";
// import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
import NewNavbar from "../Components/Shared/Navbar/NewNavbar";


const Layout = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <NewNavbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;