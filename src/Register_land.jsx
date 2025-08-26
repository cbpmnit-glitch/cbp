import React from "react";
import { motion } from "framer-motion";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Register_land() {
  return (
    <>
    <Navbar/>
    <div className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0f2fe_1px,transparent_1px),linear-gradient(to_bottom,#e0f2fe_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 z-0" />

      {/* Animated Blobs */}
      <motion.div
        className="absolute w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        animate={{ x: [0, 100, -100, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [50, -150, 100, 50], y: [0, 80, -80, 0], scale: [1.1, 0.8, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [-100, 100, -50, -100], y: [50, -100, 100, 50], scale: [1, 1.3, 0.7, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Polygons */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border-4 border-blue-200 rotate-45 opacity-50"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute bottom-24 right-16 w-40 h-40 border-4 border-blue-300 rounded-full opacity-40"
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-28 h-28 border-4 border-blue-400 opacity-40"
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-blue-900 drop-shadow-lg"
        >
          Click Here to Register
        </motion.h1>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8"
        >
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd3ZYJ3VjwdeqUUQaib9nk8-uwg8GvG3zlG6YoGGuxdf8ci9w/viewform?usp=header"
            target="_blank"
            whileHover={{ scale: 1.1, backgroundColor: "#2563eb", boxShadow: "0px 0px 20px rgba(37, 99, 235, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-2xl rounded-2xl transition-all"
          >
            Register
          </motion.a>
        </motion.div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

