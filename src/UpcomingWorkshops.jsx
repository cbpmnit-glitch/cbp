import React from "react";
import WorkshopCard from "./WorkshopCard";

const workshopData = [
  {
    image: "https://example.com/image1.jpg",
    title: "Art of Self Management",
    description: "Learn to balance personal and professional life, develop discipline, and master self-control for long-term success.",
    date: "5th Sept",
    duration: "21 Days",
    language: "Hinglish",
    price: 990,
    joined: 1622,
    isSignature: true,
  },
  {
    image: "https://example.com/image2.jpg",
    title: "Art of Good Communication",
    description: "Understand how effective communication builds trust, strengthens relationships, and enhances leadership skills in every field of life.",
    date: "6th Sept",
    duration: "21 Days",
    language: "Hinglish",
    price: 990,
    joined: 1622,
    isSignature: true,
  },
    {
    image: "https://example.com/image1.jpg",
    title: "Secret of Success",
    description: "Discover the importance of persistence, hard work, and mindset in achieving professional and personal milestones.",
    date: "7th Sept",
    duration: "21 Days",
    language: "Hinglish",
    price: 990,
    joined: 1622,
    isSignature: true,
  },
    {
    image: "https://example.com/image1.jpg",
    title: "Learn & Lead",
    description: "Gain knowledge on how continuous learning empowers leadership, decision-making, and inspires others to follow your vision.",
    date: "8th Sept",
    duration: "21 Days",
    language: "Hinglish",
    price: 990,
    joined: 1622,
    isSignature: true,
  },
    {
    image: "https://example.com/image1.jpg",
    title: "Discover Yourself",
    description: "Explore inner potential, spirituality, and values to lead a purposeful, peaceful, and impactful life.",
    date: "9th Sept",
    duration: "21 Days",
    language: "Hinglish",
    price: 990,
    joined: 1622,
    isSignature: true,
  }
  // Add 3 more copies (same or modify as needed)
];

const UpcomingWorkshops = () => {
  return (
    <div id="Workshops" className="max-w-5xl mx-auto px-4 py-10 ">
      <h1 className="text-3xl font-bold mb-2 text-center">Upcoming Sessions</h1>
      <p className="text-gray-500 mb-8 text-center">Attend from the comfort of your home</p>
      {workshopData.map((workshop, index) => (
        <WorkshopCard key={index} {...workshop} />
      ))}
    </div>
  );
};

export default UpcomingWorkshops;
