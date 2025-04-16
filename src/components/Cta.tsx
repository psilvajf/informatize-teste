import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="py-16 my-24 sm:my-20 max-w-6xl mx-auto px-4 rounded-3xl bg-primary/5"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-2xl md:text-4xl font-bold">
            You already change lives,
            <br />
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text leading-relaxed">
              {" "}
              let's make it easier.{" "}
            </span>
          </h2>
          <p className="text-muted-foreground text-base md:text-xl mt-4 mb-8 lg:mb-0 leading-normal">
            {/* Let's remove all the manuals.
            <br /> */}
            Join <b>CAPES.APP</b> and start offering 1:1 sessions that flows.
          </p>
          <div className="space-y-4 md:space-y-8 lg:col-start-2">
            <Button className="w-full md:mr-4 md:w-auto">Start now</Button>
            <Button variant="outline" className="w-full md:w-auto">
              Request a Demo
            </Button>
          </div>
        </div>

        <div className="space-y-4 lg:col-start-2">
          {/* <Button className="w-full md:mr-4 md:w-auto">Request a Demo</Button>
          <Button variant="outline" className="w-full md:w-auto">
            View all features
          </Button> */}
        </div>
      </div>
    </section>
  );
};
