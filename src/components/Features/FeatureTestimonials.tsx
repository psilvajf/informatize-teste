import { Card, CardHeader, CardTitle } from "@/components/ui/card";
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
  return (
    <div className="transform-gpu">
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
    </div>
  );
};

export const FeatureTestimonials = () => {
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
              <h2 className="text-2xl md:text-4xl font-semibold text-center md:text-left">
                Let the world know your good work.
              </h2>
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
