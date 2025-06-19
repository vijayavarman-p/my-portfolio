'use client';

import { Marquee } from "@/components/magicui/marquee";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Achievements(){
    useEffect(() => {
        AOS.init({
  duration: 800,     // Not too fast, not too slow
  offset: 120,       // Delay trigger slightly after entering viewport
  once: true,        // Animates only once (cleaner feel)
  easing: 'ease-in-out'
});
      }, []);
    return(
         <div id="achievements" data-aos="fade-up"> 
                    <section className="bg-gray-900 text-white py-16 px-4 md:px-20">
                        <h2 className="text-4xl font-bold mb-12 text-center">My Achievements</h2>
                        <div className="flex justify-evenly items-center gap-10 mb-12">
                            <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSws6T0qCoxrI9BQ0FGj4SWbdfHg67zkLBEuA&s')] relative w-[210px] h-[265px] p-7 rounded-[20px] border-2 border-[#c3c6ce] bg-[#f5f5f5] overflow-visible transition duration-500 ease-out hover:border-[#008bf8] hover:shadow-lg group">
                                <div className="text-black h-full grid place-content-center gap-2">
                                    {/* <p className="text-[1.5em] font-bold bg-gray-400">Certifications</p>
                                    <p className="text-gray-500">React Developer</p> */}
                                </div>
                                <button
                                    className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[125%] opacity-0 w-[60%] rounded-xl bg-[#008bf8] text-white text-base py-2 px-4 transition-all duration-300 ease-out group-hover:translate-y-[50%] group-hover:opacity-100"
                                >
                                    More info
                                </button>
                            </div>
        
                            <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSws6T0qCoxrI9BQ0FGj4SWbdfHg67zkLBEuA&s')] relative w-[210px] h-[265px] p-7 rounded-[20px] border-2 border-[#c3c6ce] bg-[#f5f5f5] overflow-visible transition duration-500 ease-out hover:border-[#008bf8] hover:shadow-lg group">
                                <div className="text-black h-full grid place-content-center gap-2">
                                    {/* <p className="text-[1.5em] font-bold">Card title</p>
                                    <p className="text-gray-500">React Developer</p> */}
                                </div>
                                <button
                                    className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[125%] opacity-0 w-[60%] rounded-xl bg-[#008bf8] text-white text-base py-2 px-4 transition-all duration-300 ease-out group-hover:translate-y-[50%] group-hover:opacity-100"
                                >
                                    More info
                                </button>
                            </div>
                            
                            <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGJ1Wd2YKIR2N6nySDJH1jgq7cZqL5bMYIG3cKaci1tHuW3mlLwGDdUu8aJmtylOZ20y4&usqp=CAU')] relative w-[210px] h-[265px] p-7 rounded-[20px] border-2 border-[#c3c6ce] bg-[#f5f5f5] overflow-visible transition duration-500 ease-out hover:border-[#008bf8] hover:shadow-lg group">
                                <div className="text-black h-full grid place-content-center gap-2">
                                    {/* <p className="text-[1.5em] font-bold">Card title</p>
                                    <p className="text-gray-500">Here are the details of the card</p> */}
                                </div>
                                <button
                                    className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[125%] opacity-0 w-[60%] rounded-xl bg-[#008bf8] text-white text-base py-2 px-4 transition-all duration-300 ease-out group-hover:translate-y-[50%] group-hover:opacity-100"
                                >
                                    More info
                                </button>
                            </div>
        
                            <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKmKjON5D-clE8kmbChM4X6VNnP42SCpp2ZiWqQMBiuv_d6tUo4mMGxi_miirpRSU4TZs&usqp=CAU')] relative w-[210px] h-[265px] p-7 rounded-[20px] border-2 border-[#c3c6ce] bg-[#f5f5f5] overflow-visible transition duration-500 ease-out hover:border-[#008bf8] hover:shadow-lg group">
                                <div className="text-black h-full grid place-content-center gap-2">
                                    {/* <p className="text-[1.5em] font-bold">Card title</p>
                                    <p className="text-gray-500">Here are the details of the card</p> */}
                                </div>
                                <button
                                    className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[125%] opacity-0 w-[60%] rounded-xl bg-[#008bf8] text-white text-base py-2 px-4 transition-all duration-300 ease-out group-hover:translate-y-[50%] group-hover:opacity-100"
                                >
                                    More info
                                </button>
                            </div>
                        </div>
                        <div className="">
        
                            <Marquee>
                                {/* Achievement Card 1 */}
                                {/* 🏆 Coding Competition Winner */}
                                <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-xl font-semibold mb-2">🏆 Coding Competition Winner</h3>
                                <p className="text-gray-400 mb-4">Organized by CodeFest 2025</p>
                                <p className="text-gray-300">Secured 1st place in an intercollege coding contest by solving algorithmic challenges.</p>
                                </div>

                                {/* 🐞 Debugging Champion */}
                                <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-xl font-semibold mb-2">🐞 Debugging Champion</h3>
                                <p className="text-gray-400 mb-4">Event at TechSprint</p>
                                <p className="text-gray-300">Won first prize in a competitive debugging challenge by identifying and fixing complex code errors.</p>
                                </div>

                                {/* 💡 Hackathon Finalist */}
                                <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-xl font-semibold mb-2">💡 Hackathon Finalist</h3>
                                <p className="text-gray-400 mb-4">0XDay Hackathon</p>
                                <p className="text-gray-300">Reached the final round of a national-level hackathon with a project on smart investing tools.</p>
                                </div>

                                {/* 🎨 Web Design Contest */}
                                <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-xl font-semibold mb-2">🎨 First Prize - Web Design Contest</h3>
                                <p className="text-gray-400 mb-4">Conducted by RMK Tech Club</p>
                                <p className="text-gray-300">Awarded 1st prize for creating a responsive and visually engaging sustainable development web template.</p>
                                </div>

                                {/* ☁️ Cloud Computing Award */}
                                <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-xl font-semibold mb-2">☁️ Cloud Computing Excellence Award</h3>
                                <p className="text-gray-400 mb-4">Google Cloud Study Jam</p>
                                <p className="text-gray-300">Recognized for outstanding performance in Google Cloud Platform tasks and hands-on labs.</p>
                                </div>

                                {/* 🤖 Best Project - Face Detection */}
                                <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-xl font-semibold mb-2">🤖 Best Project - Face Detection Attendance System</h3>
                                <p className="text-gray-400 mb-4">Presented at Project Expo 2025</p>
                                <p className="text-gray-300">Honored for building an innovative AI-based attendance system using Python and computer vision.</p>
                                </div>


        
                            </Marquee>
        
                            
                        </div>
                    </section>
        
        </div>
    )
}