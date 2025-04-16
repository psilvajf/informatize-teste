import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
// import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
// import { Star } from "lucide-react";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-14 md:py-16 gap-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className=" md:px-14 text-start space-y-6"
      >
        <div className="flex items-center  border-[1px] px-4 border-amber-400 rounded-full w-fit h-fit p-2">
          <span className="relative flex h-2 w-2" data-svelte-h="svelte-n36up">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>{" "}
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
          </span>
          &nbsp;&nbsp;
          <span
            className={cn(
              `animate-gradient inline bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-sm md:text-base`
            )}
          >
            Coming Soon
          </span>
          &nbsp;&nbsp;🚀
          {/* <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
        </div>
        <main className="text-4xl md:text-5xl font-bold">
          {/* <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Shadcn
            </span>{" "}
            landing page
          </h1>{" "}
          for{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              React
            </span>{" "}
            developers
          </h2> */}
          <h3>
            Every superhero needs a{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              cape{" "}
            </span>
            - Set your business to autopilot.
          </h3>
        </main>

        <p className="text-base md:text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          The one-stop solution for creators, coaches, teachers, and
          professionals to build, grow, and manage their digital business.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3 md:h-14 text-base font-semibold">
            Start Your Store
          </Button>

          <a
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3  md:h-14 text-base font-semibold ${buttonVariants(
              {
                variant: "outline",
              }
            )}`}
          >
            Book a Demo
          </a>
        </div>
        {/* users */}
        {/* <div>
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <div className="avatars">
              <img
                src="https://cdn.prod.website-files.com/5d9e2dcfb42b612b558be2f9/679cc4d13d1e7ab126b58895_Avatars.png"
                loading="lazy"
                alt=""
                height={48}
                width={140}
              />
            </div>
            <div>
              <div className="trustpilot flex items-center gap-1">
                <Star className="fill-green-600 text-green-600 h-4 w-4" />
                <div className="text-muted-foreground">4.6/5 on Trustpilot</div>
              </div>
              <div className="already-trusted-by-40000">
                1000+ superhero creators
              </div>
            </div>
          </div>
        </div> */}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center px-14 lg:text-start space-y-6"
      >
        {/* Hero cards sections */}
        <div className="z-10 px-10 lg:px-0">
          <HeroCards />
        </div>

        {/* Shadow effect */}
        <div className="shadow"></div>
      </motion.div>
    </section>
  );
};
