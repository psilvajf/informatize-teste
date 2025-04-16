// import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { LucideIcon, Undo2, UserRoundCheck, Users } from "lucide-react";
import featuresImage from "@/assets/Video Calling.png";
// import { Button } from "@/components/ui/button";

interface FeatureProps {
  title: string;
  icon: LucideIcon;
}

// For Next.js projects, image paths should be:
const features: FeatureProps[] = [
  {
    title: "Replace Zoom and Meet",
    icon: Undo2,
  },
  {
    title: "Manage 1-1 Consultations and appointments",
    icon: UserRoundCheck,
  },
  {
    title: "Conduct live webinars, workshops and classes",
    icon: Users,
  },
  // {
  //   description:
  //     "All your notes, bookmarks, inspiration, articles and images in one single, private place.",
  //   imageUrl: "/illustration.png", // Remove the @/public part
  //   imageAlt: "Analytics dashboard",
  // },
];

const FeatureCard = ({ title, icon: Icon }: FeatureProps) => (
  <motion.div
    // whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="transform-gpu"
  >
    <Card className="group duration-200 w-full h-full items-center bg-background border-none shadow-none">
      <CardHeader className="flex flex-row items-center gap-3">
        <div className=" bg-primary/10  rounded-lg p-2 flex items-center justify-center w-10 h-10">
          <Icon className="text-primary size-6" />
        </div>

        <CardTitle className="text-base md:text-lg text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
    </Card>
  </motion.div>
);
export const FeaturesVideoCalling = () => {
  return (
    <section className="py-20 bg-card rounded-t-[40px]" id="features">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {/* Left side component - Image */}
              <div className="order-2 md:order-1">
                <img
                  src={featuresImage}
                  alt="Features illustration"
                  className="w-full"
                />
              </div>

              {/* Right side component - Content */}
              <div className="order-1 md:order-2 flex flex-col gap-6 items-center md:items-start ">
                <div>
                  <span className="mb-4 inline-block rounded-full px-4 py-1.5 text-sm font-semibold border-[1px] border-primary/40 text-primary">
                    Features
                  </span>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left">
                  Video, Voice, Group Sessions all in one platform.
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-400 text-center md:text-left">
                  Manage and schedule all your video calls, voice calls and
                  group sessions seamlessly with custom payments.
                </p>
                <div className="space-y-4">
                  {features &&
                    features.map((feature, index) => (
                      <FeatureCard key={index} {...feature} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
