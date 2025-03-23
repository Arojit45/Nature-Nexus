import React from "react";
import Card from "../../lib/Card";
import Forest from "../../assets/Forest.jpg";
import Education from "../../assets/education.jpg";
import cleanRiver from "../../assets/cleanRiver.jpg";
import work from "../../assets/work.jpg";
import Button from "../../lib/Button";

const SeventhPage = () => {
  return (
    <div className="w-full bg-[#F2F1F6] p-2">
      <div className="min-h-screen gap-6 p-5 bg-green-200 mt-5 flex flex-col rounded-xl">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-black font-semibold text-center">
          Our Projects
        </h1>

        {/* Cards + Image Section */}
        <div className="w-full flex flex-col lg:flex-row gap-6 items-center lg:items-start">
          {/* Cards Section */}
          <div className="w-full lg:w-4/5 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row justify-evenly gap-4">
              <Card
                imageUrl={Forest}
                title="Forest Conservation"
                description="We’ve launched reforestation missions in degraded areas by planting over 5,000 native trees, restoring habitats for wildlife and improving local air quality."
              />
              <Card
                imageUrl={Education}
                title="Forest Conservation"
                description="Our dedicated rescue teams have saved and treated over 2,300 wild animals, providing medical care and safe rehabilitation back into the wild."
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-evenly gap-4">
              <Card
                imageUrl={Education}
                title="Forest Conservation"
                description="Partnering with forest departments, we deploy surveillance drones and patrol units to prevent illegal hunting in protected zones."
              />
              <Card
                imageUrl={cleanRiver}
                title="Forest Conservation"
                description="Through workshops and school programs, we've educated more than 80,000 students about sustainability, biodiversity, and climate action."
              />
            </div>
          </div>

          {/* Image + Button Section */}
          <div className="w-full relative lg:w-1/4 flex flex-col items-center lg:items-start gap-3">
            <img
              className="w-full h-[300px] sm:h-[400px] lg:h-[700px] object-cover rounded-xl"
              src={work}
              alt="Work"
            />
            <div className="w-[200px] h-[55px] pt-2 pl-2 rounded-tl-xl absolute bottom-0 right-0 bg-green-200 flex items-center justify-end">
              <Button title="View more" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeventhPage;
