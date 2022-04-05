import React, { useState, useEffect, useCallback, useRef } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeAutoplay, setActiveAutoplay] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoplayRef = useRef();
  const imglinks = [
    "/images/coding.jpg",
    "/images/dancing.jpg",
    "/images/playing.jpg",
  ];

  const settings = {
    maxItems: 3,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
  };

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

  useEffect(() => {
    if (settings.autoplay && activeAutoplay) {
      clearTimeout(autoplayRef.current);
      autoplayRef.current = setTimeout(() => {
        goNext();
      }, settings.autoplaySpeed);
    }
  }, [currentIndex, activeAutoplay, isAnimating]);

  /* Next Btn */
  const nextBtn = () => {
    return (
      <button
        className="about_next"
        onMouseEnter={pauseTimer}
        onMouseLeave={playTimer}
        onClick={() => goNext()}
      >
        <img src={"/images/chevron.png"} className="about_nextbtn" alt="" />
      </button>
    );
  };

  /* Prev Btn */
  const prevBtn = () => {
    return (
      <button
        className="about_prev"
        onMouseEnter={pauseTimer}
        onMouseLeave={playTimer}
        onClick={() => goPrev()}
      >
        <img
          src={"/images/left-chevron.png"}
          className="about_prevbtn"
          alt=""
        />
      </button>
    );
  };

  /* Slide */
  const slide = (index) => {
    return (
      <div className="about_slide">
        <img src={imglinks[index]} className="about_slider_image"></img>
      </div>
    );
  };

  return (
    <div className="about_slider">
      {prevBtn()}
      {slide(currentIndex)}
      {nextBtn()}
      {/* {dots()} */}
      {/* {pagination(currentIndex)} */}
    </div>
  );
};

export default Slider;
