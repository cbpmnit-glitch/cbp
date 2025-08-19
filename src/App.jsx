import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import ContactUs from "./ContactUs";
import PrivatePolicy from "./PrivacyPolicy";

// Main landing page component
const HomePage = () => {
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
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<HomePage />} />
        
        {/* Contact Us page */}
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Privacy Policy page */}
        <Route path="/Private-Policy" element={<PrivatePolicy />} />

        {/* Privacy Policy page */}
        <Route path="/Shipping-Policy" element={<ShippingPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
