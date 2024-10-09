import Aos from "aos";
import "aos/dist/aos.css";
const data = [
  {
    title: "Scoping",
    disc: "Learn how we gather complete requirements, map the accurate scope, and prevent scope creep while preserving critical deliverables.",
  },
  {
    title: "Resource planning",
    disc: "Discover how we compose a right-sized team and pick the best candidates for the needed roles under a fully outsourced cooperation model.",
  },
  {
    title: "Cost estimation",
    disc: "Explore the factors and principles we consider to deliver precise estimates, see our sample cost calculations, and learn our cost optimization practices.",
  },
  {
    title: "Risk management",
    disc: "Check the steps we take to recognize potential risks at early project stages and effectively tackle emerging challenges throughout the SDLC.",
  },
  {
    title: "Change management",
    disc: "Understand our structured and controllable process to record, assess, triage, and implement feasible change requests.",
  },
  {
    title: "Success measurement",
    disc: "Check the KPIs we use to objectively evaluate cooperation health and learn our practices for joint success assessment.",
  },
  {
    title: "Project reporting",
    disc: "Learn the types and scope of reports we deliver in software development projects and explore report examples.",
  },
  {
    title: "Collaboration",
    disc: "Discover the communication forms and tools we use to ensure productive teamwork and smooth interactions with our clients.",
  },
];

const SecureSuccess = () => {

  Aos.init();

  return (
    <div className=" py-[180px] lg:mx-auto md:mx-7 sm: mx-4 ">
      <div
        style={{ fontFamily: "Open Sans, sans-serif" }}
        className=" lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-7 sm: mx-4"
      >
        <h1
          data-aos="fade-up"
          style={{ fontFamily: "Sumana,serif" }}
          className="font-bold text-5xl mb-5"
        >
          Secure the Success of Your
          <span className="text-purple-900 ms-1 "> IT Initiative</span>
        </h1>
        <p data-aos="fade-up" className="text-xl font-semibold">
          As a tech partner, SoftPlatoon takes on a mission of achieving your
          project success no matter what. Check the tried-and-true project
          management practices we rely on to drive the project to its goals
          despite budget constraints and changing requirements.
        </p>

        <div
          data-aos="fade-up"
          className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm: grid-cols-1 gap-8"
        >
          {data.map(({ title, disc }, index) => (
            <div key={index}>
              <h1
                style={{ fontFamily: "Open Sans, sans-serif" }}
                className="underline text-2xl font-semibold hover:text-[#793ea7] mb-5"
              >
                {" "}
                {title}
              </h1>
              <p
                style={{ fontFamily: "Ubuntu,sans-serif" }}
                className="text-lg "
              >
                {disc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecureSuccess;
