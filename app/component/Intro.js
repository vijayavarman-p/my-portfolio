"use client";
import { useEffect, useRef } from "react";
import Script from "next/script";
import { WordRotate } from "@/components/magicui/word-rotate";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Intro() {

  useEffect(() => {
    AOS.init({
  duration: 800,     // Not too fast, not too slow
  offset: 120,       // Delay trigger slightly after entering viewport
  once: true,        // Animates only once (cleaner feel)
  easing: 'ease-in-out'
});
  }, []);

  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect;

    const loadVanta = () => {
      if (typeof window !== "undefined" && window.VANTA && !vantaEffect) {
        vantaEffect = window.VANTA.GLOBE({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xffffff,
          backgroundColor: 0x000000,
        });
      }
    };

    if (typeof window !== "undefined" && window.VANTA) {
      loadVanta();
    } else {
      const interval = setInterval(() => {
        if (window.VANTA) {
          clearInterval(interval);
          loadVanta();
        }
      }, 300);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <>
      {/* Load Three.js and Vanta.js from CDN */}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js" />

      {/* Background container */}
      <div
        ref={vantaRef}
        className="w-full h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Text Overlay */}
            <div className="px-4 sm:px-0 mr-150 z-10 " id="intro" data-aos="zoom-in"> 
                <p className="text-2xl sm:text-lg mb-4 shine-text font-poppins tracking-wide">
  Hello Everyone.
</p>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
                    I'M <span className="text-indigo-500 ">VIJAYAVARMAN</span>
                </h1>
                <WordRotate
                    words={[
                    "Front-End Developer",
                    "Full Stack Developer",
                    "Web Developer",
                    "UI Developer",
                    "Junior Software Engineer",
                    ]}
                    className=" mb-4 text-xl sm:text-2xl md:text-3xl font-medium text-indigo-400"
                />
                
                  <a href="#about">
                      <button
                    type="button"
                    className="relative z-10 px-6 py-2 mt-6 flex items-center mr-110 gap-2 mx-auto text-lg text-indigo-100 border-2 border-indigo-500 rounded-full bg-transparent overflow-hidden group shadow-md transition-all backdrop-blur-md"
                    >
                    Explore Me
                    <svg
                        className="w-8 h-8 p-2 border border-indigo-300 rounded-full rotate-45 group-hover:rotate-90 group-hover:bg-indigo-100 group-hover:border-transparent transition-all duration-300 ease-linear"
                        viewBox="0 0 16 19"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                        className="fill-indigo-200 group-hover:fill-indigo-700"
                        />
                    </svg>

                    {/* Hover expanding background */}
                    <span className="absolute -z-10 w-0 h-full bg-indigo-500 left-1/2 top-0 transform -translate-x-1/2 group-hover:w-full transition-all duration-700 rounded-full"></span>
                    </button>
                  </a>


            </div>


        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/30 z-0" />
      </div>
    </>
  );
}
