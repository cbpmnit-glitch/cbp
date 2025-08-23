import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import EducatorCard from "./EducatorCard";

const educatorsByYear = {
  "2rd Year Team": [
    {
      name: "Radhika Gupta",
      role: "Co-Leader of Yoga Wing",
      image: "https://webnew.satvicmovement.org/images/meet-the-team/team/rajat.webp",
      bgColor: "#c6957e",
    },
    {
      name: "Radhika Gupta",
      role: "Co-Leader of Yoga Wing",
      image: "https://webnew.satvicmovement.org/images/meet-the-team/team/rajat.webp",
      bgColor: "#c6957e",
    },
    {
      name: "Radhika Gupta",
      role: "Co-Leader of Yoga Wing",
      image: "https://webnew.satvicmovement.org/images/meet-the-team/team/rajat.webp",
      bgColor: "#c6957e",
    },
    {
      name: "Radhika Gupta",
      role: "Co-Leader of Yoga Wing",
      image: "https://webnew.satvicmovement.org/images/meet-the-team/team/rajat.webp",
      bgColor: "#c6957e",
    },
    {
      name: "Radhika Gupta",
      role: "Co-Leader of Yoga Wing",
      image: "https://webnew.satvicmovement.org/images/meet-the-team/team/rajat.webp",
      bgColor: "#c6957e",
    },
    {
      name: "Radhika Gupta",
      role: "Co-Leader of Yoga Wing",
      image: "https://webnew.satvicmovement.org/images/meet-the-team/team/rajat.webp",
      bgColor: "#c6957e",
    },
    {
      name: "Akshay Jain",
      role: "Co-Leader of Yoga Wing",
      image: "https://webnew.satvicmovement.org/images/meet-the-team/team/rajat.webp",
      bgColor: "#c8a557",
    },
  ],
  "Seniors": [
    {
      name: "Rajat Jadon",
      role: "Host of 5AM Challenge\nCo-Leader of the Youth Wing",
      image: "https://webnew.satvicmovement.org/images/meet-the-team/team/rajat.webp",
      bgColor: "#a3dadb",
    },
    {
      name: "Rajat Jadon",
      role: "Host of 5AM Challenge\nCo-Leader of the Youth Wing",
      image: "https://webnew.satvicmovement.org/images/meet-the-team/team/rajat.webp",
      bgColor: "#a3dadb",
    },
    {
      name: "Rajat Jadon",
      role: "Host of 5AM Challenge\nCo-Leader of the Youth Wing",
      image: "https://webnew.satvicmovement.org/images/meet-the-team/team/rajat.webp",
      bgColor: "#a3dadb",
    },
    {
      name: "Rajat Jadon",
      role: "Host of 5AM Challenge\nCo-Leader of the Youth Wing",
      image: "https://webnew.satvicmovement.org/images/meet-the-team/team/rajat.webp",
      bgColor: "#a3dadb",
    },
    {
      name: "Rajat Jadon",
      role: "Host of 5AM Challenge\nCo-Leader of the Youth Wing",
      image: "https://webnew.satvicmovement.org/images/meet-the-team/team/rajat.webp",
      bgColor: "#a3dadb",
    },
    {
      name: "Rajat Jadon",
      role: "Host of 5AM Challenge\nCo-Leader of the Youth Wing",
      image: "https://webnew.satvicmovement.org/images/meet-the-team/team/rajat.webp",
      bgColor: "#a3dadb",
    },
    {
      name: "Rajat Jadon",
      role: "Host of 5AM Challenge\nCo-Leader of the Youth Wing",
      image: "https://webnew.satvicmovement.org/images/meet-the-team/team/rajat.webp",
      bgColor: "#a3dadb",
    },
    {
      name: "Rajat Jadon",
      role: "Host of 5AM Challenge\nCo-Leader of the Youth Wing",
      image: "https://webnew.satvicmovement.org/images/meet-the-team/team/rajat.webp",
      bgColor: "#a3dadb",
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
