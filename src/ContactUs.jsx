import React from 'react'
import Navbar from './navbar';
import { Footer } from 'framer-motion/client';
const ContactUs = () => {
  return (
    <>
    <Navbar/>
    <div id="ContactUs" className="p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="mb-2">Last updated on Aug 17th 2025</p>
      <p className="mb-2">
        You may contact us using the information below:
      </p>
      <p className="mb-2">
        <strong>Merchant Legal entity name:</strong> HARSH RAWAT
      </p>
      <p className="mb-2">
        <strong>Registered Address:</strong> MNIT Jaipur, JLN Marg Jaipur, RAJASTHAN 302017
      </p>
      <p className="mb-2">
        <strong>Operational Address:</strong> MNIT Jaipur, JLN Marg Jaipur, RAJASTHAN 302017
      </p>
      <p className="mb-2">
        <strong>Telephone No:</strong> 9982308048
      </p>
      <p>
        <strong>E-Mail ID:</strong> cbpmnit@gmail.com
      </p>
    </div>
    <Footer />
    </>
  )
}

export default ContactUs;



