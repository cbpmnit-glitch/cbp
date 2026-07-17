import React from 'react';
import main_element from './images/mainElement.png';
import { Link } from 'react-router-dom';
import EventTimer from "./EventTimer";

const Container = () => {
  return (
    <section
      id='Home'
      className="bg-[#d0e1ee] pt-30 py-12 px-4 md:px-20 
                 flex flex-col md:flex-row items-center md:justify-between 
                 min-h-[90vh] overflow-hidden"
    >
      {/* Left Content */}
      <div className="w-full md:max-w-lg space-y-6 text-center md:text-left md:ml-10">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3 justify-center md:justify-start">

          <div>
            <h2 className="text-2xl font-semibold text-[#015b98]">Capacity Building</h2>
            <h2 className="text-xl text-gray-600 -mt-1">Program</h2>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed break-words px-2 md:px-0">
          This is a comprehensive 5 days Soft Skills Development Program organized by the
          Department of Humanities and Social Sciences in collaboration with the
          Training and Placement Cell MNIT Jaipur to develop industry-demanding Skills.
        </p>

        {/* Buy Tickets Button */}
        <Link
          to="/registration"
          className="inline-block bg-[#015b98] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-[#033861]"
        >
          Buy Ticket - ₹150
        </Link>

        {/* Timer Section */}
        <div className="mt-6 w-full">
          <EventTimer />
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="mt-10 md:mt-0 md:mr-5 md:ml-5 relative w-full flex justify-center">
        <img
          src={main_element}
          alt="Main Element"
          className="rounded-3xl w-full max-w-xs sm:max-w-md md:max-w-[700px] shadow-lg"
        />
      </div>
    </section>
  );
};

export default Container;
