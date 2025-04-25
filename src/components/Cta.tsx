import { buttonVariants } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="py-8 md:py-16 my-24 sm:mb-20 max-w-6xl mx-auto px-4 rounded-3xl"
    >
      <div className="container place-items-center">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            You already change lives,
            <br />
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text leading-relaxed">
              {" "}
              let's make it easier.{" "}
            </span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-4 mb-8 leading-normal text-center md:px-48">
            {/* Let's remove all the manuals.
            <br /> */}
            Stop wasting time and effort managing everthing manually.
            {/* Join{" "}<b>CAPES.APP</b> and focus on what you love doing most. */}
          </p>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center">
            <a
              href="https://app.youform.com/forms/bo1getwx"
              target="_blank"
              className={`w-full md:w-1/5 md:h-14 text-base font-semibold custom-gradient-border ${buttonVariants(
                {
                  variant: "default",
                }
              )}`}
            >
              Start Now
            </a>
            <a
              rel="noreferrer noopener"
              href="https://calendar.app.google/sVcQwekYrRbL9mbQ6"
              target="_blank"
              className={`w-full md:w-1/5  md:h-14 text-base font-semibold ${buttonVariants(
                {
                  variant: "outline",
                }
              )}`}
            >
              Book a Demo
            </a>
          </div>
        </div>

        {/* <div className="space-y-4 lg:col-start-2"> */}
        {/* <Button className="w-full md:mr-4 md:w-auto">Request a Demo</Button>
          <Button variant="outline" className="w-full md:w-auto">
            View all features
          </Button> */}
        {/* </div> */}
      </div>
    </section>
  );
};
