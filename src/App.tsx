import {
  Navbar,
  Hero,
  HowItWorks,
  Features,
  Services,
  Cta,
  Footer,
  ScrollToTop,
  FeaturePage,
  FeatureOfferings,
  FeaturePayments,
  FeatureTestimonials,
  WhyCapes,
} from "./components";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Sponsors /> */}
      <FeaturePage />
      <FeatureOfferings />
      <FeaturePayments />
      <FeatureTestimonials />
      <Features />
      {/* <FeaturesVideoCalling /> */}
      {/* <About /> */}
      <Services />
      <HowItWorks />
      <WhyCapes />
      <Cta />
      {/* <Testimonials /> */}
      {/* <Team /> */}
      {/* <Pricing /> */}
      {/* <Newsletter /> */}
      {/* <FAQ /> */}
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
