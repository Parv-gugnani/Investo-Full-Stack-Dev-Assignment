import PricingComponent from "./PricingComponent";
import { ModeToggle } from "@/components/ui/modetoggle";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-10 bg-background text-foreground">
      <div className="fixed top-4 right-4">
        <ModeToggle />
      </div>

      <PricingComponent />
    </div>
  );
};

export default Page;
