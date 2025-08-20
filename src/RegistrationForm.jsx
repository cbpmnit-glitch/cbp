import React, { useState, useEffect } from "react";

export default function RegistrationForm() {
  const [studentType, setStudentType] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [submitEnabled, setSubmitEnabled] = useState(false);

  // Fields
  const [dayAddress, setDayAddress] = useState("");
  const [hostelNum, setHostelNum] = useState("");
  const [roomNum, setRoomNum] = useState("");
  const [bossName, setBossName] = useState("");

  // Handle payment toggle
  useEffect(() => {
    if (paymentMethod === "cash") {
      setSubmitEnabled(true);
    } else if (paymentMethod === "online") {
      setSubmitEnabled(false);
    } else {
      setSubmitEnabled(false);
    }
  }, [paymentMethod]);

  // When Pay Online clicked → enable submit
  const handlePayNow = () => {
  const options = {
    key: "rzp_test_XXXXXX", // 🔑 replace with your Razorpay key
    amount: 150 * 100, // Rs.150 in paise
    currency: "INR",
    name: "College Event",
    description: "Registration Payment",
    handler: function () {
      setSubmitEnabled(true); // ✅ enable submit only after payment
      alert("Payment successful! Now you can submit the form.");
    },
    modal: {
      ondismiss: function () {
        alert("Payment not completed. Please try again.");
      },
    },
    theme: { color: "#3399cc" },
  };

  const rzp1 = new window.Razorpay(options);
  rzp1.open();
};


  // Restrict phone number input
  const handlePhoneChange = (e) => {
    let val = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
    e.target.value = val;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg border-t-8 border-blue-600">
      <h2 className="text-center text-blue-600 text-2xl font-bold mb-6">
        Registration Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-bold text-blue-900 block">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            required
            className="w-full p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="font-bold text-blue-900 block">
            Institute ID Number
          </label>
          <input
            type="text"
            placeholder="Enter your ID number"
            required
            className="w-full p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="font-bold text-blue-900 block">
            Mobile Number (WhatsApp)
          </label>
          <input
            type="tel"
            placeholder="Enter your 10-digit number"
            pattern="[0-9]{10}"
            maxLength="10"
            required
            onInput={handlePhoneChange}
            className="w-full p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="font-bold text-blue-900 block">Course</label>
          <select
            required
            className="w-full p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-600"
          >
            <option value="">Select</option>
            <option>Under Graduate (UG)</option>
            <option>Post Graduation (PG)</option>
          </select>
        </div>

        <div>
          <label className="font-bold text-blue-900 block">Department</label>
          <select
            required
            className="w-full p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-600"
          >
            <option value="">Select</option>
            <option>Mechanical</option>
            <option>Chemical</option>
            <option>Metallurgy</option>
            <option>AIDE</option>
            <option>Architecture</option>
            <option>CSE</option>
            <option>ECE</option>
            <option>Civil</option>
            <option>EE</option>
          </select>
        </div>

        <div>
          <label className="font-bold text-blue-900 block">Year</label>
          <select
            required
            className="w-full p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-600"
          >
            <option value="">Select</option>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
            <option>5th Year</option>
          </select>
        </div>

        <div>
          <label className="font-bold text-blue-900 block">
            Day Scholar / Hosteller
          </label>
          <select
            value={studentType}
            onChange={(e) => setStudentType(e.target.value)}
            required
            className="w-full p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-600"
          >
            <option value="">Select</option>
            <option value="day">Day Scholar</option>
            <option value="hostel">Hosteller</option>
          </select>
        </div>

        {studentType === "day" && (
          <div>
            <label className="font-bold text-blue-900 block">Address</label>
            <input
              type="text"
              value={dayAddress}
              onChange={(e) => setDayAddress(e.target.value)}
              placeholder="Enter your address"
              required
              className="w-full p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-600"
            />
          </div>
        )}

        {studentType === "hostel" && (
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="font-bold text-blue-900 block">
                Hostel Number
              </label>
              <input
                type="number"
                value={hostelNum}
                onChange={(e) => setHostelNum(e.target.value)}
                placeholder="Enter hostel number"
                required
                className="w-full p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="flex-1">
              <label className="font-bold text-blue-900 block">Room Number</label>
              <input
                type="text"
                value={roomNum}
                onChange={(e) => setRoomNum(e.target.value)}
                placeholder="Room no."
                required
                className="w-full p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>
        )}

        <div>
          <label className="font-bold text-blue-900 block">Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
            className="w-full p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-600"
          >
            <option value="">Select</option>
            <option value="online">Online</option>
            <option value="cash">Cash</option>
          </select>
        </div>

        {paymentMethod === "online" && (
          <div className="mt-2">
            <p className="text-blue-900 font-bold">Pay ₹1 Online</p>
            <a
              href="https://rzp.io/rzp/C9fHrmVC"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-900"
              onClick={handlePayNow}
            >
              Pay Online
            </a>
          </div>
        )}

        {paymentMethod === "cash" && (
          <div className="mt-2">
            <p className="text-blue-900 font-bold">Pay ₹150</p>
            <label className="font-bold text-blue-900 block">
              Choose Boss Name
            </label>
            <select
              value={bossName}
              onChange={(e) => setBossName(e.target.value)}
              required
              className="w-full p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-600"
            >
              <option value="">Select</option>
              <option>Harsh Rawat</option>
              <option>Nikhil Chouhan</option>
              <option>Nikesh Sirvi</option>
              <option>Aashana Meena</option>
            </select>
          </div>
        )}

        <div>
          <label className="font-bold text-blue-900 block">
            Expectations from the event
          </label>
          <textarea
            placeholder="Write your expectations..."
            required
            className="w-full p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-600 min-h-[80px]"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={!submitEnabled}
          className={`w-full py-3 rounded-md text-white text-lg font-bold ${
            submitEnabled
              ? "bg-blue-600 hover:bg-blue-900 cursor-pointer"
              : "bg-blue-300 cursor-not-allowed"
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
