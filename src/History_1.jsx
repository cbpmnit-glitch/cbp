import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import speaker_1 from "./images/speaker_1.png";

const speakers = [
  {
    name: "Amogh Lila Prabhu",
    role: "Youth mentor, ISKCON vice president",
    img: speaker_1,
  },
  {
    name: "Anupam Mittal",
    role: "Founder, Shaadi.com",
    img: "https://www.ecell.in/esummit/images/speakers/anupam_mittal.png",
  },
  {
    name: "Nitin Saluja",
    role: "Founder, Chaayos",
    img: "https://www.ecell.in/esummit/images/speakers/nitin_saluja.png",
  },
  {
    name: "Pratik Gauri",
    role: "Founder and CEO of 5ire.org",
    img: "https://www.ecell.in/esummit/images/speakers/pratik_gauri.png",
  },
  {
    name: "Pratik Gauri",
    role: "Founder and CEO of 5ire.org",
    img: "https://www.ecell.in/esummit/images/speakers/pratik_gauri.png",
  },
  {
    name: "Pratik Gauri",
    role: "Founder and CEO of 5ire.org",
    img: "https://www.ecell.in/esummit/images/speakers/pratik_gauri.png",
  },
  {
    name: "Pratik Gauri",
    role: "Founder and CEO of 5ire.org",
    img: "https://www.ecell.in/esummit/images/speakers/pratik_gauri.png",
  },
  {
    name: "Pratik Gauri",
    role: "Founder and CEO of 5ire.org",
    img: "https://www.ecell.in/esummit/images/speakers/pratik_gauri.png",
  },
  {
    name: "Pratik Gauri",
    role: "Founder and CEO of 5ire.org",
    img: "https://www.ecell.in/esummit/images/speakers/pratik_gauri.png",
  },
  {
    name: "Pratik Gauri",
    role: "Founder and CEO of 5ire.org",
    img: "https://www.ecell.in/esummit/images/speakers/pratik_gauri.png",
  },
  {
    name: "Pratik Gauri",
    role: "Founder and CEO of 5ire.org",
    img: "https://www.ecell.in/esummit/images/speakers/pratik_gauri.png",
  },
  {
    name: "Pratik Gauri",
    role: "Founder and CEO of 5ire.org",
    img: "https://www.ecell.in/esummit/images/speakers/pratik_gauri.png",
  },
  // Add more speakers as needed...
];

function SpeakerCard({ name, role, img }) {
  return (
    <div className="relative rounded-2xl bg-[#8fb8d3] p-6 shadow-xl transition-transform hover:-translate-y-1 hover:shadow-2xl">
      <div className="mx-auto flex h-45 w-45 items-center justify-center overflow-hidden rounded-full bg-sky-700 ">
        <img
          src={img}
          alt={name}
          className="h-full w-full rounded-full object-cover"
          loading="lazy"
        />
      </div>
      <h3 className="mt-2 text-lg font-semibold tracking-tight text-black text-center">
        {name}
      </h3>
      <p className="mt-1 text-sm text-gray-800 text-center">{role}</p>
    </div>
  );
}

export default function ESummitSpeakers() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full ">
        {/* Decorative background waves */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-[#3298dc] blur-3xl" />
          <div className="absolute -right-40 top-40 h-200 w-100 rounded-full bg-[#5ab2ed] blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        </div>

        <header className="mx-auto max-w-6xl px-4 pb-4 pt-12 sm:pt-16">
          <h2 className="text-center text-3xl font-extrabold tracking-widest text-black sm:text-2xl">
            CBP PAST
          </h2>
<h2 className="mt-2 text-center text-3xl font-black tracking-tight 
               bg-gradient-to-b from-[#03386d] to-[#3879a4] 
               bg-clip-text text-transparent sm:text-5xl">
  SPEAKERS
</h2>
        </header>

        <main className="mx-auto max-w-6xl px-4 pb-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {speakers.map((s) => (
              <SpeakerCard key={s.name} {...s} />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
