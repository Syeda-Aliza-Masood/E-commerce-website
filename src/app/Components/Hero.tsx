"use client"; // Ensures this is a Client Component

import { useRouter } from 'next/navigation'; // Use the correct import for client-side navigation

const Hero = () => {
  const router = useRouter(); // useRouter hook for client-side navigation

  const handleGetStartedClick = () => {
    router.push('/products'); // Navigate to the products page when 'Get Started' is clicked
  };

  return (
    <section className="bg-white text-green-900 py-20 px-6 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Sell Smarter, Not Harder
          </h1>
          <p className="mt-4 text-lg text-green-800">
            Create catalogs, manage orders, and grow your business — all from your phone.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={handleGetStartedClick} // Trigger navigation on button click
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg "
            >
              Get Started
            </button>
            <button className="border border-green-600 text-green-700 hover:bg-gray-200 px-6 py-3 rounded-lg ">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image - Increased Size with Rounded Corners */}
        <div className="mt-10 lg:mt-0">
          <img
            src="/2.png"
            alt="Hero Illustration"
            className="w-[600px] h-auto mx-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
