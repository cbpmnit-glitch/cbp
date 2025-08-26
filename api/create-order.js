// /api/create-order.js
import { randomUUID } from "crypto";
import {
  StandardCheckoutClient,
  Env,
  StandardCheckoutPayRequest,
} from "pg-sdk-node";

const client = StandardCheckoutClient.getInstance(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  1,                  // client version
  Env.PRODUCTION      // or Env.SANDBOX for testing
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { amount } = req.body || {};
    if (!amount) return res.status(400).json({ error: "Amount is required" });

    const merchantOrderId = randomUUID();

    // Use your canonical domain here (pick one, e.g. https://www.cbpmnit.in)
    const baseUrl = process.env.BASE_URL || "https://www.cbpmnit.in";

    // PhonePe will send the user back to this URL after payment
    const redirectUrl = `${baseUrl}/api/check-status?merchantOrderId=${merchantOrderId}`;

    const request = StandardCheckoutPayRequest.builder()
      .merchantOrderId(merchantOrderId)
      .amount(amount)           // keep units consistent with your PG config
      .redirectUrl(redirectUrl)
      .build();

    const response = await client.pay(request);

    // Send checkout page URL to the browser so you can redirect the user
    return res.status(200).json({ checkoutPageUrl: response.redirectUrl });
  } catch (err) {
    console.error("Error creating order:", err);
    return res.status(500).json({ error: "Error creating order" });
  }
}
