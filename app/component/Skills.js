
'use client';
import Image from "next/image";


import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Skills() {
    useEffect(() => {
        AOS.init({
  duration: 800,     // Not too fast, not too slow
  offset: 120,       // Delay trigger slightly after entering viewport
  once: true,        // Animates only once (cleaner feel)
  easing: 'ease-in-out'
});
      }, []);
    return (
        <div id="skills" data-aos="fade-left" className="bg-gray-900 text-white py-16 px-4 md:px-20">
            <h2 className="text-4xl font-bold mb-12 text-center">My Skills</h2>

            <div className="flex justify-center items-center gap-10 mb-12">
                <div className="relative max-w-[500px] w-full bg-[#ececec] mx-4 p-5 rounded-md">
                    <div className="w-full my-6">
                        <span className="block text-sm font-semibold text-gray-800">HTML</span>
                        <div className="h-2 w-full rounded-md mt-1 bg-black/10">
                        <div className="relative h-full rounded-md bg-blue-600 animate-progress html">
                            <span className="absolute -top-7 -right-3 text-[9px] font-medium text-white bg-blue-600 px-1.5 py-[2px] rounded-sm z-10">
                            50%
                            <span className="absolute left-1/2 -bottom-0.5 w-2.5 h-2.5 bg-blue-600 rotate-45 -z-5 transform -translate-x-1/2"></span>
                            </span>
                        </div>
                        </div>
                    </div>

                    <div className="w-full my-6">
                        <span className="block text-sm font-semibold text-gray-800">CSS</span>
                        <div className="h-2 w-full rounded-md mt-1 bg-black/10">
                        <div className="relative h-full rounded-md bg-blue-600 animate-progress css">
                            <span className="absolute -top-7 -right-3 text-[9px] font-medium text-white bg-blue-600 px-1.5 py-[2px] rounded-sm z-10">
                            70%
                            <span className="absolute left-1/2 -bottom-0.5 w-2.5 h-2.5 bg-blue-600 rotate-45 -z-5 transform -translate-x-1/2"></span>
                            </span>
                        </div>
                        </div>
                    </div>

                    <div className="w-full my-6">
                        <span className="block text-sm font-semibold text-gray-800">JavaScript</span>
                        <div className="h-2 w-full rounded-md mt-1 bg-black/10">
                        <div className="relative h-full rounded-md bg-blue-600 animate-progress javascript">
                            <span className="absolute -top-7 -right-3 text-[9px] font-medium text-white bg-blue-600 px-1.5 py-[2px] rounded-sm z-10">
                            50%
                            <span className="absolute left-1/2 -bottom-0.5 w-2.5 h-2.5 bg-blue-600 rotate-45 -z-5 transform -translate-x-1/2"></span>
                            </span>
                        </div>
                        </div>
                    </div>

                    <div className="w-full my-6">
                        <span className="block text-sm font-semibold text-gray-800">NodeJS</span>
                        <div className="h-2 w-full rounded-md mt-1 bg-black/10">
                            <div className="relative h-full rounded-md bg-blue-600 animate-progress nodejs">
                                <span className="absolute -top-7 -right-3 text-[11px] font-medium text-white bg-blue-600 px-1.5 py-[2px] rounded-sm z-10">
                                38%
                                <span className="absolute left-1/2 -bottom-0.5 w-2.5 h-2.5 bg-blue-600 rotate-45 -z-5 transform -translate-x-1/2"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>   
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* Skill Card 1 */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg  duration-300 transition-all  ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">JavaScript</h3>
                    <p className="text-gray-400">Expert in building interactive web applications.</p>
                </div>
                
                {/* Skill Card 2 */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg    duration-300 transition-all  ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">React</h3>
                    <p className="text-gray-400">Proficient in creating dynamic user interfaces.</p>
                </div>
                
                {/* Skill Card 3 */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg    duration-300 transition-all  ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">Node.js</h3>
                    <p className="text-gray-400">Experienced in building scalable server-side applications.</p>
                </div>
                {/* Skill Card 4 */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg    duration-300 transition-all  ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">Python</h3>
                    <p className="text-gray-400">Skilled in data analysis and machine learning.</p>
                </div>
                {/* Skill Card 5 */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg    duration-300 transition-all  ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">Django</h3>
                    <p className="text-gray-400">Proficient in building robust web applications.</p>
                </div>
                {/* Skill Card 6 */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg   duration-300 transition-all  ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">SQL</h3>
                    <p className="text-gray-400">Experienced in database management and optimization.</p>
                </div>
            </div>
            

        </div>
    );
}