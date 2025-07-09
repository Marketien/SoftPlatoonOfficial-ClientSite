import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import NavigationBar from "../Components/Shared/Navbar/NavigationBar";


const Layout = () => {
    return (
        <div>
            <NavigationBar/> {/*no dropdown   */}
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;