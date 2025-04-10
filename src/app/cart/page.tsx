"use client";
import { useState, useEffect } from "react";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import { useRouter } from "next/navigation"; // Correct import for client-side navigation
import Image from "next/image";

const CartPage = () => {
  const [cart, setCart] = useState<any[]>([]);
  const router = useRouter(); // Use useRouter inside a client component

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  const handleRemoveFromCart = (productId: number) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  const handleCheckout = () => {
    router.push("/checkout"); // Use router.push to navigate to the checkout page
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        {cart.length === 0 ? (
          <p className="text-black">Your cart is empty</p>
        ) : (
          <div>
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center mb-4 p-4 border-b border-gray-300"
              >
                <div className="flex items-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-contain mr-4"
                  />
                  <span className="text-lg text-gray-900">{product.name}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xl font-semibold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => handleRemoveFromCart(product.id)}
                    className="ml-4 text-red-600 hover:text-red-800"
                  >
                    <span className="text-xl">×</span>
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center mt-4">
              <span className="text-2xl font-semibold text-gray-900">
                Total: ${calculateTotal().toFixed(2)}
              </span>
              <button
                onClick={handleCheckout}
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 shadow-sm"
              >
                Send Inquiry
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
