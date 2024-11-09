"use client";

import { useState, useEffect } from 'react';
import Layout from './layout';
import { Slider } from '@/components/ui/slider';
import { Toggle } from '@/components/ui/toggle';

export default function Page() {
  const [isYearly, setIsYearly] = useState(false);
  const [pageViews, setPageViews] = useState(100);
  const [price, setPrice] = useState(16);

  const handleToggle = () => setIsYearly(!isYearly);

  const calculatePrice = (views: number) => {
    if (views <= 10) return 8;
    if (views <= 50) return 12;
    if (views <= 100) return 16;
    if (views <= 500) return 24;
    return 36;
  };

  useEffect(() => {
    setPrice(calculatePrice(pageViews));
  }, [pageViews]);

  return (
    <Layout>
      <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto dark:bg-gray-800">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-2xl font-bold">Simple, traffic-based pricing</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Sign up for our 30-day trial. No credit card required.
          </p>
        </header>

        {/* Page Views and Pricing */}
        <div className="flex justify-between w-full text-lg font-semibold">
          <span>{pageViews}K PAGEVIEWS</span>
          <span className="text-3xl font-bold text-blue-500">
            ${isYearly ? (price * 0.75).toFixed(2) : price.toFixed(2)}
            <span className="text-lg text-gray-500"> / month</span>
          </span>
        </div>

        {/* Slider */}
        <Slider
          min={10}
          max={1000}
          step={10}
          value={[pageViews]}
          onValueChange={(value) => setPageViews(value[0])}
          className="w-full my-4"
        />

        {/* Billing Toggle */}
        <div className="flex items-center justify-between w-full">
          <span>Monthly Billing</span>
          <Toggle pressed={isYearly} onPressedChange={handleToggle} className="ml-2">
            <span className="text-gray-500 dark:text-gray-400">Yearly Billing</span>
            <span className="ml-1 text-red-500 font-medium">25% discount</span>
          </Toggle>
        </div>

        {/* Feature List */}
        <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-center mt-6">
          <li>✓ Unlimited websites</li>
          <li>✓ 100% data ownership</li>
          <li>✓ Email reports</li>
        </ul>

        {/* CTA Button */}
        <button className="mt-6 w-full py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all">
          Start my trial
        </button>
      </div>
    </Layout>
  );
}