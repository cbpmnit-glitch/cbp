import React from "react";
import EducatorCard from "./EducatorCard";
import harsh from "./images/harsh.png";
import nikesh from "./images/nikesh.png";
import ashana from "./images/ashana.png";
import nikhil from "./images/nikhil.png";
import { Link } from 'react-router-dom';
const educators = [
  {
    name: "Harsh Rawat",
    role: "Co-founder",
    image: harsh,
  },
  {
    name: "Nikhil Chouhan",
    role: "Co-founder",
    image: nikhil,
  },
  {
    name: "Nikes Sirvi",
    role: "Co-founder",
    image: nikesh,
  },
  {
    name: "Ashana meena",
    role: "Co-founder",
    image: ashana,
  }
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
  <Link to="/MeetTheTeam">View Entire Team</Link>
</button>
      </div>
    </section>
  );
};

export default EducatorsSection;
