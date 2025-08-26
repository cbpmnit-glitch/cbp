// /api/check-status.js
import { StandardCheckoutClient, Env } from "pg-sdk-node";
// ⬇️ ADD THIS
import axios from "axios";  

const client = StandardCheckoutClient.getInstance(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  1,
  Env.PRODUCTION
);

export default async function handler(req, res) {
  try {
    const { merchantOrderId } = req.query || {};
    if (!merchantOrderId) return res.status(400).send("Merchant Order Id is required");

    const statusRes = await client.getOrderStatus(merchantOrderId);

    // PhonePe SDK returns an order state; update Google Sheet + redirect accordingly
    if (statusRes.state === "COMPLETED") {
      // ⬇️ NEW: update Google Sheet as PAID
      try {
        await axios.post(process.env.SHEET_WEBAPP_URL, {
          merchantOrderId,
          paymentStatus: "PAID",
        });
      } catch (err) {
        console.error("❌ Failed to update Google Sheet:", err.message);
      }

      return res.redirect(302, `/payment-success?merchantOrderId=${merchantOrderId}`);
    }

    // ⬇️ NEW: update Google Sheet as FAILED
    try {
      await axios.post(process.env.SHEET_WEBAPP_URL, {
        merchantOrderId,
        paymentStatus: "FAILED",
      });
    } catch (err) {
      console.error("❌ Failed to update Google Sheet (failed status):", err.message);
    }

    return res.redirect(302, `/payment-failed?merchantOrderId=${merchantOrderId}`);

  } catch (err) {
    console.error("Error checking status:", err);
    return res.status(500).send("Error checking status");
  }
}
