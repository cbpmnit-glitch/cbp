import React from "react";
import WorkshopCard from "./WorkshopCard";
import home_1 from "./images/home_1.jpg";
import home_2 from "./images/home_2.jpg";
import home_3 from "./images/home_3.jpg";
import home_4 from "./images/home_4.png";
import home_5 from "./images/home_5.jpg.png";
const workshopData = [
  {
    image: home_1,
    title: "Art of Self Management",
    description:
      "Learn to balance personal and professional life, develop discipline, and master self-control for long-term success.",
    date: "05/09/2025",
    duration: "6-8 pm",
    speaker: "Mr. Munish Nandwani",
    isSignature: true,
  },
  {
    image: home_2,
    title: "Art of Good Communication",
    description:
      "Understand how effective communication builds trust, strengthens relationships, and enhances leadership skills in every field of life.",
    date: "06/09/2025",
    duration: "6-8 pm",
    speaker: "Mr. Mahesh Punjabi",
    isSignature: true,
  },
  {
    image: home_3,
    title: "Secret of Success",
    description:
      "Discover the importance of persistence, hard work, and mindset in achieving professional and personal milestones.",
    date: "07/09/2025",
    duration: "6-8 pm",
    speaker: "Adv. Anuj Saxena",
    isSignature: true,
  },
  {
    image: home_4,
    title: "Lead with Resilience",
    description:
      "Gain knowledge on how continuous learning empowers leadership, decision-making, and inspires others to follow your vision.",
    date: "08/09/2025",
    duration: "6-8 pm",
    speaker: "Dr. Anupama Soni",
    isSignature: true,
  },
  {
    image: home_5,
    title: "Discover Yourself",
    description:
      "Explore inner potential, spirituality, and values to lead a purposeful, peaceful, and impactful life.",
    date: "09/09/2025",
    duration: "6-8 pm",
    speaker: "HG Hari Bhakti Das",
    isSignature: true,
  },
];

const UpcomingWorkshops = () => {
  return (
    <div
      id="Workshops"
      className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-10"
    >
      <h1 className="text-3xl font-bold mb-2 text-center">
        Upcoming Sessions
      </h1>
      <p className="text-gray-500 mb-8 text-center">
        Discover, Discuss, and Develop!
      </p>
      {workshopData.map((workshop, index) => (
        <WorkshopCard key={index} {...workshop} />
      ))}
    </div>
  );
};

export default UpcomingWorkshops;
