import React, { useState } from "react";

const FormWithPayment = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    instituteId: "",
    mobileNumber: "",
    course: "",
    department: "",
    year: "",
    scholarType: "",
    address: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Save to Google Sheets
  const saveFormData = async (razorpayResponse) => {
    const payload = { ...formData, paymentId: razorpayResponse.razorpay_payment_id };

    await fetch("YOUR_GOOGLE_SCRIPT_URL", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    });
  };

  // Start Razorpay Payment
  const handlePayment = () => {
  const options = {
    key: "rzp_test_XXXXXX", // Replace with your Razorpay Key
    amount: 1 * 100,
    currency: "INR",
    name: "College Event",
    description: "Form Payment",
    handler: async function (response) {
      // ✅ Runs ONLY when payment succeeds
      await saveFormData(response); 
      window.location.href = "/payment-success";
    },
    prefill: {
      name: formData.fullName,
      contact: formData.mobileNumber,
    },
    theme: { color: "#3399cc" },
  };

  const rzp1 = new window.Razorpay(options);

  // ✅ Add this: handles failure or cancellation
  rzp1.on("payment.failed", function (response) {
    alert("❌ Payment failed or cancelled. Please try again.");
  });

  rzp1.open();
};


  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
      <h1>Registration Form</h1>

      <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} />
      <input type="text" name="instituteId" placeholder="Institute ID" onChange={handleChange} />
      <input type="text" name="mobileNumber" placeholder="Mobile Number" onChange={handleChange} />
      <input type="text" name="course" placeholder="Course" onChange={handleChange} />
      <input type="text" name="department" placeholder="Department" onChange={handleChange} />
      <input type="text" name="year" placeholder="Year" onChange={handleChange} />
      <input type="text" name="scholarType" placeholder="Day Scholar / Hosteller" onChange={handleChange} />
      <input type="text" name="address" placeholder="Address" onChange={handleChange} />

      <button onClick={handlePayment} style={{ marginTop: 20, padding: 10 }}>
        Pay ₹1 & Submit
      </button>
    </div>
  );
};

export default FormWithPayment;
