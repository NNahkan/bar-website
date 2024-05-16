import AboutUs from "./components/AboutUs";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SocailMediaCarousel from "./components/SocailMediaCarousel";
import WhyUs from "./components/WhyUs";

const App = () => {
  return (
    <main className="bg-black">
      <Hero />
      <AboutUs />
      <Events />
      <SocailMediaCarousel />
      <WhyUs />
      <Footer />
    </main>
  );
};

export default App;
