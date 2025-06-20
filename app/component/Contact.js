'use client';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';


import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Contact() {
     useEffect(() => {
            AOS.init({
  duration: 800,     // Not too fast, not too slow
  offset: 120,       // Delay trigger slightly after entering viewport
  once: true,        // Animates only once (cleaner feel)
  easing: 'ease-in-out'
});
          }, []);
  return (
    <div id='contact' data-aos="fade-up" className="bg-gradient-to-br from-gray-900 to-gray-400">
      <form>
        <section className="text-white py-16 px-4 md:px-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact Me</h2>

          <div className="max-w-md mx-auto bg-gray-600 p-8 rounded-lg shadow-lg">
            <h1 className="text-blue-400 text-3xl font-bold mb-2">Get in Touch</h1>
            <p className="text-white text-sm mb-4">Give me a chance, I&apos;m ready to work.</p>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 mb-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>
            <div className="flex space-x-5 text-xl justify-center mt-6 text-gray-200 ">
                <a href="https://linkedin.com/in/vijay" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/vijay" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                    <FaGithub />
                </a>
                <a href="mailto:vijay@example.com" className="hover:text-blue-400 transition">
                    <FaEnvelope />
                </a>
            </div>
          </div>
        </section>
      </form>

      {/* Footer */}
      <footer className="text-white py-16.5 px-10">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
    <div className="text-lg font-semibold">© 2025 Vijayavarman</div>

    <div className="flex space-x-6 text-sm">
      <a href="#about" className="hover:text-blue-400 transition">About</a>
      <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
      <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
    </div>

    <div className="flex space-x-5 text-xl">
      <a href="https://linkedin.com/in/vijay" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
        <FaLinkedin />
      </a>
      <a href="https://github.com/vijay" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
        <FaGithub />
      </a>
      <a href="mailto:vijay@example.com" className="hover:text-blue-400 transition">
        <FaEnvelope />
      </a>
    </div>
  </div>
</footer>
    </div>
  );
}
