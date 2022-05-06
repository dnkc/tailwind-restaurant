import Categories from "./components/Categories";
import Collections from "./components/Collections";
import Contact from "./components/Contact";
import Discover from "./components/Discover";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Teams from "./components/Teams";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Discover />
      <Collections />
      <Teams />
      <Testimonials />
      <Contact />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
