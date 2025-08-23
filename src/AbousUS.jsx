import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const AboutUS = () => {
  return (
    <>
      <Navbar />
      <div className="px-6 pt-30 py-12 max-w-5xl mx-auto ">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="mt-2 text-center text-3xl font-black tracking-tight 
               bg-gradient-to-b  from-[#03386d] to-[#3879a4] 
               bg-clip-text text-transparent sm:text-4xl mb-2">
            About Us: Architecting the Leaders of Tomorrow
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Welcome to the Capacity Building Program, a premier 5-day initiative
            crafted by the Training & Placement Cell of MNIT Jaipur.  
            More than a workshop — an immersive journey from academic knowledge to professional mastery.
          </p>
        </div>

        {/* Section 1 */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl shadow-md mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            The Modern Imperative: Why Soft Skills Define Success
          </h2>
          <p className="text-gray-700 mb-4">
            The world's most innovative and influential leaders unanimously agree
            that soft skills are indispensable. They are the underlying operating
            system for a successful career and a fulfilling life.
          </p>

          <div className="space-y-4 text-blue-900 italic">
            <blockquote className="border-l-4 border-blue-400 pl-4">
              “Your degree can get you the interview. Your soft skills will get you
              the job.” — <span className="font-semibold">Satya Nadella</span>
            </blockquote>
            <blockquote className="border-l-4 border-blue-400 pl-4">
              “Emotional intelligence is more important than IQ in achieving success.” —{" "}
              <span className="font-semibold">Daniel Goleman</span>
            </blockquote>
            <blockquote className="border-l-4 border-blue-400 pl-4">
              “The ability to communicate effectively is the most important skill
              any engineer can have.” — <span className="font-semibold">Elon Musk</span>
            </blockquote>
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            The Architecture of Excellence: Deconstructing Soft Skills
          </h2>
          <p className="text-gray-700 mb-4">
            Soft skills are the sophisticated personal and interpersonal
            attributes that govern how we interact, perform, and lead.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 list-disc ml-6 text-gray-800">
            <li>
              <strong className="text-blue-700">Communication:</strong> Articulate
              complex ideas and build consensus.
            </li>
            <li>
              <strong className="text-blue-700">Teamwork:</strong> Navigate group
              dynamics and drive success.
            </li>
            <li>
              <strong className="text-blue-700">Adaptability:</strong> Embrace
              change and bounce back with resilience.
            </li>
            <li>
              <strong className="text-blue-700">Leadership:</strong> Inspire action
              and guide teams towards vision.
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-2xl shadow-md mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Your Journey of Growth: Our Commitment
          </h2>
          <p className="text-gray-700 mb-4">
            We don’t just teach soft skills — we provide a structured environment
            where you can practice, refine, and master them.
          </p>
          <ul className="space-y-2 text-gray-800 list-disc ml-6">
            <li>
              <span className="font-semibold text-blue-700">
                Expert Talks:
              </span>{" "}
              Engage with seasoned industry leaders.
            </li>
            <li>
              <span className="font-semibold text-blue-700">
                Interactive Workshops:
              </span>{" "}
              Hands-on simulations, role-play, and case studies.
            </li>
            <li>
              <span className="font-semibold text-blue-700">
                Exclusive Resources:
              </span>{" "}
              A digital library of eBooks and curated materials.
            </li>
            <li>
              <span className="font-semibold text-blue-700">
                Networking:
              </span>{" "}
              Forge connections with future leaders.
            </li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            Our Foundation: The Training & Placement Cell, MNIT Jaipur
          </h2>
          <p className="text-gray-700 mb-3">
            The T&P Cell is the central nervous system for career development at
            MNIT Jaipur, with a legacy of:
          </p>
          <ul className="list-disc ml-6 text-gray-800 space-y-1">
            <li>Forging strategic partnerships with industry.</li>
            <li>Orchestrating high-impact programs.</li>
            <li>Guiding students to exceptional careers.</li>
          </ul>
        </div>

        {/* Closing */}
        <div className="text-center bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4">
            Our Mission: Empowering Your Ascent 🚀
          </h2>
          <p className="text-lg mb-6">
            True capacity is built at the intersection of knowledge and character.  
            Leave with confidence, a strategic network, and a roadmap for your ascent.
          </p>
          <button className="bg-white text-blue-700 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition">
            Join Us & Architect Your Future
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUS;
