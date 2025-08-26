// /api/check-status.js
import {
  StandardCheckoutClient,
  Env,
} from "pg-sdk-node";

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

    // PhonePe SDK returns an order state; redirect accordingly
    if (statusRes.state === "COMPLETED") {
      return res.redirect(302, "/payment-success");
    }
    return res.redirect(302, "/failure");
  } catch (err) {
    console.error("Error checking status:", err);
    return res.status(500).send("Error checking status");
  }
}
