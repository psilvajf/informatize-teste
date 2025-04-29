import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import profile from "../assets/1.png";
import product from "../assets/2.png";
import run from "../assets/3.png";

interface FeatureProps {
  title: string;
  description: string;
  number: string;
  image?: string;
}

const features: FeatureProps[] = [
  {
    number: "1",
    image: profile,
    title: "Setup your profile page",
    description:
      "Create a profile page that showcases your offerings and services. Add your logo, bio, and links to your social media.",
  },
  {
    number: "2",
    image: product,
    title: "Create your offerings",
    description:
      "Create your offerings and services. Set up your payment. Share your profile page with your clients.",
  },
  {
    number: "3",
    image: run,
    title: "Start onboarding clients",
    description:
      "Start onboarding clients and leads. Get your business up and running within minutes.",
  },
];

const FeatureCard = ({ title, description, number, image }: FeatureProps) => {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isCardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Card className="bg-muted/50 border-none shadow-none rounded-2xl">
        <CardHeader>
          <CardTitle className="grid gap-4 place-items-start leading-normal">
            <img src={image} alt={title} />
            <CardContent className="text-primary p-0">{number}</CardContent>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          {description}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const HowItWorks = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });

  return (
    <section id="howItWorks" className="container py-16 sm:py-24 max-w-6xl">
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <span className="mb-4 inline-block rounded-full px-4 py-1.5 text-sm font-semibold border-[1px] border-primary/40  text-primary">
            How it Works
          </span>
          <h2
            ref={titleRef}
            className="text-2xl md:text-5xl font-bold mb-8"
            style={{
              opacity: isTitleInView ? 1 : 0,
              transform: isTitleInView ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            }}
          >
            Get Started in 3 Easy Steps.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
