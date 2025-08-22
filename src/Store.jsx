import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // for arrows
import Navbar from "./navbar";
import Footer from "./footer";

export default function ProductPage() {
  const [size, setSize] = useState("2XL");
  const [quantity, setQuantity] = useState(1);
  const [current, setCurrent] = useState(0);

  const designs = [
    "CBP For Life (White) A",
    "CBP Orchid (Charcoal) B",
    "Dear Person (Black) C",
    "Powered By Mnit (Charcoal) D",
,
  ];

  const sizes = ["S", "M", "L", "XL", "2XL"];

  // Product images for slider
  const images = [
    "data:image/jpeg;base64,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",
    "https://images.indianexpress.com/2018/04/avengers-scarletwitch.jpg?w=350",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXOuaGgVmT-PZEKCr3Z14oP5BgrF_PJ7l4Cg&s",
    "data:image/jpeg;base64,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",
    "https://cdn.shopify.com/s/files/1/0104/8733/2915/files/Screenshot_2024-09-26_114419.png?v=1727331276",
  ];

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <Navbar />

      <div
        id="Store"
        className="flex mt-30 flex-col md:flex-row justify-center items-start p-6 md:p-12 gap-10"
      >
        {/* Left side - Product Image Slider */}
        <div className="w-full max-w-md mx-auto ">
          <div className="relative w-full max-w-3xl mx-auto">
            {/* Image */}
              <div className="overflow-hidden h-full rounded-2xl">
              <img
                src={images[current]}
                alt={`Slide ${current + 1}`}
                className="w-full max-h-[500px]  object-cover  duration-500"
              />
            </div>

            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -translate-y-1/2 left-4 bg-black/50 text-white p-2 rounded-full hover:bg-black"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute top-1/2 -translate-y-1/2 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-4 gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    current === idx ? "bg-black" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Product Details */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">CBP T-Shirt</h1>
          <p className="text-lg font-semibold">₹600.00</p>
          <p className="text-sm text-gray-500">
            Tax included.{" "}
            <span className="underline cursor-pointer">Shipping</span>{" "}
            calculated at checkout.
          </p>

          {/* Design Options */}
          <div>
            <h2 className="font-semibold mb-2">Design Available</h2>
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
                        <p className="text-sm text-gray-500 mb-2">
             For reference, the size chart image is at the end of all the images
          </p>
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
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md">
            Buy it now
          </button>
        </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
