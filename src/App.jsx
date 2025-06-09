import React, { useState } from "react";
import { Smile } from "lucide-react";

const products = [
  "Chilli Crackers",
  "Soya Milk",
  "Containers",
  "Pasta",
  "Washing Up Liquid",
];

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "",
    quantity: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order submitted! We’ll be in touch shortly.");
  };

  return (
    <div className="min-h-screen bg-[#F1FAEA] text-[#4E3414] p-6 font-sans">
      <header className="flex items-center justify-between bg-[#6F4616] text-white px-6 py-4 rounded-2xl shadow">
        <h1 className="text-3xl font-bold">ON THE WEIGH</h1>
        <Smile className="text-white w-8 h-8" />
      </header>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <p className="font-medium">{product}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="my-12 bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Place an Order</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            name="product"
            placeholder="Product(s) Requested"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="quantity"
            placeholder="Quantity"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <textarea
            name="notes"
            placeholder="Any notes or requests?"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-[#6E9377] text-white px-4 py-2 rounded shadow hover:bg-[#5E8267]"
          >
            Submit Order
          </button>
        </form>
      </section>

      <footer className="text-center mt-10 text-sm text-[#4E3414]">
        Follow us on{" "}
        <a
          href="https://www.facebook.com/people/On-The-Weigh/61576106186170/"
          className="underline text-[#5E6737]"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
        . We support refill, reuse & zero-waste living 🌱
      </footer>
    </div>
  );
}