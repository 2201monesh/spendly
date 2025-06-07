import { Button } from "@/components/ui/button";
import { BiMoneyWithdraw } from "react-icons/bi";
import { Link } from "react-router-dom";

function Home() {
  function toggleTheme() {
    const root = document.documentElement;
    root.classList.toggle("dark");
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-background text-foreground transition-colors">
      {/* Top border with space from top */}
      <div className="pointer-events-none fixed top-16 left-0 right-0">
        <div className="border-t border-dashed border-border w-full" />
      </div>

      {/* Bottom border with space from bottom */}
      <div className="pointer-events-none fixed bottom-16 left-0 right-0">
        <div className="border-b border-dashed border-border w-full" />
      </div>

      {/* Left and right borders with space from top and bottom */}
      <div className="pointer-events-none fixed top-0 bottom-0 left-16 right-16 flex justify-between">
        <div className="border-l border-dashed border-border h-full" />
        <div className="border-r border-dashed border-border h-full" />
      </div>

      <div className="flex flex-col items-center">
        {/* Logo + Title grouped together */}
        <div className="flex items-center mb-1.5">
          <div className="flex items-center justify-center bg-primary text-primary-foreground w-12 h-12 mr-2 rounded-lg">
            <BiMoneyWithdraw size={32} />
          </div>
          <h1 className="text-5xl font-semibold font-instrument">Spendly</h1>
        </div>

        {/* Tagline */}
        <p className="text-sm text-muted-foreground font-inter mt-2">
          Your finances, organized and simplified.
        </p>

        <div className="flex mt-6 gap-2">
          <Button asChild>
            <Link to="/dashboard">Get Started</Link>
          </Button>

          <Button variant="secondary" onClick={toggleTheme}>
            Switch Theme
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
