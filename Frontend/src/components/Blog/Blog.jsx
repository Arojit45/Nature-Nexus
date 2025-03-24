import React, { useRef, useState } from "react";

const info = [
  {
    title: "Royal Bengal Tiger Spotted in Restored Reserve",
    image:
      "https://www.tigersafari.net/wp-content/uploads/2023/06/Bengal-tiger-in-kanha-national-park-India.webp",
  },
  {
    title: "10,000+ Trees Planted in a Single Day",
    image:
      "https://www.theblackgardenerblog.co.uk/wp-content/uploads/2019/12/10000-Trees-Planted-at-The-Young-Peoples-Forest.jpg",
  },
  {
    title: "Local Student Wins National Eco-Champion Award",
    image:
      "https://himalayainternational.in/wp-content/uploads/2024/07/452750407_404358839418484_6665014934892841812_n.jpg",
  },
  {
    title: "Elephant Family Reunited After Rescue",
    image:
      "https://www.africanparks.org/sites/default/files/styles/inline_image_style/public/teaser_image/2018-10/42582155_10156212961658411_5967738211751952384_o%202_0.jpg?itok=9m6eu0OJ",
  },
  {
    title: "Clean River Campaign Removes 2 Tons of Waste",
    image:
      "https://thebalisun.com/wp-content/uploads/2023/03/Four-Teenagers-Clean-Up-Balis-Rivers.jpg.webp",
  },
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
