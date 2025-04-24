import { Badge } from "./ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import image from "../assets/growth.png";
import heroImage from "../assets/Dashboard.jpg";
import { motion } from "framer-motion";
// interface FeatureProps {
//   icon: LucideIcon;
//   title: string;
//   description: string;
//   // image: string;
// }

// const features: FeatureProps[] = [
//   {
//     icon: LayoutDashboard,
//     title: "Client Management Dashboard",
//     description:
//       "Manage your clients, leads, and projects all in one place. Replace your spreadsheets and scattered notes.",
//     // image: CRM,
//   },
//   {
//     icon: MessageSquareMore,
//     title: "Community and Chat Support",
//     description:
//       "Create a community for your clients and provide them with chat support. Build a community around your offerings.",
//     // image: Chat,
//   },
// ];

const featureList: string[] = [
  "Client Dashboard",
  "Offerings Management",
  "Payment Integration",
  "Calendar and Scheduling",
  "Stats and Analytics",
  "Community and Chat",
  "Page Builder",
];

export const Features = () => {
  return (
    <section className="container py-12 sm:py-32 mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center gap-10">
          <span className=" inline-block rounded-full px-4 py-1.5 text-sm font-semibold border-[1px] border-primary/40  text-primary">
            Your own dashboard
          </span>
          <h2 className="text-2xl md:text-5xl font-bold text-center">
            Your Whole Business in <br />
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text leading-relaxed">
              One Dashboard
            </span>
          </h2>
          <Carousel className="mx-auto w-full md:max-w-5xl flex flex-wrap md:justify-center">
            <CarouselContent className="-ml-1">
              {featureList.map((feature: string) => (
                <CarouselItem
                  key={feature}
                  className="basis-1/10 md:basis-1/8 pl-2 md:pl-4"
                >
                  <Badge
                    variant="secondary"
                    className="text-xs md:text-sm px-4 md:px-6 py-2 rounded-md"
                  >
                    {feature}
                  </Badge>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:block" />
            <CarouselNext className="hidden md:block" />
          </Carousel>
          {/* <Button className=" text-base">Get Started</Button> */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="mx-auto my-4 flex items-center justify-center"
          >
            <img
              src={heroImage}
              alt="dashboard"
              className="rounded-3xl"
              width={1200} // Use a reasonably large number // Maintain aspect ratio// This Tailwind class will make it take full container width
            />
          </motion.div>
        </div>
        {/* <div className="mx-auto max-w-6xl grid md:grid-cols-2 pt-10">
          {features.map(
            ({ title, description, image, icon: Icon }: FeatureProps) => (
              <Card
                key={title}
                className="bg-transparent border-none shadow-none"
              >
                <CardHeader>
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <CardTitle className="flex items-center gap-3 pt-6 text-xl md:text-2xl">
                    <Icon />
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  {description}
                </CardContent>

                <CardFooter></CardFooter>
              </Card>
            )
          )}
        </div> */}
      </motion.div>
    </section>
  );
};
