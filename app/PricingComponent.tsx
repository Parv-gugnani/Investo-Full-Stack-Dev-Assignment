// app/PricingComponent.tsx
"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const PricingComponent = () => {
  const [pageViews, setPageViews] = useState(100000);
  const [isYearly, setIsYearly] = useState(false);

  const pricingMap = {
    10000: 8,
    50000: 12,
    100000: 16,
    500000: 24,
    1000000: 36,
  } as const;

  const monthlyPrice = pricingMap[pageViews as keyof typeof pricingMap];
  const price = isYearly ? monthlyPrice * 0.75 : monthlyPrice;

  return (
    <div className="bg-background text-foreground p-6 md:p-8 rounded-lg shadow-lg max-w-sm md:max-w-md mx-auto text-center dark:shadow-sm dark:shadow-primary/30">
      <h1 className="text-xl md:text-2xl font-bold">Simple, traffic-based pricing</h1>
      <p className="text-sm md:text-base mt-2">Sign up for our 30-day trial. No credit card required.</p>

      <div className="my-4">
        <span className="text-lg md:text-xl font-medium">{pageViews.toLocaleString()} PAGEVIEWS</span>
      </div>

      <Slider
        min={10000}
        max={1000000}
        step={10000}
        value={[pageViews]}
        onValueChange={(value) => setPageViews(value[0])}
        className="w-full max-w-xs mx-auto"
      />


      <div className="my-4 text-2xl md:text-3xl font-bold">
        ${price.toFixed(2)} <span className="text-base font-normal">/ month</span>
      </div>


      <div className="flex items-center justify-center gap-2 my-4">
        <Label className="text-sm">Monthly Billing</Label>
        <Switch checked={isYearly} onCheckedChange={setIsYearly} />
        <Label className="text-sm">Yearly Billing <span className="text-primary-foreground">(25% off)</span></Label>
      </div>

      <ul className="text-sm text-left list-none my-4 space-y-2">
        <li>✓ Unlimited websites</li>
        <li>✓ 100% data ownership</li>
        <li>✓ Email reports</li>
      </ul>

      <Button className="w-full md:w-auto px-6 py-2 mt-4 mx-auto">Start my trial</Button>
    </div>
  );
};

export default PricingComponent;
