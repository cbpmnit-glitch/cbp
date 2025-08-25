import React from "react";
import EducatorCard from "./EducatorCard";

const educators = [
  {
    name: "MS dhoni",
    role: "Co-founder",
    image: "https://webnew.satvicmovement.org/images/meet-the-team/team/rajat.webp",
  },
  {
    name: "MS dhoni",
    role: "Co-founder",
    image: "https://webnew.satvicmovement.org/images/meet-the-team/team/rajat.webp",
  },
  {
    name: "MS dhoni",
    role: "Co-founder",
    image: "https://webnew.satvicmovement.org/images/meet-the-team/team/rajat.webp",
  },
  {
    name: "MS dhoni",
    role: "Co-founder",
    image: "https://webnew.satvicmovement.org/images/meet-the-team/team/rajat.webp",
  },
  {
    name: "MS dhoni",
    role: "Co-founder",
    image: "https://webnew.satvicmovement.org/images/meet-the-team/team/rajat.webp",
  },

];

const EducatorsSection = () => {
  return (
    <section className="py-10 px-4 text-center">
      <h2 className="text-2xl font-bold">Meet your Seniors</h2>
      <p className="text-gray-500 mb-8">The force behind the CBP program</p>
      <div className="flex justify-center flex-wrap gap-y-4">
        {educators.map((edu, index) => (
          <EducatorCard key={index} {...edu} />
        ))}
      </div>

      <div className="mt-10">
        <button className="bg-[#a1735b] text-white px-8 py-2 rounded-full hover:bg-[#865b44] transition">
          <a href="./MeetTheTeam">View Entire Team</a>
        </button>
      </div>
    </section>
  );
};

export default EducatorsSection;
