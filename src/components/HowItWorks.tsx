import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";
import profile from "../assets/1.png";
import product from "../assets/2.png";
import run from "../assets/3.png";

interface FeatureProps {
  title: string;
  description: string;
  number: string;
  image?: string;
}

const features: FeatureProps[] = [
  {
    number: "1",
    image: profile,
    title: "Setup your profile page",
    description:
      "Create a profile page that showcases your offerings and services. Add your logo, bio, and links to your social media.",
  },
  {
    number: "2",
    image: product,
    title: "Create your offerings",
    description:
      "Create your offerings and services. Set up your payment. Share your profile page with your clients.",
  },
  {
    number: "3",
    image: run,
    title: "Start onboarding clients",
    description:
      "Start onboarding clients and leads. Get your business up and running within minutes.",
  },
  // {
  //   icon: <GiftIcon />,
  //   title: "Gamification",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  // },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container py-16 sm:py-24 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <span className="mb-4 inline-block rounded-full px-4 py-1.5 text-sm font-semibold border-[1px] border-primary/40  text-primary">
            How it Works
          </span>
          <h2 className="text-2xl md:text-5xl font-bold mb-8">
            Get Started in 3 Easy Steps.
            {/* <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          3 Steps{" "}
        </span> */}
          </h2>
          {/* <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p> */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map(
              ({ title, description, number, image }: FeatureProps) => (
                <Card
                  key={title}
                  className="bg-muted/50 border-none shadow-none rounded-2xl"
                >
                  <CardHeader>
                    <CardTitle className="grid gap-4 place-items-start leading-normal">
                      <img src={image} alt={title} />
                      <CardContent className="text-primary p-0">
                        {number}
                      </CardContent>
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground text-sm">
                    {description}
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
