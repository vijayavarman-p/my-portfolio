"use client"; // if you're using this in `app/` directory
import { useEffect } from "react";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function About() {
  // Initialize AOS (Animate On Scroll) library
    useEffect(() => {
            AOS.init({
  duration: 800,     // Not too fast, not too slow
  offset: 120,       // Delay trigger slightly after entering viewport
  once: true,        // Animates only once (cleaner feel)
  easing: 'ease-in-out'
});
          }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-in");
        }
      });
    });

    const elements = document.querySelectorAll(".slide-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div id="about" data-aos="fade-right" className="relative w-full px-6 md:px-20 py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Section Title */}
      <section className="">
    <button className="group relative cursor-pointer border-none bg-transparent p-0">
      <span className="actual-text text-transparent uppercase text-[2.5em] tracking-wide font-semibold stroke-text">
        &nbsp;Portfolio&nbsp;
      </span>
      <span
        aria-hidden="true"
        className="hover-text pointer-events-none absolute inset-0 w-0 overflow-hidden border-r-[6px] border-indigo-500 text-[2.5em] uppercase text-indigo-500 text-shadow-md transition-all duration-500 group-hover:w-full font-bold stroke-text"
      >
        &nbsp;Portfolio&nbsp;
      </span>
    </button>
    <hr className="mt-10 mb-10 border-indigo-500  mx-auto" />
  </section>

      {/* About Section */}
      <section className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 slide-on-scroll opacity-0 translate-y-10 transition-all duration-700">
        {/* Profile Card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl overflow-hidden w-[300px] h-[380px] hover:scale-105 hover:rotate-1 transition-transform duration-500">
          {/* <div className="relative w-full h-64 rounded-3xl overflow-hidden"> */}
            <Image
              src="/about-pic.jpg"
              alt="profile_pic"
              width={300}
              height={380}
              className="w-full h-full object-cover rounded-3xl"
            />
          {/* </div> */}
        </div>

        <div className="hidden lg:block w-[2px] h-[300px] bg-indigo-500"></div>

        {/* About Text */}
        <div className="max-w-2xl">
          <h1 className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent mb-6 animate-pulse">
            About Me ✨
          </h1>
          <p className="text-lg leading-relaxed text-gray-300 mb-4">
            Hello! I&apos;m <span className="text-indigo-400 font-medium">Vijayavarman</span>, a passionate and detail-oriented Computer Science student with hands-on experience in web development and project-based learning. I enjoy turning ideas into interactive digital experiences.
          </p>
          <p className="text-lg leading-relaxed text-gray-300 mb-4">
            Skilled in <span className="text-yellow-300">HTML</span>, <span className="text-green-300">CSS</span>, <span className="text-pink-300">JavaScript</span>, and <span className="text-red-300">Java</span>, with a strong interest in building real-world applications.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            Currently expanding my knowledge in <span className="text-blue-300">backend technologies</span> and <span className="text-purple-300">cloud computing</span>.
          </p>
        </div>
      </section>

      {/* Floating Emoji */}
      <div className="absolute bottom-10 right-10 animate-bounce text-indigo-400 text-3xl">
        🚀
      </div>

      {/* Slide-In CSS */}
      <style jsx>{`
        .animate-slide-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}
