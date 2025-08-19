import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./navbar";
import Container from "./container";
import WorkshopCard from "./WorkshopCard";
import UpcomingWorkshops from "./UpcomingWorkshops";
import BookCard from "./BookCard";
import BookSection from "./BookSection";
import StoriesSection from "./StoriesSection";
import EducatorsSection from "./EducatorsSection";
import EducatorCard from "./EducatorCard";
import Footer from "./footer";
import Timeline from "./Timeline";
function App() {
  return (
    <>
      <Navbar />
      <Container />
      <Timeline />
      <UpcomingWorkshops />
      <BookSection />
      <StoriesSection />
      <EducatorsSection />
      <EducatorCard />
      <Footer />
    </>
  );
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ShippingPolicy from "./pages/ShippingPolicy";
import CancellationRefund from "./pages/CancellationRefund";

function App() {
  return (
    <Router>
      {/* Your footer and other content */}
      <Routes>
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/cancellation-refund" element={<CancellationRefund />} />
      </Routes>
    </Router>
  );
}

export default App;
