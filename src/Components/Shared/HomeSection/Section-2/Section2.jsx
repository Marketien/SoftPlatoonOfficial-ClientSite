import VerticalTabs from "../VerticalTabsContainer/VerticalTabsContainer";

const Section2 = () => {
  return (
    <div
      style={{ fontFamily: "Open Sans,sans-serif" }}
      className="bg-[#e7e7eb21] py-[1px] lg:max-w-6xl md:max-w-3xl
       sm: max-w-sm lg:mx-auto md:mx-7 sm: mx-4 "
    >
      {/* Vertical Tabs Container  */}
      <div>
      <VerticalTabs />
      </div>
    </div>
  );
};

export default Section2;
