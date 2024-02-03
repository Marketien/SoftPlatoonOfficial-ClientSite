import VerticalTabs from "../VerticalTabsContainer/VerticalTabsContainer";


const OurOffering = () => {
    return (
        <div className=" bg-[#e7e7eb6f] py-[1px]">
            <div className="default-margin">
            <h1  style={{ fontFamily: "Open Sans,sans-serif" }}
             className="flex justify-start text-[40px] font-[700] mb-[100px]">Explore Our Offering</h1>

{/* Vertical Tabs Container  */}
<VerticalTabs/>
            </div>

        </div>
    );
};

export default OurOffering;