import Banner from "../../Shared/HomeSection/Banner/Banner";
import Section1 from "../../Shared/HomeSection/Section-1/Section1";
import Section2 from "../../Shared/HomeSection/Section-2/Section2";
import Section3 from "../../Shared/HomeSection/Section-3/Section3";


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
            <Section2/>
            <Section3/>
        </div>
    );
};

export default Home;