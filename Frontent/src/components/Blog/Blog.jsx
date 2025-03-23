import React, { useRef, useState } from "react";
import work from "../../assets/work.jpg";
import work2 from "../../assets/work2.jpg";
import work3 from "../../assets/work3.webp";
import work4 from "../../assets/work4.jpg";
import Forest from "../../assets/Forest.jpg";

const info = [
{title: "Royal Bengal Tiger Spotted in Restored Reserve",image: work ,},
{title: "10,000+ Trees Planted in a Single Day",image: work2,},
{title: "Local Student Wins National Eco-Champion Award",image: work3 ,},
{title: "Elephant Family Reunited After Rescue",image: work4 ,},
{title: "Clean River Campaign Removes 2 Tons of Waste",image: Forest ,},
];

const Blog = () => {
 const [hoverImage, setHoverImage] = useState("");
   const [showImage, setShowImage] = useState(false);
   const hideTimeout = useRef(null);

   const handleMouseEnter = (image) => {
     clearTimeout(hideTimeout.current);
     setHoverImage(image);
     setShowImage(true);
   };

   const handleMouseLeave = () => {
     hideTimeout.current = setTimeout(() => {
       setShowImage(false);
     }, 100); // small delay to prevent flicker
   };

  return (
    <div className="w-full rounded-xl relative">
      {/* Hover Image Display (hidden on small screens) */}
      {showImage && hoverImage && (
        <div
          className="hidden md:block fixed z-[99] pointer-events-none w-[250px] h-[250px] md:w-[23vw] md:h-[29vw] rounded-xl bg-cover bg-center transition-opacity duration-300"
          style={{
            left: "60%",
            top: "31%",
            backgroundImage: `url(${hoverImage})`,
          }}
        ></div>
      )}

      {/* News List */}
      <div className="gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full mx-auto flex flex-col">
        {info.map((info, index) => (
          <div
            key={index}
            className="relative w-full border-b-2 border-gray-600 flex items-center p-4 overflow-hidden cursor-pointer  transition-all duration-300"
            onMouseEnter={() => {
              setHoverImage(info.image);
              setShowImage(true);
            }}
            onMouseLeave={() => setShowImage(false)}
          >
            <div className="absolute inset-0 -top-full transition-all duration-200 ease-in group-hover:top-0 z-0 pointer-events-none"></div>
            <h2 className="relative z-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black">
              {info.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );    
};

export default Blog;
