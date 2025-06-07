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
  
        {/* Center content */}
        <div>
            <div>
            <h1 className="text-2xl font-semibold z-10">Spendly</h1>
            </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  