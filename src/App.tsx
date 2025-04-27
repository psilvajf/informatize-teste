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
import hero from "@/assets/hero.webp"; // Import the hero image

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // First effect: Preload critical images
  useEffect(() => {
    const imagePromises: Promise<void>[] = [];
    // Add all critical images that need to be preloaded
    const imagesToPreload = [hero];

    imagesToPreload.forEach((src) => {
      const image = new Image();
      const promise: Promise<void> = new Promise((resolve) => {
        image.onload = () => resolve();
        image.onerror = () => resolve(); // Continue even if image fails to load
      });

      image.src = src;
      imagePromises.push(promise);
    });

    // When all images have loaded (or failed to load)
    Promise.all(imagePromises).then(() => {
      console.log("All critical images loaded");
      setImagesLoaded(true);
    });
  }, []);

  // Second effect: Handle timer and final loading state
  useEffect(() => {
    // Only start the timer after images have loaded
    if (imagesLoaded) {
      console.log("Starting final loading timer");
      const timer = setTimeout(() => {
        setIsLoading(false);
      });

      return () => clearTimeout(timer);
    }
  }, [imagesLoaded]);

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
