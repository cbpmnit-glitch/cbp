import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// FlipBox Component
const FlipBox = ({ value, label }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative bg-white/10 backdrop-blur-md border border-white/20 
                 shadow-[0_8px_30px_rgba(0,0,0,0.12)] 
                 px-4 py-3 md:px-6 md:py-5 rounded-2xl 
                 min-w-[70px] md:min-w-[100px] 
                 flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00c6ff] to-[#0072ff] opacity-20 blur-2xl"></div>

      <AnimatePresence mode="wait">
        <motion.h3
          key={value}
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -90, opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="text-xl md:text-3xl font-extrabold text-white drop-shadow-lg z-10"
        >
          {String(value).padStart(2, "0")}
        </motion.h3>
      </AnimatePresence>

      <p className="text-xs md:text-sm text-gray-200 z-10">{label}</p>
    </motion.div>
  );
};

export default function EventTimer() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate());
  targetDate.setHours(18,0, 0, 0);

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const diff = targetDate.getTime() - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, finished: true };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      finished: false,
    };
  };

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const updateTimer = () => {
      const t = calculateTimeLeft();
      setDays(t.days);
      setHours(t.hours);
      setMinutes(t.minutes);
      setSeconds(t.seconds);
      setFinished(t.finished);
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center text-white w-full px-2"
    >
      <motion.div
        whileHover={{ scale: 1.02, rotate: 0.5 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="relative bg-gradient-to-br from-[#141e30] to-[#243b55] 
                   rounded-3xl shadow-2xl w-full 
                   sm:max-w-full md:max-w-xl 
                   p-6 md:p-10 backdrop-blur-lg overflow-hidden 
                   mx-0 sm:mx-2 md:mx-auto"
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#00c6ff]/20 to-[#0072ff]/30 blur-3xl"></div>

        <h1 className="text-2xl md:text-3xl font-bold mb-5 text-center relative z-10">
          Final Lap Ticking!
        </h1>

        {finished ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-2xl font-bold text-green-400 text-center relative z-10"
          >
            🚀 Event Ended 2025 🚀 
            <br />
            THANK YOU FOR BEING THE PART OF THIS EVENT ! 
          </motion.div>
        ) : 
// {/* <div className="grid grid-cols-4 w-full px-2 sm:px-4 md:px-8">
//   <FlipBox value={days} label="Days" />
//   <FlipBox value={hours} label="Hours" />
//   <FlipBox value={minutes} label="Minutes" />
//   <FlipBox value={seconds} label="Seconds" />
// </div> */}

        (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-2xl font-bold text-green-400 text-center relative z-10"
          >
            🚀 Event Ended 2025' 
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
