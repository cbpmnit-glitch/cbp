import React from "react";
import EducatorCard from "./EducatorCard";
import nupur from "./images/1.png";
import rakesh from "./images/2.png";
import Niraja from "./images/3.png";

import { Link } from 'react-router-dom';
const educators = [
  {
    name: "Prof. Nupur Tandon",
    role: "Co-founder",
    image: nupur,
  },
  {
    name: "Prof. Rakesh Jain",
    role: "Co-founder",
    image: Niraja,
  },
  {
    name: "Dr. Niraja Saraswat",
    role: "Co-founder",
    image: rakesh,
  } 
];

const Faculty = () => {
  return (
    <section className="py-10 px-4 text-center">
      <h2 className="text-2xl font-bold">Our Inspiration </h2>
      <p className="text-gray-500 mb-8">This wouldn't be
         possible without them </p>
      <div className="flex justify-center flex-wrap gap-y-4 gap-x-10">
        {educators.map((edu, index) => (
          <EducatorCard key={index} {...edu} />
        ))}
      </div>


    </section>
  );
};

export default Faculty;
