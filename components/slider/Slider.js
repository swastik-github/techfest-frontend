import React, { useState, useEffect, useCallback, useRef } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeAutoplay, setActiveAutoplay] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoplayRef = useRef();
  const imglinks = [
    "/images/people.jpeg",
    "/images/car.jpeg",
    "/images/robot.jpeg",
  ];
  /*--------------------
  SETTINGS
  --------------------*/
  const settings = {
    maxItems: 3,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  /*--------------------
  METODI
  --------------------*/
  /* Go To */
  const goTo = useCallback(
    (index) => {
      if (!isAnimating) {
        setCurrentIndex(index);
        setIsAnimating(true);

        setTimeout(() => {
          setIsAnimating(false);
        }, settings.speed);
      }
    },
    [isAnimating, currentIndex]
  );

  /* Go Next */
  const goNext = () => {
    goTo(currentIndex >= settings.maxItems - 1 ? 0 : currentIndex + 1);
  };

  /* Go Prev */
  const goPrev = () => {
    goTo(currentIndex <= 0 ? settings.maxItems - 1 : currentIndex - 1);
  };

  /* Play Timer */
  const playTimer = () => {
    setActiveAutoplay(true);
  };

  /* Pause Timer */
  const pauseTimer = () => {
    setActiveAutoplay(false);
  };

  /*--------------------
  HOOKS
  --------------------*/
  useEffect(() => {
    if (settings.autoplay && activeAutoplay) {
      clearTimeout(autoplayRef.current);
      autoplayRef.current = setTimeout(() => {
        goNext();
      }, settings.autoplaySpeed);
    }
  }, [currentIndex, activeAutoplay, isAnimating]);

  /*--------------------
  COMPONENTI
  --------------------*/
  /* Next Btn */
  const nextBtn = () => {
    return (
      <button
        className="next"
        onMouseEnter={pauseTimer}
        onMouseLeave={playTimer}
        onClick={() => goNext()}
      >
        <img src={"/images/chevron.png"} className="nextbtn" alt="" />
      </button>
    );
  };

  /* Prev Btn */
  const prevBtn = () => {
    return (
      <button
        className="prev"
        onMouseEnter={pauseTimer}
        onMouseLeave={playTimer}
        onClick={() => goPrev()}
      >
        <img src={"/images/left-chevron.png"} className="prevbtn" alt="" />
      </button>
    );
  };

  /* Slide */
  const slide = (index) => {
    return (
      <div className="slide">
        <img src={imglinks[index]} className="slider_image"></img>
      </div>
    );
  };

  /*--------------------
  RENDERING
  --------------------*/
  return (
    <div className="slider">
      {prevBtn()}
      {slide(currentIndex)}
      {nextBtn()}
    </div>
  );
};

export default Slider;
