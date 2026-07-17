import React from 'react';
import logo from "./images/Cbp_logo_bgremoved.png";

const RedirectPage = () => {
  const handleRedirect = () => {
    window.location.href = "/version6";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#082f49] via-[#0f172a] to-[#020617] flex flex-col items-center justify-center p-6 text-white font-sans selection:bg-[#0284c7] selection:text-white relative overflow-hidden">
      {/* Background Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#0284c7]/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0369a1]/15 rounded-full blur-3xl pointer-events-none animate-pulse delay-700"></div>

      <div className="relative z-10 w-full max-w-lg bg-[#0f172a]/70 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl text-center flex flex-col items-center space-y-6 transform hover:scale-[1.01] transition-transform duration-300">
        
        {/* Logo Container */}
        <div className="relative p-4 bg-white/5 rounded-2xl border border-white/5 shadow-inner">
          <img src={logo} alt="CBP Logo" className="h-20 w-20 object-contain" />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent tracking-tight">
            Capacity Building Program
          </h1>
          <p className="text-sm font-semibold tracking-wider text-sky-400 uppercase">
            MNIT Jaipur
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full"></div>

        {/* Description */}
        <p className="text-gray-300 text-base leading-relaxed max-w-sm">
          Thank you for visiting. The 6th edition of the Capacity Building Program (CBP 6.0) has successfully concluded.
        </p>
        
        <p className="text-gray-400 text-sm">
          To view the complete event details, schedule, speakers, and materials, please visit our official archive.
        </p>

        {/* Button */}
        <button
          onClick={handleRedirect}
          className="group w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#0284c7] to-[#0369a1] hover:from-[#0369a1] hover:to-[#0284c7] text-white font-bold rounded-2xl shadow-lg hover:shadow-sky-500/20 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
        >
          <span>Go to CBP 6.0 Archive</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      {/* Footer / Copyright */}
      <div className="absolute bottom-6 text-gray-500 text-xs tracking-wider">
        &copy; {new Date().getFullYear()} MNIT Jaipur. All rights reserved.
      </div>
    </div>
  );
};

export default RedirectPage;
