import React, { useState, useRef, useEffect } from "react";

const Carousel = () => {
  const images = [
    {
      src: "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
      alt: "Image 1 description",
    },
    {
      src: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
      alt: "Image 2 description",
    },
    {
      src: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      alt: "Image 3 description",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= images.length) {
        return 0;
      }
      return nextIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      if (nextIndex < 0) {
        return images.length - 1;
      }
      return nextIndex;
    });
  };

  const handleTouchStart = (event) => {
    const startX = event.touches[0].clientX;
    carouselRef.current.addEventListener("touchmove", handleTouchMove, {
      passive: true,
    });
    carouselRef.current.addEventListener("touchend", handleTouchEnd);

    function handleTouchMove(event) {
      const diffX = event.touches[0].clientX - startX;
      if (Math.abs(diffX) > 30) {
        if (diffX > 0) {
          handlePrev();
        } else {
          handleNext();
        }
        carouselRef.current.removeEventListener("touchmove", handleTouchMove);
        carouselRef.current.removeEventListener("touchend", handleTouchEnd);
      }
    }

    function handleTouchEnd() {
      carouselRef.current.removeEventListener("touchmove", handleTouchMove);
      carouselRef.current.removeEventListener("touchend", handleTouchEnd);
    }
  };

  return (
    <div
      className="carousel relative overflow-hidden rounded-lg shadow-md"
      onTouchStart={handleTouchStart}
    >
      <div
        ref={carouselRef}
        className="carousel-inner flex transition duration-700 ease-in-out"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item h-full w-full flex items-center justify-center ${
              index === currentIndex ? "block" : "hidden"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover h-full w-full"
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="carousel-control-prev focus:outline-none absolute left-0 top-0 bottom-0 flex items-center justify-center px-4 opacity-50 hover:opacity-100 transition duration-300 ease-in-out"
        onClick={handlePrev}
      >
        <svg
          className="h-6 w-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 8L8.5 12.5L15 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        type="button"
        className="carousel-control-next focus:outline-none absolute right-0 top-0 bottom-0 flex items-center justify-center px-4 opacity-50 hover:opacity-100 transition duration-300 ease-in-out"
        onClick={handleNext}
      >
        <svg
          className="h-6 w-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 8L15.5 12.5L9 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
