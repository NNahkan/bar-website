import AboutUs from "./components/AboutUs";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import QuickMenu from "./components/QuickMenu";
 import WhyUs from "./components/WhyUs";

const App = () => {
  return (
    <main className="bg-black">
      <Hero />
      <QuickMenu />
      <AboutUs />
      <Events />
       <WhyUs />
      <Footer />
    </main>
  );
};

export default App;
