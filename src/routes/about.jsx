import { Link } from "react-router-dom";
import Pattern from "../assets/images/pattern.png";
import Logo from "../assets/icons/logo.svg";

function About() {
  return (
    <section
      id="about"
      className="relative h-screen p-4 md:p-16 flex flex-col md:flex-row justify-between"
      style={{
        backgroundImage: `url(${Pattern})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#DCF3BF] opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-between items-center text-black h-full w-full">
        <h1 className="text-4xl md:text-6xl mb-4">About Us</h1>
        <div className="relative z-10 flex flex-col md:flex-row items-center text-black h-full w-full">
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="montserrat font-bold text-xl md:text-5xl mt-8">
              Who are we?
            </h2>
            <p className="mt-4 text-lg md:text-2xl max-w-2xl">
              We specialize in providing unforgettable experiences in Ethiopia,
              from breathtaking landscapes to rich cultural heritage.
            </p>
            <Link
              to="/"
              className="inline-block mt-8 px-6 py-2 md:px-10 md:py-3 border border-black bg-white text-black rounded-full text-lg md:text-xl transition duration-300 hover:bg-gray-200"
            >
              Back to Home
            </Link>
          </div>

          <div className="relative z-10 w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0 rounded-2xl overflow-hidden">
            <img
              src={Logo}
              alt="Company Logo"
              className="w-full h-auto object-cover md:object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
