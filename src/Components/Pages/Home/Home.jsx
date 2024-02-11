import Banner from "../../Shared/HomeSection/Banner/Banner";
import Section0 from "../../Shared/HomeSection/Section-0/Section0";
import Section1 from "../../Shared/HomeSection/Section-1/Section1";
import Section2 from "../../Shared/HomeSection/Section-2/Section2";
import Section3 from "../../Shared/HomeSection/Section-3/Section3";
import Section4 from "../../Shared/HomeSection/Section-4/Section4";
import Section5 from "../../Shared/HomeSection/Section-5/Section5";
import Section6 from "../../Shared/HomeSection/Section-6/Section6";


const  Home = () => {
    return (
        <div>
            <Banner/>
            <h1  style={{ fontFamily: "Open Sans,sans-serif" }}
             className=" default-margin default-text-color text-lg text-center"
             >Since 1989. For millions of users. We transform businesses with powerful and adaptable 
             <br /> digital solutions that satisfy the needs of today and unlock the opportunities of 
             <br />  tomorrow.</h1>
            <Section1/>
            <Section0/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
        </div>
    );
};

export default Home;