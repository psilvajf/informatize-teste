// import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  Layers2,
  LucideIcon,
  UserRoundCheck,
  Users,
} from "lucide-react";
import featuresImage from "@/assets/Video Calling.png";

interface FeatureProps {
  title: string;
  icon: LucideIcon;
}

// For Next.js projects, image paths should be:
const features: FeatureProps[] = [
  {
    title: "1:1 paid sessions",
    icon: UserRoundCheck,
  },
  {
    title: "Group sessions & workshops",
    icon: Users,
  },
  {
    title: "Multiple sessions under one package",
    icon: Layers2,
  },
  {
    title: "Streamline scheduling for repeated sessions",
    icon: Calendar,
  },
];

const FeatureCard = ({ title, icon: Icon }: FeatureProps) => {
  return (
    <div className="transform-gpu">
      <Card className="group duration-200 w-full h-full items-center border-none shadow-none">
        <CardHeader className="flex flex-row items-start gap-4 p-1">
          <div className=" bg-primary/10  rounded-lg p-2 flex items-center justify-center w-10 h-10">
            <Icon className="text-primary size-6" />
          </div>

          <CardTitle className="text-base md:text-lg text-muted-foreground">
            {title}
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
};

export const FeatureOfferings = () => {
  return (
    <section
      className="py-10 md:py-20 bg-card rounded-t-[40px] overflow-hidden"
      id="features"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left side component - Content */}
            <div className="order-1 md:order-1 flex flex-col gap-6 items-center md:items-start">
              <div>
                <h2 className="text-2xl md:text-4xl font-semibold text-center md:text-left">
                  Your clients deserves the best.
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 text-center md:text-left mt-3">
                  Provide seamless experience to your clients for all your
                  offerings and services.
                </p>
              </div>

              <div className="space-y-4">
                {features &&
                  features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                  ))}
              </div>
            </div>

            {/* Right side component - Image */}
            <div className="order-2 md:order-2">
              <img
                src={featuresImage}
                alt="Features illustration"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
