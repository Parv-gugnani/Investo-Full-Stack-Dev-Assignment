import DotPattern from "@/components/ui/dot-pattern";
import PricingComponent from "./PricingComponent";
import { ModeToggle } from "@/components/ui/modetoggle";



export default function Page() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 md:p-10 bg-background text-foreground">
      {/* Theme toggle in fixed position */}
      <div className="fixed top-4 right-4 z-10">
        <ModeToggle />
      </div>


      {/* Pricing Component with background pattern */}
      <div className="absolute inset-0 -z-10 opacity-50">
        {/* Dot Pattern background component */}
        <DotPattern
          className="w-full h-full"
          style={{
            backgroundColor: "transparent",
            color: "green", // Light theme color
          }}
          data-theme="light"
        />
        <DotPattern
          className="w-full h-full dark:block hidden"
          style={{
            backgroundColor: "transparent",
            color: "default", // Dark theme color or default
          }}
        />
      </div>

      {/* Main content */}
      <PricingComponent />
    </div>
  );
}
