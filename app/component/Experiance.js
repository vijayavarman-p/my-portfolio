'use client';
import { BlurFade } from "@/components/magicui/blur-fade";
import Image from 'next/image';


import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Experience() {
    useEffect(() => {
        AOS.init({
  duration: 800,     // Not too fast, not too slow
  offset: 120,       // Delay trigger slightly after entering viewport
  once: true,        // Animates only once (cleaner feel)
  easing: 'ease-in-out'
});
      }, []);
    return (
        <div id="experience" data-aos="fade-up" className="bg-gray-900 py-10"><h2 className=" px-38  flex justify-start text-white text-4xl font-bold mb-12 text-center">My Experience</h2>
        <div className="flex justify-evenly items-center px-10">
            <section className="bg-gray-900 text-white py-10 px-4 md:px-20">
                <div className="grid grid-row-1 md:grid-row-2 lg:grid-row-3 gap-10">
                    {/* Experience Card 1 */}
                    <BlurFade>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-170 ">
                        <h3 className="text-xl font-semibold mb-2">Software Engineer Intern</h3>
                        <p className="text-gray-400 mb-4">Tech Company XYZ</p>
                        <p className="text-gray-300">Developed web applications using React and Node.js, improving user experience and performance.</p>
                        </div>
                    </BlurFade>
                    
                    <BlurFade>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-170">
                        <h3 className="text-xl font-semibold mb-2">Machine Learning Intern</h3>
                        <p className="text-gray-400 mb-4">AI Innovations Ltd.</p>
                        <p className="text-gray-300">Implemented machine learning models to analyze data, resulting in a 20% increase in prediction accuracy.</p>
                        </div>
                    </BlurFade>
                    
                    <BlurFade>
                    {/* Experience Card 3 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-170">
                        <h3 className="text-xl font-semibold mb-2">Web Developer Intern</h3>
                        <p className="text-gray-400 mb-4">Creative Agency ABC</p>
                        <p className="text-gray-300">Built responsive websites and improved site performance, leading to a 30% increase in traffic.</p>
                    </div>
                    </BlurFade>
                      
                </div>
            </section>
            <hr className="w-1 h-150 bg-gray-700 mr-15"/>
            <section className="py-10 flex ">
                <BlurFade className={"flex flex-wrap"} >
                    <Image src="https://cdn.pixabay.com/photo/2015/01/08/18/24/programming-593312_1280.jpg" alt="Sample 1" width={85} className="8px-4 rounded-2xl  transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg " />
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1uPOiymiz06sFd0b6uU1tHCnLUf8aKP27Hw&s" width={90} alt="Sample 3" className=" rounded-3xl px-6 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg" />
                    <Image src="https://cdn.pixabay.com/photo/2017/07/31/14/45/code-2558220_1280.jpg" alt="Sample 2" width={97} className=" px-6  mt-5 rounded-3xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg" />
                    {/* <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4wQ2C1Jrnt1BOMJ6Z6DW8cczaVCOiQ7Ykkw&s" alt="Sample 2" className="w-97 mt-5  px-6  rounded-3xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg" /> */}
                </BlurFade>
            </section> 
        </div>
    </div>
    )
}
