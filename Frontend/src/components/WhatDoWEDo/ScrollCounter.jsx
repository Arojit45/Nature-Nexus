import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollCounter = ({
  targetValue = 100,
  suffix = "+",
  duration = 3,
  className = "",
}) => {
  const countRef = useRef(null);
  const scrollTriggerRef = useRef(null); // to hold the ScrollTrigger instance

  useEffect(() => {
    const el = countRef.current;
    if (!el) return;

    const counter = { val: 0 };

    const animation = gsap.to(counter, {
      val: targetValue,
      duration: duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
        onEnter: () => {
          // Optional: Reset count if needed
        },
      },
      onUpdate: () => {
        el.textContent = Math.floor(counter.val) + suffix;
      },
    });

    // Save reference to ScrollTrigger so we can kill it
    scrollTriggerRef.current = animation.scrollTrigger;

    return () => {
      // Cleanup
      if (animation) animation.kill();
      if (scrollTriggerRef.current) scrollTriggerRef.current.kill();
    };
  }, [targetValue, suffix, duration]);

  return (
    <h1 ref={countRef} className={className}>
      0{suffix}
    </h1>
  );
};

export default ScrollCounter;
