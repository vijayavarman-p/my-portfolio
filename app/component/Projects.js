'use client';
import { BorderBeam } from "@/components/magicui/border-beam";
import Image from 'next/image';


import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Projects(){
  useEffect(() => {
    AOS.init({
  duration: 800,     // Not too fast, not too slow
  offset: 120,       // Delay trigger slightly after entering viewport
  once: true,        // Animates only once (cleaner feel)
  easing: 'ease-in-out'
});
  }, []);
    return(
        <div id="projects" data-aos="fade-in">
            <section className="bg-gray-900 text-white py-16 px-4 md:px-20">
  <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {/* Project Card 1*/}
    <div className="relative group w-[280px] h-[320px] mx-auto rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-900 text-black font-bold text-xl transition-all duration-500 transform hover:scale-105 shadow-xl">
      {/* First Content (front view) */}
      <BorderBeam />
      <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:opacity-0 group-hover:h-0">
        <div className="text-center">
          <Image
            src="https://media.istockphoto.com/id/942682414/photo/businessman-working-in-office-with-using-calculator-and-laptop-concept-finance-and-accounting.jpg?s=612x612&w=0&k=20&c=HGBNg6WJ166u8IF8OO7xUYSqGgaxyfiuNRUyd5XabWo="
            alt="Project 1"
            fill
            className="absolute inset-0  object-cover transition-opacity duration-500 group-hover:opacity-30"
          />
          <p className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/60 py-2">INVEST IQ</p>
          <BorderBeam />
        </div>
        
      </div>

      {/* Second Content (back view) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-0 rotate-90 scale-0 group-hover:scale-100 px-4 text-center bg-gray-700/70 text-white">
        <Image
          src="https://media.istockphoto.com/id/1367899893/photo/multi-racial-diverse-group-of-people-working-with-paperwork-on-a-board-room-table-at-a.jpg?s=612x612&w=0&k=20&c=2t0t2NfFIpuggzGw54kqtYanxj3f7if1CVjnPh5YRCc="
          alt="Project UI"
          fill
          className="absolute inset-0  object-cover transition-opacity duration-500 group-hover:opacity-30"
        />
        <p className="text-[20px] font-normal">
          Smart finance advisor using AI to suggest loans, insurance, and investments.
        </p>
        <BorderBeam />
      </div>
      
    </div>
    {/* Project Card 2 */}
    <div className="relative group w-[280px] h-[320px] mx-auto rounded-xl overflow-hidden bg-gradient-to-br from-cyan-320 to-blue-400 text-black font-bold text-xl transition-all duration-500 transform hover:scale-105 shadow-xl">
      {/* First Content (front view) */}
      <BorderBeam />
      <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:opacity-0 group-hover:h-0">
        <div className="text-center">
          <Image
            src="https://media.istockphoto.com/id/1170262672/photo/nutritional-information-concept-hand-use-the-magnifying-glass-to-zoom-in-to-see-the-details.jpg?s=612x612&w=0&k=20&c=RncEH-T_nhYklMRAAXUWmeaQPdmbRxqwBfybnVwt_Pw="
            alt="Project 1"
            fill
            className="absolute inset-0  object-cover transition-opacity duration-500 group-hover:opacity-30"
          />
          <p className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/60 py-2">Smart Eat</p>
        <BorderBeam />
        </div>
      </div>

      {/* Second Content (back view) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-0 rotate-90 scale-0 group-hover:scale-100 px-4 text-center bg-gray-700/70 text-white">
        <Image
          src="https://media.istockphoto.com/id/1215095583/photo/woman-using-dieting-app-on-phone.jpg?s=612x612&w=0&k=20&c=OM9J1HGwwp1t5iIA9KGVyzEYYiKC4UrjiKlH4MVjRm8="
          alt="Project UI"
          fill
          className="absolute inset-0  object-cover transition-opacity duration-500 group-hover:opacity-30"
        />
        <p className="text-[20px] font-normal">
          Helps users eat healthier with food info and barcode scanning.
        </p>
        <BorderBeam />
      </div>
    </div>

    {/* Project Card 3 */}
    <div className="relative group w-[280px] h-[320px] mx-auto rounded-xl overflow-hidden bg-gradient-to-br from-cyan-320 to-blue-400 text-black font-bold text-xl transition-all duration-500 transform hover:scale-105 shadow-xl">
      {/* First Content (front view) */}
      <BorderBeam />
      <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:opacity-0 group-hover:h-0">
        <div className="text-center">
          <Image
            src="https://cdn.pixabay.com/photo/2022/01/28/12/17/distance-learning-6974511_1280.jpg"
            alt="Project 1"
            fill
            className="absolute inset-0  object-cover transition-opacity duration-500 group-hover:opacity-30"
          />
          <p className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/60 py-2">CourseCraft</p>
        <BorderBeam />
        </div>
      </div>

      {/* Second Content (back view) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-0 rotate-90 scale-0 group-hover:scale-100 px-4 text-center bg-gray-700/70 text-white">
        <Image
          src="https://media.istockphoto.com/id/2164007541/photo/e-learning-education-concept-of-online-education-e-learning-education-concept-learning-online.jpg?s=612x612&w=0&k=20&c=koP2NSsBT3XZbUDFEQHRxSiIOW5ktwzlpoRSzYk1E4g="
          alt="Project UI"
          fill
          className="absolute inset-0  object-cover transition-opacity duration-500 group-hover:opacity-30"
        />
        <p className="text-[20px] font-normal">
          Recommends courses to guide users&apos; learning paths.
        </p>
        <BorderBeam />
      </div>
    </div>

    {/* Project Card 4 */}
    <div className="relative group w-[280px] h-[320px] mx-auto rounded-xl overflow-hidden bg-gradient-to-br from-cyan-320 to-blue-400 text-black font-bold text-xl transition-all duration-500 transform hover:scale-105 shadow-xl">
      {/* First Content (front view) */}
      <BorderBeam />
      <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:opacity-0 group-hover:h-0">
        <div className="text-center">
          <Image
            src="https://cdn.pixabay.com/photo/2021/01/24/23/13/man-5946820_1280.jpg"
            alt="Project 1"
            fill
            className="absolute inset-0  object-cover transition-opacity duration-500 group-hover:opacity-30"
          />
          <p className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/60 py-2">Face Detection Attendance System</p>
        <BorderBeam />
        </div>
      </div>

      {/* Second Content (back view) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-0 rotate-90 scale-0 group-hover:scale-100 px-4 text-center bg-gray-700/70 text-white">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThtkwpsoHxx1sJ33-MNnJYA8pEN3pyzQna546dj758DmiztHM1wJN2F79UyQP2jM1TcFY&usqp=CAU"
          alt="Project UI"
          fill
          className="absolute inset-0  object-cover transition-opacity duration-500 group-hover:opacity-30"
        />
        <p className="text-[20px] font-normal">
          Tracks attendance automatically using face recognition.
        </p>
        <BorderBeam />
      </div>
    </div>

    {/* Project Card 5 */}
    <div className="relative group w-[280px] h-[320px] mx-auto rounded-xl overflow-hidden bg-gradient-to-br from-cyan-320 to-blue-400 text-black font-bold text-xl transition-all duration-500 transform hover:scale-105 shadow-xl">
      {/* First Content (front view) */}
      <BorderBeam />
      <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:opacity-0 group-hover:h-0">
        <div className="text-center">
          <Image
            src="https://cdn.pixabay.com/photo/2020/09/21/11/41/bus-5589826_1280.jpg"
            alt="Project 1"
            fill
            className="absolute inset-0  object-cover transition-opacity duration-500 group-hover:opacity-30"
          />
          <p className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/60 py-2">Bus Reservation System</p>
        <BorderBeam />
        </div>
      </div>

      {/* Second Content (back view) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-0 rotate-90 scale-0 group-hover:scale-100 px-4 text-center bg-gray-700/70 text-white">
        <Image
          src="https://cdn.pixabay.com/photo/2019/09/30/15/41/holidays-4516107_1280.jpg"
          alt="Project UI"
          fill
          className="absolute inset-0  object-cover transition-opacity duration-500 group-hover:opacity-30"
        />
        <p className="text-[20px] font-normal">
          Online tool to book bus seats, manage schedules, and track reservations easily
        </p>
        <BorderBeam />
      </div>
    </div>
    {/* Repeat for more cards if needed */}
   
</div>
</section>

        </div>
    )
}