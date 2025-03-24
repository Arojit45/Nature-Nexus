import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const impact1 =
  "https://assets.telegraphindia.com/telegraph/2023/Apr/1681728047_tiger.jpg";
const impact2 ="https://www.budgetdumpster.com/images/river-cleanup-clean-479x300.jpg";
const impact3 = "https://www.green.earth/hs-fs/hubfs/080824_Reforestation-projects-around-the-world-success-stories-and-lessons-learnedVisual-8.png?width=1200&height=800&name=080824_Reforestation-projects-around-the-world-success-stories-and-lessons-learnedVisual-8.png";
const impact4 = "https://cdn.shopify.com/s/files/1/1317/9597/files/Cebu_flowerpecker_Dicaeum_quadricolor_480x480.jpg?v=1623745246";
const impact5 =
  "https://mena.iom.int/sites/g/files/tmzbdl686/files/styles/large/public/press_release/media/20210305-8H1A9250.jpg?itok=KpjxieNW";

gsap.registerPlugin(ScrollTrigger);

const SixthPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const redSectionsRef = useRef([]);
  const titleRefs = useRef([]);
  const descRefs = useRef([]);
  const imageContainerRef = useRef();

  const images = [
    { src: impact1, alt: "Work Image 1" },
    { src: impact2, alt: "Work Image 2" },
    { src: impact3, alt: "Work Image 3" },
    { src: impact4, alt: "Work Image 4" },
    { src:impact5, alt: "Work Image 5" },
  ];

  const redSectionContent = [
    {
      title: "Tiger Conservation in Sundarbans",
      description:
        "Efforts to protect the Royal Bengal Tiger have led to an encouraging rise in their population. Through increased patrolling, habitat restoration, and local community awareness, the Sundarbans has seen a notable return of these majestic big cats, symbolizing hope for future conservation efforts.",
    },
    {
      title: "River Clean-Up Drive Results",
      description:
        "In a remarkable community effort, over 5 tons of plastic and industrial waste were removed from the riverbanks. This not only revived aquatic biodiversity but also restored access to clean water for nearby villages. The campaign marked a major step toward river ecosystem rejuvenation.",
    },
    {
      title: "Reforestation Success Story",
      description:
        "In just one week, over 20,000 native trees were planted across degraded lands with the help of local volunteers, students, and forest officials. The drive helped reduce soil erosion, improve carbon capture, and restore the natural habitat for wildlife in the area.",
    },
    {
      title: "Rare Bird Species Spotted",
      description:
        "After nearly a decade, the endangered Siberian Crane was seen in the protected wetlands. This sighting highlights the effectiveness of ongoing wetland preservation and seasonal migration support initiatives, bringing hope for the return of more rare species.",
    },
    {
      title: "Community Water Project Launched",
      description:
        "A solar-powered filtration system has been successfully installed, providing clean and safe drinking water to over 1,000 residents. This sustainable solution reduces waterborne diseases and empowers the community with access to a vital resource while promoting renewable energy use.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      redSectionsRef.current.forEach((section, i) => {
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 60 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top center+=0",
              end: "bottom center -=20",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Animate h1 and p separately
        if (titleRefs.current[i]) {
          gsap.fromTo(
            titleRefs.current[i],
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top center+=120",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        if (descRefs.current[i]) {
          gsap.fromTo(
            descRefs.current[i],
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              delay: 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top center+=80",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      redSectionsRef.current.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setCurrentImageIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full gap-2 flex p-5 flex-col justify-center bg-[#F2F1F6]">
      <div className="flex justify-center items-center py-6">
        <h1 className="text-black text-6xl font-semibold">Our Impact</h1>
      </div>

      <div className="p-5 flex flex-col md:flex-row justify-between items-start gap-3 min-h-fit lg:min-h-[2050px]">
        {/* Left Section with content */}
        <div className="w-full md:w-1/2 border-l-2 border-dashed ml-0 md:ml-5 border-slate-900 space-y-10">
          {redSectionContent.map((item, i) => (
            <div
              key={i}
              ref={(el) => (redSectionsRef.current[i] = el)}
              className="h-[400px] rounded-xl flex flex-col justify-center relative text-white p-6 space-y-4 
  opacity-100 xl:opacity-0"
            >
              <h1
                ref={(el) => (titleRefs.current[i] = el)}
                className="text-3xl text-nowrap text-black left-1 font-bold opacity-0"
              >
                {item.title}
              </h1>
              <p
                ref={(el) => (descRefs.current[i] = el)}
                className="text-lg text-justify text-slate-900 opacity-0"
              >
                {item.description}
              </p>
              <div className="circle w-[25px] absolute -top-[25px] h-[25px] -left-[13px] rounded-full bg-slate-700"></div>
            </div>
          ))}
        </div>

        {/* Right Sticky Image Section — Hidden on small & large, visible on xl+ */}
        <div className="hidden sm:block w-[600px]    xl:block  max-w-[600px] mx-auto h-[2100px] px-4">
          <div
            className="w-full sticky top-[24rem] h-[300px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-xl"
            ref={imageContainerRef}
          >
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-100"
              key={currentImageIndex}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthPage;
