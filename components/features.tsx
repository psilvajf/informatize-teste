import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Transform Your Business
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Elevate Your Business with Proven AI Solutions
            </h2>
            <p className="text-lg text-indigo-200/65 text-justify">
              Streamline your operations, boost productivity, and unlock new growth opportunities with our AI-powered automation solutions.
            </p>
          </div>
          
          {/* Mission Statement */}
          <div className="mx-auto max-w-3xl mb-16 text-center">
            <p className="text-lg text-indigo-200/65 mb-6 text-justify">
              With 3 years of experience delivering AI solutions to dozens of satisfied customers, we've mastered the art of transforming businesses through automation. Our team brings together decades of combined expertise in fintech, startups, design, and business operations.
            </p>
          </div>
          
          {/* Say Goodbye/Hello Sections */}
          <div className="mx-auto grid gap-12 sm:grid-cols-2 md:gap-x-14 md:gap-y-16">
            {/* Say Goodbye To */}
            <div className="bg-gray-800/20 border border-gray-800 rounded-xl p-8">
              <h3 className="font-nacelle text-xl font-semibold text-gray-200 mb-6">
                Say Goodbye To:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="text-indigo-200/65">Potential clients lost due to slow follow-ups</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="text-indigo-200/65">Wasted hours chasing unqualified leads</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="text-indigo-200/65">Repetitive tasks that drain your energy</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="text-indigo-200/65">Manual data entry and error-prone processes</span>
                </li>
              </ul>
            </div>
            
            {/* Say Hello To */}
            <div className="bg-gray-800/20 border border-gray-800 rounded-xl p-8">
              <h3 className="font-nacelle text-xl font-semibold text-gray-200 mb-6">
                Say Hello To:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-indigo-200/65">More qualified leads and higher conversion rates</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-indigo-200/65">Reduced admin hours, giving you more time for customers</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-indigo-200/65">Innovative AI solutions that set you apart in your industry</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-indigo-200/65">Scalable systems that grow with your business</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
