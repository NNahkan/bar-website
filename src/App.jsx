import AboutUs from "./components/AboutUs";
import Events from "./components/Events";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";

const App = () => {
  return (
    <main className="bg-black">
      <Hero />
      <AboutUs />
      <Events />
      <WhyUs />
    </main>
  );
};

export default App;
