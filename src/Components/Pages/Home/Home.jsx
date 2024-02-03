import Banner from "../../Shared/HomeSection/Banner/Banner";
import OurOffering from "../../Shared/HomeSection/OurOffering/OurOffering";
import Sponsered from "../../Shared/HomeSection/Sponsered/Sponsered";


const  Home = () => {
    return (
        <div>
            <Banner/>
            <h1  style={{ fontFamily: "Open Sans,sans-serif" }}
             className=" text-lg text-center default-margin"
             >Since 1989. For millions of users. We transform businesses with powerful and adaptable 
             <br /> digital solutions that satisfy the needs of today and unlock the opportunities of 
             <br />  tomorrow.</h1>
            <Sponsered/>
            <OurOffering/>
        </div>
    );
};

export default Home;