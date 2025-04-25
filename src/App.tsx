import { useEffect, useState } from "react";
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
  Loader,
} from "./components";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for actual resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

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
