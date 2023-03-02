import { useEffect, useRef } from "react";
import Flickity from "flickity";
import "flickity/dist/flickity.min.css";
import imagem1 from "../assets/ofspace-digital-agency-iprE_0Fkg5g-unsplash.jpg";
import imagem2 from "../assets/carl-heyerdahl-KE0nC8-58MQ-unsplash.jpg";
import imagem3 from "../assets/georgie-cobbs-bKjHgo_Lbpo-unsplash.jpg";

const Hero = () => {
  const flickityRef = useRef(null);

  useEffect(() => {
    // Initialize Flickity carousel
    if (flickityRef.current) {
      const flickity = new Flickity(flickityRef.current, {
        // Add Flickity options here
        wrapAround: true,
        autoPlay: true,
      });
      return () => {
        // Destroy Flickity carousel on unmount
        flickity.destroy();
      };
    }
  }, []);

  return (
    <div className="hero">
      <div className="carousel" ref={flickityRef}>
        <div className="carousel-cell">
          <img src={imagem1} alt="slide 1" />
        </div>
        <div className="carousel-cell">
          <img src={imagem2} alt="slide 2" />
        </div>
        <div className="carousel-cell">
          <img src={imagem3} alt="slide 3" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
