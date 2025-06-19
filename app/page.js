import Image from "next/image";
import { FaEnvelope } from 'react-icons/fa';
import Header from "./component/Header";
import Intro from "./component/Intro";
import About from "./component/About";
import Projects from "./component/Projects";
import Experience from "./component/Experiance";
import Skills from "./component/Skills";
import Certification from "./component/Certifications";
import Achievements from "./component/Achievements";
import Contact from "./component/Contact";
export default function Home() {
  return (
    <div>
      <Header/> 
      <Intro />
      <About/>
      <Skills/>
      <Experience />
      <Projects />
      <Achievements />
      <Certification/>
      <Contact/>
      <a
        href="#contact"
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-50"
      >
        <FaEnvelope />
      </a>
    </div>
  );
}
