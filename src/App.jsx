import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Features from "./components/Features";

function App() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <HeroSection />
        <Features />
      </div>
    </>
  );
}

export default App;
