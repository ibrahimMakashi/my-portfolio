import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

const TiltCard = ({ image, children }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
        scale: 1.05,
        "full-page-listening": false,
        gyroscope: true,
        perspective: 1000,
      });
    }

    return () => {
      if (tiltRef.current && tiltRef.current.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={tiltRef}
      className="tilt-card"
      style={{
       
      }}
    
    >
      <img
        src={image}
        alt="tilt"
        data-tilt-parallax
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "translateZ(30px)",
        }}
      />
      <div
        className="overlay-content"
        style={{
          position: "absolute",
          bottom: 0,
          background: "rgba(0, 0, 0, 0.84)",
          color: "#fff",
          width: "100%",
          padding: "1rem",
        }}
        data-tilt-parallax
      >
        {children}
      </div>
    </div>
  );
};

export default TiltCard;
