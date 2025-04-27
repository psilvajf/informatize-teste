import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BellRing, CreditCard, History, LucideIcon } from "lucide-react";
import featuresImage from "@/assets/CRM.png";

interface FeatureProps {
  title: string;
  icon: LucideIcon;
}

const features: FeatureProps[] = [
  {
    title: "No more payment delays",
    icon: History,
  },
  {
    title: "Setup all your payments & subscriptions to autopilot",
    icon: CreditCard,
  },
  {
    title: "Timely notifications for all your needs",
    icon: BellRing,
  },
];

const FeatureCard = ({ title, icon: Icon }: FeatureProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
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

export const FeaturePayments = () => {
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, amount: 0.2 });

  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true, amount: 0.2 });

  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });

  return (
    <section
      className="py-10 md:py-20 bg-card rounded-t-[40px] overflow-hidden"
      id="features"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left side component - Image */}
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, x: -50 }}
              animate={
                isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="order-2 md:order-1"
            >
              <img
                src={featuresImage}
                alt="Features illustration"
                className="w-full"
              />
            </motion.div>

            {/* Right side component - Content */}
            <motion.div
              ref={contentRef}
              initial={{ opacity: 0, y: 40 }}
              animate={
                isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
              }
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="order-1 md:order-2 flex flex-col gap-6 items-center md:items-start"
            >
              <motion.h2
                ref={headingRef}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="text-2xl md:text-4xl font-semibold text-center md:text-left"
              >
                Manage all your payments and notifications
              </motion.h2>

              <div className="space-y-4">
                {features &&
                  features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                  ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
