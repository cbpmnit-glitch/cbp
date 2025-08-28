import React, { useEffect, useRef } from "react";
import axios from "axios";

export default function PaymentSuccess() {
  const didRun = useRef(false);

  useEffect(() => {
    if (didRun.current) return;
    didRun.current = true;

    (async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const merchantOrderId = params.get("merchantOrderId");

        const raw = localStorage.getItem("formData");
        if (!merchantOrderId || !raw) return;

        if (localStorage.getItem("savePendingDone") === merchantOrderId) {
          console.log("Already saved, skipping call.");
          return;
        }

        let formData;
        try {
          formData = JSON.parse(raw);
        } catch {
          formData = raw;
        }

        await axios.post("https://cbp-api.vercel.app/save-pending", {
          merchantOrderId,
          formData :
          {
            ...formData,
            transactionTime: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
          },
          paymentStatus: "SUCCESS",
        });

        localStorage.setItem("savePendingDone", merchantOrderId);
      } catch (err) {
        console.error("save-pending failed:", err);
      }
    })();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>✅ Payment Successful</h1>
      <p>Your registration has been submitted successfully.</p>
    </div>
  );
}
