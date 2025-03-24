import React from "react";
import { Link } from "react-router-dom";

const Card = ({ imageUrl, title, description }) => (
  <div className="bg-white shadow-lg rounded-xl overflow-hidden w-full sm:w-[45%] lg:w-[22%] transition-transform hover:scale-105 duration-300">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-green-700 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

export default function ProjectPage() {
    
  return (
    <div className="px-4 py-10 sm:px-10 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
        Our Project Initiatives
      </h2>

      <div className="flex flex-wrap justify-evenly gap-6">
        <Card
          imageUrl="https://growbilliontrees.com/cdn/shop/files/Grow-billion-trees-home-slide-1_8a913242-e8b2-47fb-acab-e4a6c9beda8c.jpg?v=1688202042&width=1500"
          title="Forest Conservation"
          description="We’re revitalizing deforested lands by planting native trees that promote biodiversity, fight climate change, and purify the air. These efforts help build healthier ecosystems and create green jobs for local communities."
        />
        <Card
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjQSp2Er7x3EKlpfThNDNQVEEUFi4nzbFuQ&s"
          title="River Clean-Up"
          description="Our clean-up drives remove plastic waste and pollutants from rivers, making waterways safer for aquatic life and communities. Partnering with volunteers and NGOs, we’ve restored multiple polluted river stretches."
        />
        <Card
          imageUrl="https://imgs.mongabay.com/wp-content/uploads/sites/30/2024/08/19111002/3_drone-flying_credit_Dax_Pandhi-768x512.jpeg"
          title="Environmental Education"
          description="Through tech like drones and AI, we monitor endangered zones and educate communities on illegal activities. We've organized workshops in schools and colleges to raise awareness and build future environmental leaders."
        />
        <Card
          imageUrl="https://www.unesco.org/sites/default/files/styles/paragraph_medium_desktop/article/2023-12/climate%20change%20education%20at%20cop28.jpg?itok=Vokm0jCr"
          title="Community Outreach"
          description="We collaborate with local leaders, schools, and NGOs to host interactive sessions on sustainability, waste management, and climate action. Over 80,000 students and residents have participated in these transformative programs."
        />
      </div>
      <Link to={"/"}>
        <div className="w-[200px] h-[50px] sm:w-[250px] sm:h-[60px] mt-10 mx-auto">
          <Button title={"Back"} />
        </div>
      </Link>
    </div>
  );
}
