import React from "react";
import Navbar from "./navbar";
import Footer  from './footer'; 
const PrivatePolicy = () => {
  return (
    <>
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          Last updated: Aug 17th, 2025
        </p>
        <p className="mb-4">
          This Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you visit our website.
        </p>
        <p className="mb-4">
          By using our services, you agree to the terms of this Privacy Policy.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PrivatePolicy;

