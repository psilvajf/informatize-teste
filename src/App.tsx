import {
  Navbar,
  Hero,
  About,
  HowItWorks,
  Features,
  Services,
  Cta,
  Testimonials,
  Team,
  Pricing,
  Newsletter,
  FAQ,
  Footer,
  ScrollToTop,
  FeaturesVideoCalling,
} from "./components";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Sponsors /> */}
      <FeaturesVideoCalling />
      {/* <About /> */}
      <Features />
      <Services />
      <HowItWorks />
      <Cta />
      {/* <Testimonials /> */}
      {/* <Team /> */}
      {/* <Pricing /> */}
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
