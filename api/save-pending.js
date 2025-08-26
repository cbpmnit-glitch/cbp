// /api/save-pending.js
import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { merchantOrderId, formData, paymentStatus } = req.body;

    if (!merchantOrderId || !formData) {
      return res.status(400).json({ error: "merchantOrderId and formData required" });
    }

    // Attach merchantOrderId + status to the form data
    const rowData = {
      ...formData,
      merchantOrderId,
      paymentStatus: paymentStatus || "PENDING",
    };

    // Send data to your Google Apps Script Web App
    await axios.post(
      process.env.SHEET_WEBAPP_URL, // <-- Store your GAS URL in Vercel env
      rowData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error saving pending entry:", error.message);
    return res.status(500).json({ error: "Failed to save pending entry" });
  }
}
