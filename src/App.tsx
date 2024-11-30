import Navbar from "./navbar";
import Hero from "./components/hero";
import Footer from "./footer";
import SocialProof from "./components/social-proof";
import About from "./components/about";
import WhyUs from "./components/why-us";
import SecondCTA from "./components/second-cta";
import SmoothScrolling from "./components/smooth-scrolling";
import Testimonials from './components/Testimonials'
import Amenities from "./components/Amenities";
import Contact from "./components/Contact";
// import FirstCTA from "./components/first-cta";

function App() {
  return (
    <SmoothScrolling>
      <main>
        <Navbar />
        <Hero />
        <SocialProof />
        <About />
        {/* <FirstCTA /> */}
        <WhyUs />
        <SecondCTA />
        <Amenities />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </SmoothScrolling>
  );
}

export default App;
