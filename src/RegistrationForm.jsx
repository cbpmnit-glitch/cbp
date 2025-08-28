import axios from "axios";
import React, { useState, useEffect } from "react";

export default function RegistrationForm() {
  // keep base URL here only
  const API_BASE_URL = "https://www.cbpmnit.in/api";

  const [studentType, setStudentType] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [dayAddress, setDayAddress] = useState("");
  const [hostelNum, setHostelNum] = useState("");
  const [roomNum, setRoomNum] = useState("");

  useEffect(() => {
    if (paymentMethod === "cash") setSubmitEnabled(true);
    else if (paymentMethod === "online") setSubmitEnabled(false); // enable after gateway success (if you add one)
    else setSubmitEnabled(false);
  }, [paymentMethod]);

  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
    e.target.value = val;
  };

  const createOrder = async () => {
    try {
      const formEl = document.querySelector("form");
      const formData = new FormData(formEl);
      const data = Object.fromEntries(formData.entries());

      // 1) create order
      const res = await axios.post('https://cbp-api.vercel.app/create-order', { amount: 150 });
      const { merchantOrderId, checkoutPageUrl } = res.data;

      const formValues = {
        ...data,
        transactionTime: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
      };

      localStorage.setItem("formData", JSON.stringify(formValues));

      // 2) save pending
      // await axios.post('https://cbp-api.vercel.app/save-pending', {
      //   merchantOrderId,
      //   formData: data,
      //   paymentStatus: "PENDING",
      // });

      // 3) redirect to gateway
      window.location.href = checkoutPageUrl;
    } catch (err) {
      console.error("Error creating order:", err);
      alert("Failed to start payment. Please try again.");
    }
  };

  const handleSubmit = async (data, redirect = false) => {
    try {
      setIsSubmitting(true);
      await axios.post('https://cbp-api.vercel.app/save-pending', {
        merchantOrderId: `cash-${Date.now()}`,
        formData: {
    ...data,
    transactionTime: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
  },
        paymentStatus: "PAID",
      });
      alert("Form submitted successfully!");
      if (redirect) window.location.href = "/payment-success";
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong while submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg border-t-8 border-blue-600">
      <h2 className="text-center text-blue-600 text-2xl font-bold mb-6">
        Registration Form for CBP 6.0
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const fd = new FormData(e.target);
          const data = Object.fromEntries(fd.entries());
          if (paymentMethod === "cash") {
            handleSubmit({ ...data, paymentStatus: "PAID" }, true);
          }
        }}
        className="space-y-4"
      >
        <div>
          <label className="font-bold text-blue-900 block">Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter Your Full Name"
            required
            className="w-full p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="font-bold text-blue-900 block">Institute ID Number</label>
          <input
            type="text"
            name="idNumber"
            placeholder="Enter Your ID Number"
            required
            className="w-full p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="font-bold text-blue-900 block">Mobile Number (WhatsApp)</label>
          <input
            type="tel"
            name="mobile"
            placeholder="Enter Your 10-Digit Number"
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
            name="course"
            required
            className="w-full p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-600"
          >
            <option value="">Select</option>
            <option>Under Graduate (UG)</option>
            <option>Post Graduation (PG)</option>
            <option>Research (PhD)</option>
          </select>
        </div>

        <div>
          <label className="font-bold text-blue-900 block">Department</label>
          <select
            name="department"
            required
            className="w-full p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-600"
          >
            <option value="">Select</option>
            <option>Architecture and Planning</option>
            <option>Artificial Intelligence & Data Engineering</option>
            <option>Chemical Engineering</option>
            <option>Chemistry</option>
            <option>Civil Engineering</option>
            <option>Computer Science and Engineering</option>
            <option>Electrical Engineering</option>
            <option>Electronics & Communication Engineering</option>
            <option>Humanities and Social Sciences</option>
            <option>Management Studies</option>
            <option>Mathematics</option>
            <option>Mechanical Engineering</option>
            <option>Metallurgical and Materials Engineering</option>
            <option>Physics</option>
            <option>Centre for Energy & Environment</option>
            <option>Materials Research Centre</option>
            <option>National Centre for Disaster Mitigation & Management</option>
            <option>Centre for Rural Development</option>
            <option>Centre for Cyber Security</option>
          </select>
        </div>

        <div>
          <label className="font-bold text-blue-900 block">Year</label>
          <select
            name="year"
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
          <label className="font-bold text-blue-900 block">Day Scholar / Hosteller</label>
          <select
            name="studentType"
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
              name="dayAddress"
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
              <label className="font-bold text-blue-900 block">Hostel Number</label>
              <input
                type="number"
                name="hostelNum"
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
                name="roomNum"
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
            name="paymentMethod"
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
            <p className="text-blue-900 font-bold">Pay ₹150 Online</p>
            <button
              type="button"
              onClick={createOrder}
              className="bg-blue-600 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-900"
            >
              Pay Online
            </button>
          </div>
        )}

        {paymentMethod === "cash" && (
          <div className="mt-2">
            <p className="text-blue-900 font-bold">Pay ₹150</p>
            <input
              type="text"
              name="bossName"
              placeholder="Write Volunteer's Name whom you have given cash"
              required
              className="w-full p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-600"
            />
          </div>
        )}

        <div>
          <label className="font-bold text-blue-900 block">Expectations from the event</label>
          <textarea
            name="expectations"
            placeholder="Write your expectations..."
            required
            className="w-full p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-600 min-h-[80px]"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={!submitEnabled || isSubmitting}
          className={`w-full py-3 rounded-md text-white text-lg font-bold ${
            submitEnabled || isSubmitting
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
