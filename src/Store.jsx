import { useState } from "react";

export default function ProductPage() {
  const [size, setSize] = useState("2XL");
  const [quantity, setQuantity] = useState(1);

  const designs = [
    "Satvic For Life (White) A",
    "Satvic For Life (Charcoal) B",
    "Dear Person (Pink) C",
    "Powered By Mother Nature (Charcoal) D",
    "Powered By Mother Nature (White) E",
    "Give Yourself Time (Olive Green) F",
    "Yoga Has My Back (Charcoal) G",
    "Yoga Has My Back (Cream Rin) H",
    "Satvic From My Head Tomatoes (White) I",
    "Cleanse Nourish... (Charcoal) K",
    "Cleanse Nourish... (White) L",
    "Friends Not food (Dark Pink) M",
    "Friends Not food (Charcoal) N",
    "Nature Never Hurries (Charcoal) O",
    "Beyond A Barcode (White) P",
    "Friends Not Food Q",
    "Not A Product R",
    "Yoga Suryanamaskar S",
    "Satvic (Green) U",
    "Satvic (Ochre) V",
  ];

  const sizes = ["S", "M", "L", "XL", "2XL"];

  return (
    <div id="Store" className="flex flex-col md:flex-row justify-center items-start p-6 md:p-12 gap-10">
      {/* Left side - Product Image */}
      <div className="flex flex-col items-center md:w-1/2">
        <img
          src="https://via.placeholder.com/400x500"
          alt="Satvic T-Shirt"
          className="rounded-2xl shadow-md"
        />
        <div className="flex mt-4 gap-2">
          {[...Array(6)].map((_, i) => (
            <img
              key={i}
              src="https://via.placeholder.com/60"
              alt="thumbnail"
              className="w-14 h-14 object-cover rounded-md cursor-pointer border hover:border-black"
            />
          ))}
        </div>
      </div>

      {/* Right side - Product Details */}
      <div className="md:w-1/2 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Satvic T-Shirt</h1>
        <p className="text-lg font-semibold">₹600.00</p>
        <p className="text-sm text-gray-500">
          Tax included. <span className="underline cursor-pointer">Shipping</span> calculated at checkout.
        </p>

        {/* Design Options */}
        <div>
          <h2 className="font-semibold mb-2">Design</h2>
          <div className="flex flex-wrap gap-2">
            {designs.map((d, idx) => (
              <button
                key={idx}
                className="px-3 py-1 border rounded-full text-sm hover:bg-gray-100"
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Size Options */}
        <div>
          <h2 className="font-semibold mb-2">Size</h2>
          <div className="flex gap-2">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`px-4 py-2 border rounded-full ${
                  size === s ? "border-black font-bold" : "border-gray-300"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selector */}
        <div>
          <h2 className="font-semibold mb-2">Quantity</h2>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              className="px-3 py-1 border rounded-md"
            >
              −
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-1 border rounded-md"
            >
              +
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 mt-6">
          <button className="bg-teal-700 hover:bg-teal-800 text-white py-3 rounded-md">
            Add to bag
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md">
            Buy it now
          </button>
        </div>
      </div>
    </div>
  );
}
