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
      <CardHeader className="flex flex-row gap-3">
        <div className=" bg-primary/10  rounded-lg p-2 flex items-center justify-center w-10 h-10">
          <Icon className="text-primary size-6" />
        </div>

        <CardTitle className="text-xl text-muted-foreground">{title}</CardTitle>
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
          <div className="flex flex-col items-center justify-center gap-4 pb-20">
            <span className="mb-4 inline-block rounded-full px-4 py-1.5 text-sm font-semibold border-[1px] border-primary/40  text-primary">
              Powerful Features
            </span>
            {/* <p className="text-center text-lg text-gray-600 dark:text-gray-400">
              Manage and schedule all your video calls, voice calls and group
              sessions seamlessly with custom payment integrations and
            </p> */}
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-2">
            <img
              src={featuresImage}
              alt="Macbook" // @ai_context: Add alt text
              className="w-full"
            />
            <div className="grid grid-row-1 md:grid-row-2 gap-4">
              <h2 className="text-4xl font-bold">
                Video, Voice, Group Sessions all in one platform.
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400">
                Manage and schedule all your video calls, voice calls and group
                sessions seamlessly with custom payment integrations.
              </p>
              {features &&
                features.map((feature, index) => (
                  <FeatureCard key={index + 1} {...feature} />
                ))}
              {/* <Button className="w-full md:w-1/3 h-14 text-base font-semibold">
                Start Your Store
              </Button> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
