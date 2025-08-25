import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import EducatorCard from "./EducatorCard";
import HardikDhoot from "./images/Hardik.png";
import ParvAgrawal from "./images/ParvAgrawal.png";
import RakshitJain from "./images/RakshitJain.png";
import AdityaRoy from "./images/AdityaRoy.png";
import AryanRaj from "./images/AryanRaj.png";
import BhaveshNarnoliya from "./images/BhaveshNarnoliya.png";
import BhaveshYadav from "./images/BhaveshYadav.png";
import DeekshaSinghal from "./images/DeekshaSinghal.png";
import HaroonKaragwal from "./images/HaroonKaragwal.png";
import HarshitKumar from "./images/HarshitKumar.png";
import KanikaSinghal from "./images/KanikaSinghal.png";
import KomalWankhede from "./images/KomalWankhede.png";
import KoshalSharma from "./images/KoshalSharma.png";
import KrishnaAgarwal from "./images/KrishnaAgarwal.png";
import NaveenSaini from "./images/NaveenSaini.png";
import NehaTripathi from "./images/NehaTripathi.png";
import RushilSinha from "./images/RushilSinha.png";
import TusharChoudhary from "./images/TusharChoudhary.png";
import VimalDubey from "./images/VimalDubey.png";
import VivekTapraniya from "./images/VivekTapraniya.png";

const educatorsByYear = {
  "2rd Year Team": [
    {
      name: "Hardik Dhoot",
      role: "Technical secretary",
      image: HardikDhoot,
    },
    {
      name: "Parv Agarwal",
      role: "Designing secretary",
      image: ParvAgrawal,
    },
    {
      name: "Tushar Choudhary",
      role: "Co-Leader of Yoga Wing",
      image: TusharChoudhary,
    },
    {
      name: "Koshal Sharma",
      role: "Co-Leader of Yoga Wing",
      image: KoshalSharma,
    },
    {
      name: "Neha Tripathi",
      role: "Co-Leader of Yoga Wing",
      image: NehaTripathi,
    },
    {
      name: "Naveen Saini",
      role: "Co-Leader of Yoga Wing",
      image: NaveenSaini,
    },
    {
      name: "Krishna Agarwal",
      role: "Co-Leader of Yoga Wing",
      image: KrishnaAgarwal,
    },
    {
      name: "Rakshit Jain",
      role: "Co-Leader of Yoga Wing",
      image: RakshitJain,
    },
    {
      name: "Komal Wankhede",
      role: "Co-Leader of Yoga Wing",
      image: KomalWankhede,
    },
    {
      name: "Kanika Singhal",
      role: "Co-Leader of Yoga Wing",
      image: KanikaSinghal,
    },
    {
      name: "Harshit Kumar",
      role: "Co-Leader of Yoga Wing",
      image: HarshitKumar,
    },
    {
      name: "Haroon Karagwal",
      role: "Co-Leader of Yoga Wing",
      image: HaroonKaragwal,
    },
    {
      name: "Deeksha Singhal",
      role: "Co-Leader of Yoga Wing",
      image: DeekshaSinghal,
    },
    {
      name: "Bhavesh Yadav",
      role: "Co-Leader of Yoga Wing",
      image: BhaveshYadav,
    },
    {
      name: "Bhavesh Narnoliya",
      role: "Co-Leader of Yoga Wing",
      image: BhaveshNarnoliya,
    },
    {
      name: "Aditya Roy",
      role: "Co-Leader of Yoga Wing",
      image: AdityaRoy,
    },
    {
      name: "Aryan Raj",
      role: "Co-Leader of Yoga Wing",
      image: AryanRaj,
    },
  ],
};

const MeetTheTeam = () => {
  return (
    <>
      <Navbar />

      <section className="py-16 pt-30 px-6 text-center md:px-20 bg-gradient-to-b from-gray-50 to-white">
        <h2 className="mt-2 text-center text-3xl font-black tracking-tight 
               bg-gradient-to-b from-[#000408] to-[#3879a4] 
               bg-clip-text text-transparent sm:text-5xl">
          Meet Your Seniors
        </h2>
        <p className="text-gray-500 mb-12 text-lg">
          The force behind the CBP program
        </p>

        {/* Loop through year-wise groups */}
        {Object.keys(educatorsByYear).map((year, idx) => (
          <div
            key={idx}
            className="mb-16 rounded-2xl shadow-lg bg-[#dde0dd] p-8 hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-2xl mb-10 font-bold border-b-2 border-indigo-200 inline-block pb-2">
              {year}
            </h3>
            <div className="flex justify-center flex-wrap gap-6">
              {educatorsByYear[year].map((edu, index) => (
                <div
                  key={index}
                  className="transform transition-transform duration-300 hover:scale-105"
                >
                  <EducatorCard {...edu} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
};

export default MeetTheTeam;
