import { RiArrowRightLongLine, RiArrowRightUpLongLine } from "@remixicon/react";
import { useState, useRef, useId, useEffect } from "react";

const Slide = ({ slide, index, current, handleSlideClick }) => {
  const slideRef = useRef(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      slideRef.current.style.setProperty("--x", `${xRef.current}px`);
      slideRef.current.style.setProperty("--y", `${yRef.current}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + r.width / 2);
    yRef.current = event.clientY - (r.top + r.height / 2);
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (e) => (e.currentTarget.style.opacity = "1");

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10 cursor-pointer"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index ? "scale(0.98) rotateX(8deg)" : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        {/* IMAGE CLIQUABLE → REDIRECTION */}
        <a
          href={slide.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[1%] block"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          <img
            className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
            style={{ opacity: current === index ? 1 : 0.5 }}
            alt={slide.title}
            src={slide.src}
            onLoad={imageLoaded}
            loading="eager"
          />
          {current === index && (
            <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
          )}
        </a>

        {/* TEXTE + BOUTON */}
        <article
          className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold">
            {slide.title}
          </h2>

          <p className="bg-white/80 text-black p-3 mt-2 rounded-lg">{slide.text}</p>

          <div className="flex justify-center">
            <a
              href={slide.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 px-3 py-1.5 w-fit mx-auto text-black bg-white hover:bg-white/80 h-12 border text-xs flex justify-center items-center rounded-2xl hover:shadow-lg transition duration-200 shadow"
            >
              <RiArrowRightUpLongLine size={22}/>
            </a>
          </div>
        </article>
      </li>
    </div>
  );
};

const CarouselControl = ({ type, title, handleClick }) => (
  <button
    className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 rounded-full hover:-translate-y-0.5 active:translate-y-0.5 transition ${
      type === "previous" ? "rotate-180" : ""
    }`}
    title={title}
    onClick={handleClick}
  >
    <RiArrowRightLongLine />
  </button>
);

export function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () =>
    setCurrent(current - 1 < 0 ? slides.length - 1 : current - 1);

  const handleNextClick = () =>
    setCurrent(current + 1 === slides.length ? 0 : current + 1);

  const handleSlideClick = (index) => current !== index && setCurrent(index);

  const id = useId();

  return (
    <div className="relative w-[70vmin] h-[70vmin] mx-auto" aria-labelledby={`carousel-${id}`}>
      <ul
        className="absolute flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * (100 / slides.length)}%)` }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="absolute w-full flex justify-center top-[calc(100%+1rem)]">
        <CarouselControl type="previous" title="Previous" handleClick={handlePreviousClick}/>
        <CarouselControl type="next" title="Next" handleClick={handleNextClick}/>
      </div>
    </div>
  );
}
