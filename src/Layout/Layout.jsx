import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import NavigationBar from "../Components/Shared/Navbar/NavigationBar";
// import ResNavBar from "../Components/Shared/Navbar/ResNavBar";


const Layout = () => {
    return (
        <div>
             <NavigationBar/> *   {/* no dropdown   */}
            {/* <ResNavBar/> */}
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;