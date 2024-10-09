import icon1 from "../../../../../public/Images/web page-01.png";
import icon2 from "../../../../../public/Images/web page-02.png";
import icon3 from "../../../../../public/Images/web page-03.png";
import icon4 from "../../../../../public/Images/web page-05.png";
import icon5 from "../../../../../public/Images/web page-04.png"; 

const ExploreServices = () => {

    const ExploreServicesData = [
      {
        icon: icon1,
        title: "Website",
        disc: "Design"
      },
      {
        icon: icon2,
        title: "Website",
        disc: "Development"
      },
      {
        icon: icon3,
        title: "UX/UI",
        disc: "Design"
      },
      {
        icon: icon4,
        title: "Graphics",
        disc: "Design"
      },
      {
        icon: icon5,
        title: "Digital",
        disc: "Marketing"
      },
    ];

    return (
        <div className=" bg-white py-[180px] ">
        <div
         data-aos="fade-up"
         className="lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-7 sm: mx-4">
           <h1 
            style={{ fontFamily: "Sumana,serif" }}
           className="dafault-heading">Explore
           <span className="-ms-[150px]"> <br />  Our Popular <span className='text-purple-900'> Services</span> </span></h1>
    
          {/* cards section */}
          <div
          className="-mt-[60px] mb-[80px] grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-5 ">
            {
            ExploreServicesData.map(({ icon, title, disc }) => (
              <div
             
                key={title}
                className=" bg-[#59287f1c] shadow-lg shadow-[#2d253447]  rounded-md px-4 mb-3"
              >
                <div className="flex justify-center mt-5 ms-3">
                  <img className="w-[80px]" src={icon} alt={title} />
                </div>
                <div style={{ fontFamily: "Ubuntu,sans-serif" }} className="card-body">
                  <h2 className="text-center text-xl text-[#323738]">{title}</h2>
                  <h2 className="text-center text-xl text-[#323738]">{disc}</h2>
                </div>
              </div>
            ))
            }
          </div>
        </div>
        </div>
    );
};

export default ExploreServices;