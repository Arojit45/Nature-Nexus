import React, { useState } from "react";

const AnimalAdoptionCard = ({ animal, openModal, onAdoptClick }) => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  return (
    <div className="bg-white p-2 rounded-lg shadow-lg w-80 relative">
      {/* Animal Image */}
      <img
        src={animal.photo}
        alt={animal.name}
        className={`w-full h-56 object-cover rounded-lg transition-all duration-300 ${
          isOverlayVisible ? "blur-sm" : ""
        }`} // Add blur class when overlay is visible
      />

      {/* Animal Information */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-green-700">{animal.name}</h3>
        <p className="text-gray-600 mt-2">{animal.type}</p>
        <p className="text-gray-500 mt-2">{animal.description}</p>

        {/* Adopt Button */}
        <button
          onClick={onAdoptClick}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none"
        >
          Adopt
        </button>

        {/* View Details Button */}
        <button
          onClick={toggleOverlay} // Toggle the overlay visibility
          className="mt-2 ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          View Details
        </button>
      </div>

      {/* Overlay with Text */}
      {isOverlayVisible && (
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-10"
          onClick={toggleOverlay} // Close the overlay when clicked
        >
          <p className="text-white text-2xl">
             {animal.story}!
          </p>
        </div>
      )}
    </div>
  );
};

export default AnimalAdoptionCard;
