import "./index.css";
import Navbar from "./Navbar.jsx";
import HeroSection from "./HeroSection.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div className="flex relative w-full h-screen overflow-hidden">
      <div className="flex-[25%] h-[100vh]"
        style={{
          background:
            "linear-gradient(to bottom, #59599B 0%, #24243E 59%, #0F0C29 100%)",
        }}
      >
        <img className="mx-auto mt-24" src="./Images/logo.png" alt="hello" />

        <div className="absolute w-[25%] bottom-24">
          <div className="bg-hand-shake bg-no-repeat bg-center w-full h-96"></div>
          <div className="mt-8 mb-8 px-[16px]">
            <h1 className="h-[88px] text-[40px] leading-[47px] text-white text-center">
              Partnership for Business Growth
            </h1>
            <p className="text-[#BDBDBD] text-center leading-[28px] h-[61px] mt-4">
              Partnerships are pivotal for business growth, enabling companies
              to leverage mutual strengths, share risks, and capitalize on
              opportunities.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[95vh] relative flex-[75%]">
        <Navbar />
        <HeroSection />
        <div className="absolute bottom-0 w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
