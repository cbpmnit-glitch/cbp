// PaymentFailure.jsx
export default function PaymentFailure() {
  return (
    <div style={{maxWidth: 640, margin: "64px auto", textAlign: "center"}}>
      <h1>Payment Failed</h1>
      <p>If money was deducted, it will be auto-reversed by the bank/PG. You can try again.</p>
    </div>
  );
}
