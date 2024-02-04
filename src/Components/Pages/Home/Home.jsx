import Banner from "../../Shared/HomeSection/Banner/Banner";
import ITEcosystem from "../../Shared/HomeSection/ITEcosystem/ITEcosystem";
import OurOffering from "../../Shared/HomeSection/OurOffering/OurOffering";
import Sponsered from "../../Shared/HomeSection/Sponsered/Sponsered";


const  Home = () => {
    return (
        <div>
            <Banner/>
            <h1  style={{ fontFamily: "Open Sans,sans-serif" }}
             className=" default-margin default-text-color text-lg text-center"
             >Since 1989. For millions of users. We transform businesses with powerful and adaptable 
             <br /> digital solutions that satisfy the needs of today and unlock the opportunities of 
             <br />  tomorrow.</h1>
            <Sponsered/>
            <OurOffering/>
            <ITEcosystem/>
        </div>
    );
};

export default Home;