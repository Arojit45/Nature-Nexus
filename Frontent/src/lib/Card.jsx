import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa"; // example icon

const Card = ({ imageUrl, title, description }) => {

  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <div className="w-full sm:w-[400px] md:w-[450px] lg:w-[500px] bg-white shadow-xl overflow-hidden cursor-pointer rounded-xl relative">
      <div className="relative">
        {/* Top-Right Icon */}
        <div
          className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md z-20 cursor-pointer"
          onClick={() => setShowOverlay(!showOverlay)}
        >
          <FaLeaf className="text-green-600 text-sm" />
        </div>

        {/* Image */}
        <img
          className={`w-full h-[220px] sm:h-[280px] md:h-[300px] lg:h-[330px] object-cover rounded-xl transform transition-transform duration-300 ease-in-out hover:scale-105`}
          src={imageUrl}
          alt={title}
        />

        {/* Blur Overlay */}
        {showOverlay && (
          <div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm bg-black/40 text-white p-4 flex flex-col justify-center items-center rounded-xl z-10 transition-opacity duration-300">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-sm text-center">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
