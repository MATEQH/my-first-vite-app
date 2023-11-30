import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="mx-2 sm:mx-4 md:mx-12 lg:mx-32">
        <HeroSection />
      </div>
    </>
  );
}

export default App;
