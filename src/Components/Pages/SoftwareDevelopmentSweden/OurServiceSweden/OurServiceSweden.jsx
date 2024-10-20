import SwedenTab from "./SwedenTab";


const OurServiceSweden = () => {
    return (
        <div className="px-3 py-5 lg:max-w-6xl md:max-w-3xl
       sm: max-w-sm mx-auto ">
          <h1
        style={{ fontFamily: "Sumana, serif" }}
        className=" font-bold text-5xl mb-2 lg:mx-auto md:mx-4 sm: mx-4"
      >
        Our <span className="text-purple-800">Services</span>
      </h1>
      <h3 style={{ fontFamily: "Ubuntu,sans-serif" }} className="text-lg my-5 lg:mx-auto md:mx-4 sm: mx-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab repellendus animi distinctio laudantium quia iusto,  nostrum perferendis, id voluptatum, possimus beatae sunt voluptates porro qui a rerum quis nisi?</h3>
      {/* ------------------------  Tab Section ------------------------ */}
      <div>
<SwedenTab/>
      </div>
        </div>
    );
};

export default OurServiceSweden;