import React from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { BiSolidSend } from "react-icons/bi";
import { IoIosGlobe } from "react-icons/io";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div id="Info" className="w-full  overflow-hidden font-sans">
      {/* ===== Hero Section above the Wave Animation (Floating)  === */}
      <div className="relative h-25 md:h-[300px] flex items-center justify-center text-white">
        {/* Wave Animation */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            fill="#015b98"
            initial={{ pathLength: 0 }}
            animate={{
              d: [
                "M0,160 C360,280 1080,40 1440,160 L1440,320 L0,320 Z",
                "M0,200 C360,120 1080,280 1440,200 L1440,320 L0,320 Z",
                "M0,160 C360,280 1080,40 1440,160 L1440,320 L0,320 Z",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      {/* ===== Footer Section ===== */}
      <div className="bg-[#015b98] text-white  px-6 md:px-16 -mt-1">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4">
              CAPACITY BUILDING <br />
              PROGRAM
            </h2>
            <hr className="border-white/40 w-[80px] mb-4" />
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.instagram.com/cbpmnit "
                target="_blank">
                <FaInstagram className="text-xl hover:text-pink-400 " />
              </a>
              <a href="https://www.youtube.com/@MNITJaipurIndia"target="_blank">
               <FaYoutube className="text-xl hover:text-red-400" />
              </a>
             
              <a href="https://www.mnit.ac.in/" target="_blank">
              <IoIosGlobe  className="text-xl hover:text-green-400 " /></a>
            </div>
          </motion.div>

          {/* Center Section */}
{/* Center Section */}
{/* Center Section */}
<motion.div
  className="flex flex-col-3 md:flex-row justify-center gap-30 text-sm w-full"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  <div>
    <p className="font-bold mb-2">Explore</p>
    <ul className="space-y-1">
      <li><a href="/">Home</a></li>
      <li><a href="./Store">Store</a></li>
      <li><a href="./History">History</a></li>
      <li><a href="./MeetTheTeam">Meet The Team</a></li>
      <li><a href="./About-us">About Us</a></li>
    </ul>
  </div>

  <div>
    <p className="font-bold mb-2">Community</p>
    <ul className="space-y-1">
      <li>E-Mail: cbpmnit@gmail.com</li>
      <li>Phone: 9982308048</li>
      <li>MNIT Jaipur</li>
      <li>Stay Connected!</li>
    </ul>
  </div>

  <div>
    <p className="font-bold mb-2">Contact Details</p>
    <ul className="space-y-1">
      <li><Link to="/Private-Policy" onClick={() => window.scrollTo(0, 0)}>Privacy policy</Link></li>
      <li><Link to="/T&C-Policy" onClick={() => window.scrollTo(0, 0)}>Terms and Conditions</Link></li>
      <li><Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link></li>
      <li><Link to="/Cancellation-Refund" onClick={() => window.scrollTo(0, 0)}>Cancellation & Refund</Link></li>
    </ul>
  </div>
</motion.div>

        </div>

        {/* Divider */}
        <hr className="my-6 border-white/30" />

        {/* Bottom Footer */}
<motion.div
  className="flex flex-col md:flex-row justify-center md:justify-between text-xs text-white/80"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.6 }}
>
  <p className="mb-2 mt-0 text-center w-full">
    © 2025 Capacity Building Program. All Rights Reserved.
  </p>
</motion.div>

      </div>
    </div>
  );
};

export default App;
