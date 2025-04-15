/*
<ai_context>
This client component provides the features section for the landing page.
</ai_context>
*/

"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

import {
  LucideIcon,
  Video,
  Presentation,
  HandCoins,
  Banknote,
} from "lucide-react";

interface ServiceProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  backgroundColor?: string;
}

const features: ServiceProps[] = [
  {
    title: "1:1 Sessions",
    description:
      "Monetize your time and expertise with 1:1 sessions, consultations, and coaching.",
    icon: Video,
    iconColor: "text-primary",
    backgroundColor: "bg-primary/10",
  },
  {
    title: "Group Sessions",
    description:
      "Seamlesly host and manage group classes, webinars, and workshops.",
    icon: Presentation,
    iconColor: "text-orange-500",
    backgroundColor: "bg-orange-500/10",
  },
  {
    title: "Digital Products",
    description: "Create and sell digital products, courses, and content.",
    icon: HandCoins,
    iconColor: "text-pink-500",
    backgroundColor: "bg-pink-500/10",
  },
  {
    title: "Payments & Subscriptions",
    description:
      "Create and accept payments, manage subscriptions for your products and services.",
    icon: Banknote,
    iconColor: "text-green-500",
    backgroundColor: "bg-green-500/10",
  },
];

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  iconColor,
  backgroundColor,
}: ServiceProps) => (
  <motion.div
    // whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="transform-gpu"
  >
    <Card className="group transition-shadow duration-200 w-full h-full border-none rounded-3xl">
      <CardHeader className="flex gap-3">
        <div
          className={`${backgroundColor} rounded-xl p-2 flex items-center justify-center w-10 h-10`}
        >
          <Icon className={`${iconColor} size-6`} />
        </div>

        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
    </Card>
  </motion.div>
);

export const Services = () => {
  return (
    <section id="services" className=" my-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center justify-center pb-20 gap-4">
            <span className="mb-4 inline-block rounded-full px-4 py-1.5 text-sm font-semibold border-[1px] border-primary/40  text-primary">
              Offerings
            </span>
            <h2 className="text-2xl md:text-5xl font-bold md:text-center">
              Offerings for every need.
            </h2>
            <p className="text-center text-base md:text-lg text-gray-600 dark:text-gray-400">
              Fully integrated services and products you can start offering in
              minutes
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-4 md:gap-8 grid-cols-2">
            {features.map((feature, index) => (
              <ServiceCard key={index} {...feature} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
