import Banner from "../../Shared/HomeSection/Banner/Banner";
import Sponsered from "../../Shared/HomeSection/Sponsered/Sponsered";


const  Home = () => {
    return (
        <div>

            <Banner/>
            <h1 className="container text-white text-xl text-center my-20">Since 1989. For millions of users. We transform businesses with powerful and adaptable <br /> digital solutions that satisfy the needs of today and unlock the opportunities of <br />  tomorrow.</h1>
            <Sponsered/>
        </div>
    );
};

export default Home;