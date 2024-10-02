import { Outlet } from "react-router-dom";
// import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
import NavigationBar from "../Components/Shared/Navbar/NavigationBar";


const Layout = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <NavigationBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;