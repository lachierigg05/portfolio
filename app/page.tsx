"use client";

import { useState, useEffect } from "react";
import TypingEffect from "./Components/Animations/TypingEffect";
import { Meteors } from "./Components/Animations/MeteorEffect";
import "./page.css";

export default function Main() {
  const [showDesc, setShowDesc] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showMeteors, setShowMeteors] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDesc(true);
    }, 500);

    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 1000);

    const meteorTimer = setTimeout(() => {
      setShowMeteors(true);
    }, 1100)

       return () => {
      clearTimeout(timer);
      clearTimeout(buttonTimer);
      clearTimeout(meteorTimer);
    };
  });

  return (
      <div className="h-screen flex flex-col justify-center items-center relative z-10">
        {showMeteors && <Meteors number={15} />}
        <div className="bg-neutral-900 flex justify-center flex-col items-center text-center w-[100%] h-[100%] bg-white border border-neutral-800 shadow-d shadow-white">
          <div className="font-popsies text-8xl text-orange-100 fade-in">
            Lachie Rigg
          </div>
          {!showDesc && <div className="mt-[68px] mb-[64px]"></div>}
          {showDesc && (
            <TypingEffect
              id="desc"
              text="Full-Stack Web Developer"
              className="font-roboto text-xl mt-10 mb-16 text-orange-100"
            />
          )}
          <button
            type="button"
            className={`font-roboto text-gray-900 hover:text-white border border-gray-800 hover:bg-neutral-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:border-gray-600 dark:text-orange-100 ${showButton ? 'fade-in' : 'invisible'}`}
          >
            Click Here To See My Work!
          </button>
        </div>
      </div>
  );
}
