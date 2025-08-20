import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { useEffect } from "react";   // ✅ import useEffect
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
import TandC from "./TandC";
import Cancellation from "./Cancellation";
import Shipping from "./Shipping";
import RegistrationForm from "./RegistrationForm";
import Attendance from "./Attendance";
import FormWithPayment from "./FormWithPayment";
import PaymentSuccess from "./PaymentSuccess";

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
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<HomePage />} />
        
        {/* Contact Us page */}
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Privacy Policy page */}
        <Route path="/Private-Policy" element={<PrivatePolicy />} />

         {/*T&C page */}
        <Route path="/T&C-Policy" element={<TandC />} />

        {/*Cancellation page */}
        <Route path="/Cancellation-Refund" element={<Cancellation />} />
        
        {/*Cancellation page */}
        <Route path="/Shipping-Policy" element={<Shipping />} />

        <Route path="/registration" element={<RegistrationForm />} />

        <Route path="/attendance" element={<Attendance />} />
    
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
