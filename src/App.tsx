import {
  Navbar,
  Hero,
  HowItWorks,
  Features,
  Services,
  Cta,
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
      <Features />
      <FeaturesVideoCalling />
      {/* <About /> */}
      <Services />
      <HowItWorks />
      <Cta />
      {/* <Testimonials /> */}
      {/* <Team /> */}
      {/* <Pricing /> */}
      {/* <Newsletter /> */}
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
