// src/pages/AdoptAnimals.jsx
import React, { useState } from "react";
import AnimalAdoptionCard from "./AnimalAdoptionCard"; // Correct import path
import DonationModal from "./DonationModal"; // Correct import path
import { animals } from "../../Data/animal"; // Import the animal data
import Nav from "../HeroSection/Nav";
import { FaSearch } from "react-icons/fa";

const AdoptAnimals = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter animals based on the search term
  const filteredAnimals = animals.filter((animal) => {
    const animalName = animal.name ? animal.name.toLowerCase() : "";
    const animalType = animal.type ? animal.type.toLowerCase() : "";

    return (
      animalName.includes(searchTerm.toLowerCase()) ||
      animalType.includes(searchTerm.toLowerCase())
    );
  });

  const openModal = (animal) => {
    setSelectedAnimal(animal);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedAnimal(null);
  };

  const handleAdoptClick = (animal) => {
    alert(`Thank you for adopting ${animal.name}!`);
    // You can add additional logic for the adoption process here
  };

  return (
    <div className="min-h-screen  space-y-10 bg-[#F2F1F6] py-1">
      <div className="top-0 left-0 right-0 z-10  bg-white shadow-md">
        <Nav />
      </div>
      <div>
        <h1 className="text-3xl sm:text-4xl font-kanit text-center mt-10 mb-6">
          Support wildlife protection by adopting one of these beautiful
          animals.
        </h1>
      </div>
      <div className="relative w-2/3 flex justify-center mx-auto mb-6">
        {/* Input Field */}
        <input
          type="text"
          placeholder="Search by animal name or type..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 w-full pl-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-green-500"
        />

        {/* Search Icon */}
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      {/* Animal Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredAnimals.length > 0 ? (
          filteredAnimals.map((animal) => (
            <AnimalAdoptionCard
              key={animal.id}
              animal={animal}
              openModal={() => openModal(animal)}
              onAdoptClick={() => handleAdoptClick(animal)} // Pass the adopt handler
            />
          ))
        ) : (
          <p className="text-center text-gray-600 mt-6">
            No animals match your search.
          </p>
        )}
      </div>

      {/* Donation Modal */}
      <DonationModal
        animal={selectedAnimal}
        isOpen={isModalOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default AdoptAnimals;
