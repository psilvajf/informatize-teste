import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  LucideIcon,
  MessageSquareMore,
  MessagesSquare,
  SquarePlay,
} from "lucide-react";
import featuresImage from "@/assets/Chat.png";

interface FeatureProps {
  title: string;
  icon: LucideIcon;
}

const features: FeatureProps[] = [
  {
    title: "Interact with your clients directly on your page",
    icon: MessageSquareMore,
  },
  {
    title: "Video feedback as posts",
    icon: SquarePlay,
  },
  {
    title: "All your testimonials at one place",
    icon: MessagesSquare,
  },
];

const FeatureCard = ({ title, icon: Icon }: FeatureProps) => {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: -20 }}
      animate={isCardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="transform-gpu"
    >
      <Card className="group duration-200 w-full h-full items-center border-none shadow-none">
        <CardHeader className="flex flex-row items-start gap-4 p-1">
          <div className="bg-primary/10 rounded-lg p-2 flex items-center justify-center w-10 h-10">
            <Icon className="text-primary size-6" />
          </div>

          <CardTitle className="text-base md:text-lg text-muted-foreground">
            {title}
          </CardTitle>
        </CardHeader>
      </Card>
    </motion.div>
  );
};

export const FeatureTestimonials = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });

  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 });

  return (
    <section
      className="py-10 md:py-20 bg-card rounded-t-[40px] overflow-hidden"
      id="features"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={
            isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {/* Left side component - Content */}
              <div className="order-1 md:order-1 flex flex-col gap-6 items-center md:items-start">
                <motion.h2
                  ref={headingRef}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isHeadingInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  className="text-2xl md:text-4xl font-semibold text-center md:text-left"
                >
                  Let the world know your good work.
                </motion.h2>
                <div className="space-y-4">
                  {features &&
                    features.map((feature, index) => (
                      <FeatureCard key={index} {...feature} />
                    ))}
                </div>
              </div>

              {/* Right side component - Image */}
              <motion.div
                ref={imageRef}
                initial={{ opacity: 0, x: 50 }}
                animate={
                  isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                }
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="order-2 md:order-2"
              >
                <img
                  src={featuresImage}
                  alt="Features illustration"
                  className="w-full"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
