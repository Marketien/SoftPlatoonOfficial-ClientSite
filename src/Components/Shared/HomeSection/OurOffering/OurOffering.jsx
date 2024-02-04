import VerticalTabs from "../VerticalTabsContainer/VerticalTabsContainer";


const OurOffering = () => {
    return (
        <div className=" bg-[#e7e7eb21] py-[1px]">
            <div className="default-margin">
            <h1  style={{ fontFamily: "Open Sans,sans-serif" }}
             className="dafault-heading">Explore Our Offering</h1>

{/* Vertical Tabs Container  */}
<VerticalTabs/>
            </div>

        </div>
    );
};

export default OurOffering;