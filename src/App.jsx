import Hero from "./components/home/Hero";
import Navbar from "./components/home/Navbar";
import Features from "./components/home/Features";

function App() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <Hero />
        <Features />
      </div>
    </>
  );
}

export default App;
