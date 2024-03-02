import { useRef, useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Carousel = ({
  shoes,
  titulo,
  clase,
  contenedor,
  ocultar,
  alto,
  botones,
}) => {
  const scrollRef = useRef(null);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
      setDisablePrev(false);
    }
  };

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft - scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;

    const checkScroll = () => {
      if (!scrollElement) return;
      setDisableNext(
        scrollElement.scrollLeft + scrollElement.offsetWidth >=
          scrollElement.scrollWidth
      );
      setDisablePrev(scrollElement.scrollLeft === 0);
    };

    checkScroll();
    scrollElement.addEventListener("scroll", checkScroll);

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  const items = shoes.map((shoe) => (
    <li
      key={shoe.id}
      className={`cursor-pointer w-[150px] lg:w-48 lg:h-full flex-shrink-0 flex flex-col items-center border border-[#E4EBED] rounded ${alto} mx-auto`}
    >
      <div
        className={`bg-[#F6F6F6] w-full flex justify-center items-center ${contenedor}`}
      >
        <img
          className="w-full lg:w-44 h-full lg:h-32 lg:object-cover"
          src={shoe.img}
          alt=""
        />
      </div>
      <p className={`text-center m-auto mx-2 my-1 ${clase}`}>{shoe.name}</p>
    </li>
  ));

  return (
    <div className="flex justify-center">
      <div
        className={`relative w-full mx-6 2xl:mx-0 ${ocultar} overflow-x-hidden`}
      >
        <h4 className="text-2xl font-semibold mb-4">{titulo}</h4>
        {!disablePrev && (
          <button
            onClick={handlePrev}
            className={`absolute top-1/2 left-6 z-10 bg-white p-3 rounded-full text-lg ${botones}`}
          >
            <IoIosArrowBack />
          </button>
        )}
        <div
          ref={scrollRef}
          className="overflow-x-scroll hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <ul className="flex gap-4 mb-10">{items}</ul>
        </div>
        {!disableNext && (
          <button
            onClick={handleNext}
            className={`absolute top-1/2 right-6 z-10 bg-white p-3 rounded-full  text-lg ${botones}`}
          >
            <IoIosArrowForward />
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
