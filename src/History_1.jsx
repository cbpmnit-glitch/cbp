import React from "react";
import Navbar from "./navbar";
import Footer  from './footer'; 

const speakers = [
  {
    name: "Nandan Nilekani",
    role: "Co-Founder & Chairman, Infosys",
    img: "https://www.ecell.in/esummit/images/speakers/nandan_nilekani.png",
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
  }
  // Add more speakers as needed...
];

function SpeakerCard({ name, role, img }) {
  return (
    <div className="relative rounded-2xl bg-zinc-900/70 p-6 shadow-xl ring-1 ring-white/10 transition-transform hover:-translate-y-1 hover:shadow-2xl">
      <div className="mx-auto flex h-36 w-36 items-center justify-center overflow-hidden rounded-full bg-purple-500/30 p-1">
        <img
          src={img}
          alt={name}
          className="h-full w-full rounded-full object-cover"
          loading="lazy"
        />
      </div>
      <h3 className="mt-6 text-lg font-semibold tracking-tight text-white">{name}</h3>
      <p className="mt-1 text-sm text-zinc-300">{role}</p>
    </div>
  );
}

export default function ESummitSpeakers() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen w-full ">
      {/* Decorative background waves */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <header className="mx-auto max-w-6xl px-4 pb-4 pt-12 sm:pt-16">
        <h1 className="text-center text-3xl font-extrabold tracking-widest text-black sm:text-4xl">
          E-SUMMIT '25
        </h1>
        <h2 className="mt-2 text-center text-4xl font-black tracking-tight text-purple-400 sm:text-5xl">
          SPEAKERS
        </h2>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {speakers.map((s) => (
            <SpeakerCard key={s.name} {...s} />)
          )}
        </div>
      </main>
    </div>
        <Footer/>
    </>
  );
}
