import { BiMoneyWithdraw } from "react-icons/bi";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Top border with space from top */}
      <div className="pointer-events-none fixed top-14 left-0 right-0">
        <div className="border-t border-dashed border-black w-full" />
      </div>

      {/* Bottom border with space from bottom */}
      <div className="pointer-events-none fixed bottom-14 left-0 right-0">
        <div className="border-b border-dashed border-black w-full" />
      </div>

      {/* Left and right borders with space from top and bottom */}
      <div className="pointer-events-none fixed top-0 bottom-0 left-14 right-14 flex justify-between">
        <div className="border-l border-dashed border-black h-full" />
        <div className="border-r border-dashed border-black h-full" />
      </div>

      <div className="flex flex-col items-center">
        {/* Logo + Title grouped together */}
        <div className="flex items-center mb-1.5">
          <div className="flex items-center justify-center bg-[#615AE9] w-12 h-12 mr-2 rounded-lg">
            <BiMoneyWithdraw size={32} className="text-white" />
          </div>
          <h1 className="text-5xl font-semibold font-instrument">Spendly</h1>
        </div>

        {/* Paragraph takes full width */}
        <p className="text-sm">Your finances, organized and simplified.</p>
        <div className="flex mt-2 gap-2">
          <button className="bg-[#615AE9] text-white px-4 py-1 rounded-lg cursor-pointer">
            Get Started
          </button>
          <button className="bg-gray-100 text-black px-4 py-1 rounded-lg cursor-pointer">
            Switch Theme
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
