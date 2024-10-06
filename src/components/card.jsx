import { Link } from "react-router-dom";
import Arrow from "../assets/icons/arrow.svg";

function Card({ img, title, href }) {
  return (
    <a
      href={href}
      className="w-40 md:w-52 h-40 md:h-48 rounded-2xl overflow-hidden relative border-2 border-transparent hover:border-gray-200 transition-all ease-in-out"
    >
      <img src={img} alt={title} className="h-full w-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 text-white flex justify-between items-center">
        <span className="text-sm md:text-base">{title}</span>
        <img src={Arrow} alt="Arrow" className="w-4 h-4 md:w-6 md:h-6" />
      </div>
    </a>
  );
}

export default Card;
