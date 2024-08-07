import React, { useEffect, useRef, useState } from "react";
import "../styles/hooks/fadeComponent.scss"; // Make sure this path is correct

const FadeInSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current); // Stop observing after the element is visible
        }
      },
      { threshold: 0.1 } // Adjust as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref.current]);

  return (
    <div ref={ref} className={`fade-in-section ${isVisible && "fade-in"}`}>
      {children}
    </div>
  );
};

export default FadeInSection;
