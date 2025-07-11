'use client';
import { Marquee } from "@/components/magicui/marquee";
import Image from 'next/image';


import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Certification(){
    useEffect(() => {
        AOS.init({
  duration: 800,     // Not too fast, not too slow
  offset: 120,       // Delay trigger slightly after entering viewport
  once: true,        // Animates only once (cleaner feel)
  easing: 'ease-in-out'
});
      }, []);
    return(
        <div id="certification" data-aos="fade-up">
            <section className="bg-gray-900 text-white py-16 px-4 md:px-20">
                <h2 className="text-4xl font-bold mb-12 text-center">My Certifications</h2>
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
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-semibold mb-2">Certified React Developer</h3>
                            <p className="text-gray-400 mb-4">Issued by Tech Academy</p>
                            <p className="text-gray-300">Achieved proficiency in building dynamic web applications using React.</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-semibold mb-2">Machine Learning Specialist</h3>
                            <p className="text-gray-400 mb-4">Issued by AI Institute</p>
                            <p className="text-gray-300">Gained expertise in machine learning algorithms and data analysis.</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-semibold mb-2">Full Stack Web Development</h3>
                            <p className="text-gray-400 mb-4">Issued by Web Dev Bootcamp</p>
                            <p className="text-gray-300">Mastered both front-end and back-end web development technologies.</p>
                        </div>
                        {/* Certification Card 1 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold mb-2">Certified React Developer</h3>
                        <p className="text-gray-400 mb-4">Issued by Tech Academy</p>
                        <p className="text-gray-300">Achieved proficiency in building dynamic web applications using React.</p>
                    </div>
                    {/* Certification Card 2 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold mb-2">Machine Learning Specialist</h3>
                        <p className="text-gray-400 mb-4">Issued by AI Institute</p>
                        <p className="text-gray-300">Gained expertise in machine learning algorithms and data analysis.</p>
                    </div>
                    {/* Certification Card 3 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold mb-2">Full Stack Web Development</h3>
                        <p className="text-gray-400 mb-4">Issued by Web Dev Bootcamp</p>
                        <p className="text-gray-300">Mastered both front-end and back-end web development technologies.</p>
                    </div>

                    </Marquee>

                    
                </div>
            </section>

        </div>
    )
}