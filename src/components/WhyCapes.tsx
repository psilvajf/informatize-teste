import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FeatureProps {
  title: string;
  description: string;
}

// For Next.js projects, image paths should be:
const features: FeatureProps[] = [
  {
    title: "90%",
    description: "of customers spend too much time managing clients manually",
  },
  {
    title: "96%",
    description: "say they struggle to stay connected with their audience",
  },
  {
    title: "97%",
    description: "says they use 4-5 different tools to manage their business",
  },
];

const FeatureCard = ({ title, description }: FeatureProps) => {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isCardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="transform-gpu"
    >
      <Card className="group duration-200 w-full h-full items-center border-none shadow-none">
        <CardHeader className="flex flex-col items-center gap-4 md:gap-10 p-1">
          <CardTitle className="text-5xl md:text-[80px] !font-medium">
            {title}
          </CardTitle>
          <CardDescription className="text-base md:text-xl text-muted-foreground text-center">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
};

export const WhyCapes = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });

  return (
    <section className="py-20 bg-card rounded-[40px]" id="features">
      <div className="container mx-auto px-4">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={
            isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center justify-center pb-10 md:pb-20 gap-4">
            <motion.h2
              ref={headingRef}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-2xl md:text-5xl font-bold md:text-center"
            >
              Why Capes?
            </motion.h2>
            <p className="text-center text-base md:text-lg text-gray-600 dark:text-gray-400">
              Based on our user survey...
            </p>
          </div>

          <div className="mx-auto max-w-4xl grid grid-rows-1 md:grid-cols-3 items-center pt-12 gap-10 md:gap-24">
            {features &&
              features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
