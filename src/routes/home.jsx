import { Link } from "react-router-dom";
import Card from "../components/card";
import backgroundImg from "../assets/images/nile-fountain.png";

import Logo from "../assets/icons/logo.svg";
import Instagram from "../assets/icons/instagram.svg";
import Facebook from "../assets/icons/facebook.svg";
import Whatsapp from "../assets/icons/whatsapp.svg";
import Pinterest from "../assets/icons/pinterest.svg";

import InstagramBlack from "../assets/icons/instagram-black.svg";
import FacebookBlack from "../assets/icons/facebook-black.svg";
import WhatsappBlack from "../assets/icons/whatsapp-black.svg";
import PinterestBlack from "../assets/icons/pinterest-black.svg";

import ArrowBlack from "../assets/icons/arrow-black.svg";

import Aksum from "../assets/images/aksum.png";
import Lalibela from "../assets/images/lalibela.png";
import Mursi from "../assets/images/mursi-tribe.png";

function Home() {
  return (
    <div className="min-h-screen">
      <section
        id="hero"
        className="bg-white text-black relative h-screen p-4 md:p-16 flex flex-col justify-between"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <img
          src={Logo}
          alt="Logo"
          className="absolute top-4 left-4 ml-4 md:top-8 md:left-8 md:ml-8 w-20 lg:w-24"
        />

        <div
          id="statement"
          className="relative z-10 text-white mt-32 md:mt-48 flex flex-col gap-4 items-start"
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl leading-tight">
            Explore Ethiopia
          </h1>
          <p className="mt-4 text-lg md:text-2xl lg:text-3xl max-w-2xl lg:max-w-4xl text-wrap">
            Explore Ethiopia's rich history, vibrant cultures, and stunning
            landscapes with us.
          </p>
          <Link
            to="/about"
            className="inline-block mt-8 px-6 py-2 md:px-10 md:py-3 border border-black bg-white text-black rounded-full mr-auto text-lg md:text-xl"
          >
            Learn More
          </Link>
        </div>

        <div
          id="links"
          className="relative flex flex-col justif md:flex-row md:justify-between items-end z-10 gap-8 mt-16 md:mt-0"
        >
          <div
            id="socials"
            className="flex items-center justify-start md:justify-center gap-4 md:gap-8 p-4 mt-8 md:mt-0 w-full md:w-auto"
          >
            <a href="https://www.instagram.com/visitethiopia" target="_blank">
              <img src={Instagram} alt="Instagram" className="w-8 h-8" />
            </a>
            <a href="https://www.facebook.com/visitethiopia" target="_blank">
              <img src={Facebook} alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="https://wa.me/visitethiopia" target="_blank">
              <img src={Whatsapp} alt="Whatsapp" className="w-8 h-8" />
            </a>
            <a href="https://www.pinterest.com/visitethiopia" target="_blank">
              <img src={Pinterest} alt="Pinterest" className="w-8 h-8" />
            </a>
          </div>

          <div
            id="destinations"
            className="flex items-center justify-start md:justify-center gap-4 md:gap-8 w-full md:w-auto"
          >
            <Card img={Aksum} title="Aksum Oblisk" href="#aksum" />
            <Card img={Lalibela} title="Lalibela Churches" href="#lalibela" />
            <Card img={Mursi} title="Mursi Tribes" href="#mursi" />
          </div>
        </div>
      </section>

      <section
        id="aksum"
        className="h-screen flex flex-col md:flex-row items-center justify-center p-4 md:p-8 lg:p-16 gap-4"
      >
        <div className="md:w-1/2 flex flex-col justify-center md:pr-8 p-8">
          <h2 className="montserrat text-3xl md:text-5xl lg:text-6xl font-bold">
            Obelisk of Aksum
          </h2>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl">
            The Obelisk of Aksum is a towering granite stele, one of many found
            in the ancient city of Aksum, symbolizing the height of the Aksumite
            Empire’s architectural and engineering prowess.
          </p>
          <button className="px-6 py-2 md:px-8 md:py-4 mt-8 rounded-full flex items-center gap-2 border border-black max-w-min text-nowrap">
            <span className="text-black mr-2">See Reviews</span>
            <img
              src={ArrowBlack}
              alt="Arrow"
              className="w-8 h-4 md:w-10 mr-8"
            />
          </button>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <img src={Aksum} className="w-full h-full" alt="Aksum" />
        </div>
      </section>

      <section
        id="lalibela"
        className="h-screen flex flex-col-reverse md:flex-row items-center justify-center p-4 md:p-8 lg:p-16 gap-4"
      >
        <div className="md:w-1/2 mt-4 md:mt-0">
          <img src={Lalibela} className="w-full h-full" alt="Lalibela" />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center md:pl-8 p-8">
          <h2 className="montserrat text-3xl md:text-5xl lg:text-6xl font-bold">
            Rock-Hewn Churches of Lalibela
          </h2>
          <p className="text-wrap mt-4 text-lg md:text-xl lg:text-2xl">
            Lalibela, Ethiopia's 'New Jerusalem,' is a remarkable complex of
            eleven rock-hewn churches carved into the earth during the 12th
            century under King Lalibela.
          </p>
          <button className="px-6 py-2 md:px-8 md:py-4 mt-8 rounded-full flex items-center gap-2 border border-black max-w-min text-nowrap">
            <span className="text-black mr-2">See Reviews</span>
            <img
              src={ArrowBlack}
              alt="Arrow"
              className="w-8 h-4 md:w-10 mr-8"
            />
          </button>
        </div>
      </section>

      <section
        id="mursi"
        className="h-screen flex flex-col md:flex-row items-center justify-center p-4 md:p-8 lg:p-16 gap-4"
      >
        <div className="md:w-1/2 flex flex-col justify-center md:pr-8 p-8">
          <h2 className="montserrat text-3xl md:text-5xl lg:text-6xl font-bold">
            Mursi Tribes
          </h2>
          <p className="text-wrap mt-4 text-lg md:text-xl lg:text-2xl">
            The Mursi are known for their striking body art, while Hamer women
            display distinctive henna-dyed hairstyles.
          </p>
          <button className="px-6 py-2 md:px-8 md:py-4 mt-8 rounded-full flex items-center gap-2 border border-black max-w-min text-nowrap">
            <span className="text-black mr-2">See Reviews</span>
            <img
              src={ArrowBlack}
              alt="Arrow"
              className="w-8 h-4 md:w-10 mr-8"
            />
          </button>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <img src={Mursi} className="w-full h-full" alt="Aksum" />
        </div>
      </section>

      <section
        id="footer"
        className="bg-gray-100 text-gray-700 flex flex-col md:flex-row justify-between items-center py-10 px-4 md:px-8 lg:px-16"
      >
        <div className="flex gap-8 flex-col md:flex-row">
          <img src={Logo} alt="Logo" className="w-12 md:w-16" />
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Agreement for the processing of personal data</Link>
        </div>
        <div
          id="socials"
          className="flex items-center gap-6 md:gap-12 md:p-4 mt-8 md:mt-0"
        >
          <a href="https://www.instagram.com/visitethiopia" target="_blank">
            <img src={InstagramBlack} alt="Instagram" className="w-8 h-8" />
          </a>
          <a href="https://www.facebook.com/visitethiopia" target="_blank">
            <img src={FacebookBlack} alt="Facebook" className="w-8 h-8" />
          </a>
          <a href="https://wa.me/visitethiopia" target="_blank">
            <img src={WhatsappBlack} alt="Whatsapp" className="w-8 h-8" />
          </a>
          <a href="https://www.pinterest.com/visitethiopia" target="_blank">
            <img src={PinterestBlack} alt="Pinterest" className="w-8 h-8" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
