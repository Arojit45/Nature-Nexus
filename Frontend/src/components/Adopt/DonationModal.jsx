// src/components/DonationModal.jsx
import React from "react";

const DonationModal = ({ animal, isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={closeModal}
    >
      <div
        className="bg-white p-6 rounded-lg w-96"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
      >
        <h2 className="text-3xl font-semibold text-gray-800">
          Adopt {animal?.name}
        </h2>
        <p className="text-lg mt-2 text-gray-700">{animal?.story}</p>
        <div className="mt-4">
          <button
            className="w-full bg-green-500 text-white py-2 rounded-lg"
            onClick={closeModal}
          >
            Thank You for Adopting!
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;
