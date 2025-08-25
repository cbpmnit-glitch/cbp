import React, { useEffect, useState, useRef } from "react";
import { LiaGripHorizontalSolid } from "react-icons/lia";
import logo from "./images/Cbp_logo_bgremoved.png";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeSection, setActiveSection] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // show/hide on scroll
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(typeof window !== "undefined" ? window.scrollY : 0);

  // Reveal on up-scroll, hide on down-scroll
  useEffect(() => {
    const THRESHOLD =2; 
    const onScroll = () => {
      const cur = window.scrollY;
      if (cur <=50) {
        setShowNavbar(true);
      } else if (cur < lastScrollY.current - THRESHOLD) {
        setShowNavbar(true); // scrolling up
      } else if (cur > lastScrollY.current + THRESHOLD) {
        setShowNavbar(false); // scrolling down
      }
      lastScrollY.current = cur;
      setIsScrolled(cur > 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Also reveal when user presses Up/PageUp/Home (and hide on Down/PageDown/End)
  useEffect(() => {
    const onKey = (e) => {
      if (["ArrowUp", "PageUp", "Home"].includes(e.key)) {
        setShowNavbar(true);
      }
      if (["ArrowDown", "PageDown", "End"].includes(e.key)) {
        setShowNavbar(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Smooth scroll + navigation
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    if (sectionId === "Registration Form") {
      navigate("/registration");
    } else if (sectionId === "Home") {
      navigate("/");
    } else if (sectionId === "About Us") {
      navigate("/About-us");
    } 
    if(sectionId === "Meet The Team"){
      navigate("/MeetTheTeam");
    } 
     else if (sectionId === "History") {
      navigate("/History");
    } else if (sectionId === "Store") {
      navigate("/Store");
    } else {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Close mobile sidebar when scrolling
  useEffect(() => {
    const handleScrollClose = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScrollClose);
    return () => window.removeEventListener("scroll", handleScrollClose);
  }, [isOpen]);

  const navItems = [
    { name: "Home" },
    { name: "Meet The Team", dropdown: ["Free eBooks", "Physical Books"] },
    { name: "About Us", dropdown: ["Kitchen Tools", "Natural Supplements"] },
  ];

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav
      className={`px-2  py-4 shadow-2xl flex items-center justify-between
        fixed top-0 left-0 w-full z-50
        transform transition-transform duration-300 will-change-transform
        ${isScrolled
          ? "bg-[#015b98] text-white "
          : "bg-[#015b98] text-white"}
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Logo */}
      <img src={logo} alt="Logo" className="h-15 w-15 md:ml-20" />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        <ul className="flex items-center space-x-6">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="relative group"
              onMouseEnter={() => item.dropdown && toggleDropdown(item.name)}
              onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
            >
              <button
                className="hover:text-gray-300 cursor-pointer transition duration-200 text-lg"
                onClick={() => handleMenuItemClick(item.name)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Register Now */}
      <button
        onClick={() => navigate("/registration")}
        className="hidden md:flex mr-20 bg-white text-[#015b98] font-semibold px-4 py-2 rounded-full hover:bg-gray-200 cursor-pointer transition duration-200"
      >
        Register Now
      </button>

      {/* Mobile Menu Icon */}
      <div className="md:hidden z-50 relative">
        {isOpen ? (
          <IoMdClose className="h-8 w-8 cursor-pointer" onClick={() => setIsOpen(false)} />
        ) : (
          <LiaGripHorizontalSolid className="h-10 w-10 cursor-pointer" onClick={() => setIsOpen(true)} />
        )}
      </div>

      {/* Dark overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-opacity-50 z-30" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 w-3/6 right-0 h-200 bg-[#03386d]  p-6 z-40 transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col space-y-4 mt-16 ">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`hover:text-grey-400 ${
                activeSection === item.name ? "rounded-3xl backdrop-blur-md bg-[#022951]" : ""
              }`}
            >
              <button
                className="pl-5 pt-3 pb-3 text-md md:text-xl cursor-pointer hover:text-gray-400"
                onClick={() => handleMenuItemClick(item.name)}
              >
                {item.name}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => navigate("/registration")}
              className="bg-white text-[#022951] font-semibold px-4 py-2 rounded-full hover:bg-gray-200 cursor-pointer transition duration-200 w-full hover:border-2 border-black p-4"
            >
              Register Now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
