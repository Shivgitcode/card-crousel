import { useState } from "react";
import "./App.css";
import { images } from "./assets";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { useEffect } from "react";

function App() {
  const [index, setIndex] = useState(0);

  // function clickHandler() {
  //   if (index > images.length - 1) {
  //     setIndex(0);
  //   } else if (index < 0) {
  //     setIndex(images.length - 1);
  //   }
  // }

  // useEffect(clickHandler);

  setTimeout(() => {
    if (index === images.length - 1) {
      return setIndex(0);
    } else {
      return setIndex(index + 1);
    }
  }, 2000);

  function increaseHandler() {
    setIndex((prevIndx) => {
      if (index === images.length - 1) {
        return 0;
      }
      return prevIndx + 1;
    });
  }
  function decreaseHandler() {
    setIndex((prevIndx) => {
      if (index === 0) {
        return images.length - 1;
      }
      return prevIndx - 1;
    });
  }

  return (
    <div className="flex-col overflow-hidden">
      <div className="flex it w-[60%] mx-auto h-full border-[5px] border-black ">
        {images.map((el) => {
          return (
            <img
              key={el}
              src={el}
              alt=""
              style={{ translate: `${index * -100}%` }}
              className="transition-all duration-1000 ease-in flex-grow-0 flex-shrink-0"
            />
          );
        })}
      </div>

      {/* <img src={images[index]} alt="" /> */}
      <div className="flex flex-row justify-center items-center gap-4">
        <button
          className=" px-4 py-1 border bg-white/70"
          onClick={decreaseHandler}
        >
          <FaArrowAltCircleLeft fontSize="50px" />
        </button>
        <button
          className="px-4 py-1 border bg-white/70"
          onClick={increaseHandler}
        >
          <FaArrowAltCircleRight fontSize="50px" />
        </button>
      </div>
    </div>
  );
}

export default App;
