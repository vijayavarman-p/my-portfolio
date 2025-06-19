'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Header(){

      useEffect(() => {
    AOS.init({
  duration: 800,     // Not too fast, not too slow
  offset: 120,       // Delay trigger slightly after entering viewport
  once: true,        // Animates only once (cleaner feel)
  easing: 'ease-in-out'
});
  }, []);

    const downloadResume = () => {
  const link = document.createElement('a');
  link.href = '/VIJAYAVARMAN_P_RESUME.pdf'; // Make sure this file is in the `public/` folder
  link.download = 'Vijayavarman_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

    return (
        <header id='header' className="bg-gray-800 text-white  flex  items-center px-2 py-2 m-0">
        
        <button class="portfolio-button group relative cursor-pointer bg-transparent p-0 border-none">
  <span class="actual-text text-transparent uppercase text-[2em] font-sans stroke-text drop-shadow-md">
    &nbsp;Portfolio&nbsp;
  </span>
  <span
    aria-hidden="true"
    class="hover-text pointer-events-none absolute inset-0 w-0 overflow-hidden border-r-[6px] border-indigo-500 text-[2em] uppercase text-indigo-500 text-shadow-indigo-800 transition-all duration-500 group-hover:w-full font-sans stroke-text drop-shadow-[0_4px_6px_rgba(99,102,241,0.5)]"
  >
    &nbsp;Portfolio&nbsp;
  </span>
</button>


        <nav className="mt-2 flex justify-center w-full">
            <div class="flex w-[600px] h-[40px] items-center justify-around rounded-[10px] bg-[#004990] shadow-[0_5px_15px_rgba(0,0,0,0.35),5px_10px_15px_rgba(0,73,144,0.5)] transition-all duration-500 ">
            <button class="w-20 h-10 flex items-center justify-center rounded-full bg-transparent text-white text-sm font-semibold transition-all duration-300 hover:-translate-y-[3px]">
                <a href="#intro">Home</a>
            </button>
            <button class="w-20 h-10 flex items-center justify-center rounded-full bg-transparent text-white text-sm font-semibold transition-all duration-300 hover:-translate-y-[3px]">
                <a href="#about">About</a>
            </button>
            <button class="w-20 h-10 flex items-center justify-center rounded-full bg-transparent text-white text-sm font-semibold transition-all duration-300 hover:-translate-y-[3px]">
                <a href="#skills">Skills</a>
            </button>
            <button class="w-20 h-10 flex items-center justify-center rounded-full bg-transparent text-white text-sm font-semibold transition-all duration-300 hover:-translate-y-[3px]">
                <a href="#projects">Projects</a>
            </button>
            <button class="w-20 h-10 flex items-center justify-center rounded-full bg-transparent text-white text-sm font-semibold transition-all duration-300 hover:-translate-y-[3px]">
                <a href="#contact">Contacts</a>
            </button>
            </div>

        </nav>

        <div class="flex justify-around items-center mt-4">
            <a href="https://wa.me/919787378840" target="_blank" rel="noopener noreferrer">
                <button class="relative w-[6.2em] h-[2.2em] text-[17px] rounded-[0.8em] border-indigo-400  bg-indigo-800 transition-all duration-500 hover:bg-[#25D366] group overflow-hidden mx-2">
            <p class="absolute top-[0.4em] left-[1.15em] m-0 p-0 text-white transition-all duration-500 group-hover:left-[0.5em] group-hover:text-white">
                Text me
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                viewBox="0 0 16 16"
                class="absolute top-[0.45em] right-[0.5em] m-0 p-0 opacity-0 transition-opacity duration-500 fill-white group-hover:opacity-100"
            >
                <path
                d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z">
                </path>
            </svg>
            </button >
            </a>

            
            
    
  <div className="flex justify-center items-center font-sans" onClick={downloadResume}>
  <label className="relative flex items-center w-40 cursor-pointer border-2 border-indigo-500 bg-transparent rounded-full p-1 transition-all duration-400 group overflow-hidden">
    <input type="checkbox" className="hidden peer" />

    <span className="relative flex justify-center items-center h-11 w-11 rounded-full bg-indigo-500 transition-all duration-400 peer-checked:rotate-180 peer-checked:animate-[pulse_1s_forwards,circleDelete_0.2s_ease_3.5s_forwards]">
      <svg className="absolute top-1/2 left-1/2 w-7 text-white -translate-x-1/2 -translate-y-1/2 transition-all duration-400 opacity-100 peer-checked:opacity-0 peer-checked:invisible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19V5m0 14-4-4m4 4 4-4" />
      </svg>
      <div className="absolute w-4 aspect-square bg-white rounded-sm opacity-0 invisible peer-checked:opacity-100 peer-checked:visible top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-400"></div>
      <div className="absolute left-0 top-0 w-full h-0 bg-indigo-800 peer-checked:animate-[installing_3s_ease-in-out_forwards]"></div>
    </span>

    <div className="absolute inset-0 m-auto w-2 h-2 bg-white rounded-full opacity-0 invisible transition-all duration-400 peer-checked:animate-[rotate_3s_ease-in-out_0.4s_forwards]"></div>

    <p className="absolute bottom-3.5 right-4.5 text-white text-[17px] transition-all duration-400 opacity-100 peer-checked:opacity-0 peer-checked:invisible">Resume</p>
    <p className="absolute bottom-3.5 right-4.5 text-white text-[17px] opacity-0 invisible peer-checked:animate-[showInstalledMessage_0.4s_ease_3.5s_forwards]">Open</p>
  </label>
</div>




            
        </div>
        
        </header>
    );
}