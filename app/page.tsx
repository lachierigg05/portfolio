"use client";

import { useEffect } from "react";
import "./page.css";

export default function Main() {
  useEffect(() => {
    const typeSpeed = 80;
    let timeoutId: number | NodeJS.Timeout;

    function type(id: string, text: string, callback?: () => void) {
      let i = 0;
      const typedElement = document.getElementById(id);
      if (typedElement) {
        typedElement.innerHTML = ""; // Ensure the element is empty
        const typeChar = () => {
          if (i < text.length) {
            typedElement.innerHTML += text.charAt(i);
            i++;
            timeoutId = setTimeout(typeChar, typeSpeed);
          } else if (callback) {
            callback();
          }
        };
        typeChar();
      }
    }

    type("name", "Lachie Rigg", () => {
      type("desc", "Full-Stack Developer");
    });

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center mb-16">
      <div id="name" className="text-8xl text-white custom-font"></div>
      <div id="desc" className="text-2xl text-white font-bold"></div>
    </div>
  );
}
