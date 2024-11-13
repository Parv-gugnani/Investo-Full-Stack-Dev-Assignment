"use client";

import { useState } from "react";

const PricingComponent = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(2); // Default to 100,000 views at index 2

  // Define the pricing tiers as an array
  const pricingTiers = [
    { views: 10000, price: 8 },
    { views: 50000, price: 12 },
    { views: 100000, price: 16 },
    { views: 500000, price: 24 },
    { views: 1000000, price: 36 },
  ];

  // Calculate price based on current slider index and billing type
  const currentTier = pricingTiers[sliderIndex];
  const price = isYearly ? currentTier.price * 0.75 : currentTier.price;

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md mx-auto text-center">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
        Simple, traffic-based pricing
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mt-2">
        Sign up for our 30-day trial. No credit card required.
      </p>

      <div className="my-4">
        <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          {currentTier.views.toLocaleString()} PAGEVIEWS
        </span>
      </div>

      {/* Slider */}
      <input
        type="range"
        min="0"
        max={pricingTiers.length - 1}
        step="1"
        value={sliderIndex}
        onChange={(e) => setSliderIndex(Number(e.target.value))}
        className="w-full max-w-xs mx-auto appearance-none rounded-full h-2 cursor-pointer bg-gray-200 dark:bg-gray-700"
        style={{
          background: `linear-gradient(to right, ${
            isYearly ? "hsl(174, 86%, 45%)" : "hsl(174, 77%, 80%)"
          } ${(sliderIndex / (pricingTiers.length - 1)) * 100}%, ${
            isYearly ? "hsl(224, 65%, 95%)" : "hsl(225, 20%, 60%)"
          } ${(sliderIndex / (pricingTiers.length - 1)) * 100}%)`,
        }}
      />

      <div className="my-4 text-3xl font-bold text-teal-600 dark:text-teal-400">
        ${price.toFixed(2)} <span className="text-base font-normal text-gray-500 dark:text-gray-400">/ month</span>
      </div>

      {/* Toggle switch for yearly billing */}
      <div className="flex items-center justify-center gap-2 my-4">
        <span className="text-sm text-gray-500 dark:text-gray-400">Monthly Billing</span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          className={`relative inline-flex items-center h-6 w-12 rounded-full transition-colors duration-300 ${
            isYearly ? "bg-teal-600" : "bg-gray-300 dark:bg-gray-600"
          }`}
        >
          <span
            className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
              isYearly ? "translate-x-6" : "translate-x-1"
            }`}
          ></span>
        </button>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Yearly Billing <span className="text-teal-600 dark:text-teal-400">(25% off)</span>
        </span>
      </div>

      <ul className="text-left text-gray-800 dark:text-gray-200 mt-4 space-y-2">
        <li>✓ Unlimited websites</li>
        <li>✓ 100% data ownership</li>
        <li>✓ Email reports</li>
      </ul>

      <button className="w-full bg-teal-600 dark:bg-teal-500 hover:bg-teal-700 dark:hover:bg-teal-400 text-white font-semibold py-2 rounded-md mt-4 transition-colors duration-300">
        Start my trial
      </button>
    </div>
  );
};

export default PricingComponent;
