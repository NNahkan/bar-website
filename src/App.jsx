import AboutUs from "./components/AboutUs";
import Events from "./components/Events";
import Hero from "./components/Hero";

const App = () => {
  return (
    <main className="bg-black">
      <Hero />
      <AboutUs />
      <Events />
    </main>
  );
};

export default App;
