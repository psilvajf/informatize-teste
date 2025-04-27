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
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const carouselRef = useRef(null);
  const isCarouselInView = useInView(carouselRef, { once: true, amount: 0.3 });

  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 });

  return (
    <section className="container py-12 sm:py-32 mx-auto px-4">
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center justify-center gap-4">
            <span className=" inline-block rounded-full px-4 py-1.5 text-sm font-semibold border-[1px] border-primary/40  text-primary">
              Your own dashboard
            </span>
            <h2 className="text-2xl md:text-5xl font-bold text-center">
              Your Whole Business in <br />
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text leading-normal">
                One Dashboard
              </span>
            </h2>
            <p className="text-center text-base md:text-lg text-gray-600 dark:text-gray-400">
              Replace multiple tools with one powerful platform
            </p>
          </div>

          <motion.div
            ref={carouselRef}
            initial={{ opacity: 0, y: 20 }}
            animate={
              isCarouselInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
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
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
                <CarouselPrevious className="hidden md:flex pointer-events-auto" />
                <CarouselNext className="hidden md:flex pointer-events-auto" />
              </div>
            </Carousel>
          </motion.div>

          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 1, ease: "easeOut" }}
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
      </motion.div>
    </section>
  );
};
