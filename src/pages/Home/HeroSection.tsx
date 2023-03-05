import { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

import image1 from "../../assets/carl-heyerdahl-KE0nC8-58MQ-unsplash.jpg";
import image2 from "../../assets/georgie-cobbs-bKjHgo_Lbpo-unsplash.jpg";
import image3 from "../../assets/ofspace-digital-agency-iprE_0Fkg5g-unsplash.jpg";

const Wrapper = styled.div`
  width: 100%;
  height: 35vw;
  overflow-x: hidden;
  position: relative;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [{ image: image1 }, { image: image2 }, { image: image3 }];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex: number) => (prevIndex + 1) % items.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [items]);

  const currentItem = items[currentIndex];

  return (
    <Wrapper>
    <TransitionGroup>
      <CSSTransition key={currentIndex} timeout={500} classNames="slide">
        <img src={currentItem.image} alt="Image1" />
      </CSSTransition>
    </TransitionGroup>
  </Wrapper>
  );
};

export default Hero;
