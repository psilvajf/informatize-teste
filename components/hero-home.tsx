import React from "react";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-20 text-center">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Transformando ideias em soluções digitais
            </h1>
            <div className="mx-auto max-w-3xl">
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}></div>
                <div data-aos="fade-up" data-aos-delay={600}></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-5 relative w-full">
            <div className="relative">
              <div className="w-full paddingTop-78% pointer-events-none">
                <div className="flex flex-col relative mt-5 min-h-5 min-w-5 w-full">
                  <div className="relative">
                    <video
                      autoPlay
                      muted
                      controls={false}
                      playsInline
                      loop
                      className="w-full h-full object-cover object-center rounded-sm flex flex-col relative mt-5 min-h-5 min-w-5"
                    >
                      <source
                        type="video/mp4"
                        src="https://cdn.builder.io/o/assets%2F421683bafcd74f55a212ef1092732a22%2Fad5be2fd3d884618ab04814aeacfe3c3%2Fcompressed?apiKey=421683bafcd74f55a212ef1092732a22&token=ad5be2fd3d884618ab04814aeacfe3c3&alt=media&optimized=true"
                      />
                    </video>
                    <div className="w-full pt-[70.04048582995948%] pointer-events-none text-0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-1/2 -z-10 pointer-events-none ml-[-112px]"
            >
              <img
                src="/_next/static/media/secondary-illustration.b0a88eed.svg"
                width={1165}
                height={1012}
                alt="Secondary illustration"
                className="max-w-none pointer-events-none"
              />
            </div>
            <button
              aria-label="Watch the video"
              className="relative flex items-center justify-center rounded-2xl bg-transparent border-transparent transition-all duration-600 ease-out-sine delay-200"
            >
              <figure className="relative overflow-hidden rounded-2xl"></figure>
              <span className="absolute block pointer-events-none p-2.5">
                <span className="relative flex items-center gap-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    className="block h-5 w-5 pointer-events-none overflow-hidden"
                  >
                    <path
                      d="M16.85 9.342a1 1 0 0 1 0 1.316l-10 7a1 1 0 0 1-1.55-.835V3.177a1 1 0 0 1 1.55-.835l10 7Z"
                      fill="currentColor"
                    />
                    <path
                      d="M13.768 9.34a.5.5 0 0 1 0 .82l-6.5 4.5a.5.5 0 0 1-.768-.41v-9a.5.5 0 0 1 .768-.42l6.5 4.5Z"
                      fill="currentColor"
                      opacity=".32"
                    />
                  </svg>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
