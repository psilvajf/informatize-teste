import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="py-16 mb-24 sm:mb-20 max-w-6xl mx-auto px-4 rounded-3xl bg-primary/5"
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
          <p className="text-muted-foreground text-base md:text-xl mt-4 mb-8 lg:mb-8 leading-normal">
            {/* Let's remove all the manuals.
            <br /> */}
            Stop wasting time and effort managing everthing manually. Join{" "}
            <b>CAPES.APP</b> and focus on what you love doing most.
          </p>
          <div className="space-y-4 md:space-y-8 lg:col-start-2">
            <Button className="w-full md:mr-4 md:w-auto">Start now</Button>
            <a
              href="https://calendar.app.google/ov6LZxu76YHaBwLm6"
              target="_blank"
            >
              <Button variant="outline" className="w-full md:w-auto">
                Request a Demo
              </Button>
            </a>
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
