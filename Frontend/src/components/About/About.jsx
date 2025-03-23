// import React from "react";
// import { motion } from "framer-motion";
// import natureCover from "../../assets/forest.jpg";
// import Snow from "../../assets/snowleopard.jpg";
// import Forest from "../../assets"
// import Card from "../../lib/Card";

// // Animation variants
// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// };

// const About = () => {
//   return (
//     <div
//       className="px-6 py-12 md:px-16 lg:px-10 bg-white text-gray-800 space-y-12"
//       style={{ fontFamily: "Kanit, sans-serif" }}
//     >
//       <div className="w-full  flex flex-col bg-green-200 p-20 rounded-xl md:flex-row items-center gap-6">
//         <img
//           src={natureCover}
//           alt="Nature Cover"
//           className="w-full md:w-1/2 rounded-2xl shadow-lg"
//         />
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
//           <p className="text-base md:text-lg leading-relaxed">
//             Nature Nexus is a non-profit organization (NGO) committed to the
//             protection of wildlife and the preservation of our environment.
//             Founded by passionate environmentalists and conservationists, we
//             work tirelessly to safeguard nature for future generations.
//           </p>
//         </motion.div>
//       </div>
//       <div className="w-full  flex  p-10 rounded-xl items-center gap-6">
//         <div className="text-center flex flex-col">
//           <h2 className="text-6xl text-center font-kanit">Mission</h2>
//           <p className="text-justify text-[2px] ml-2 text-sm md:text-lg leading-relaxed max-w-3xl mx-auto">
//             Our mission is to protect endangered wildlife, restore natural
//             habitats, and raise awareness about environmental issues through
//             action, education, and community engagement. We operate across
//             forests, rivers, wetlands, and coastal areas—focusing on both
//             immediate rescue and long-term conservation. From saving injured
//             animals to reforesting damaged land, every effort we make brings us
//             closer to a greener and safer planet.
//           </p>
//         </div>
//         <img
//           src={Snow}
//           alt="Snow Leopard"
//           className="w-[1000px] h-[400px] object-cover md:w-3/4 rounded-2xl shadow-lg"
//         />
//       </div>
//       <div>
//         <div>
//           <Card
//             imageUrl={Forest}
//             title="Forest Conservation"
//             description="We’ve launched reforestation missions in degraded areas by planting over 5,000 native trees, restoring habitats for wildlife and improving local air quality."
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
