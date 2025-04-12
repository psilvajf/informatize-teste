import Image from "next/image";
import Link from "next/link";

const engineers = [
  {
    name: "Claudio Canales",
    role: "Founder & Lead Engineer",
    image: "/images/claudio.jpg",
    twitter: "https://twitter.com/klaudioz",
    linkedin: "https://www.linkedin.com/in/canalesclaudio/",
    website: "https://claud.dev",
    description: "A passionate technologist with 15+ years of experience, Claudio holds multiple cloud certifications and a CS Master's degree. As a top 1% Replit bounty hunter, he specializes in AI chatbot development and cloud infrastructure. His expertise spans across AWS, GCP, Azure, Kubernetes, and DevOps practices. Claudio's journey from being the first college graduate in his family to becoming a successful engineer and entrepreneur is a testament to his determination and technical excellence."
  },
  {
    name: "Fawzi Chibah",
    role: "Senior Engineer",
    image: "/images/john.jpg",
    twitter: "https://x.com/FawziChibah",
    linkedin: "https://www.linkedin.com/in/fawzi-chibah/",
    website: "https://johndoe.com",
    description: "A skilled software engineer with expertise in full-stack development and system architecture. Fawzi brings extensive experience in building scalable applications and implementing efficient solutions. His technical proficiency and problem-solving abilities make him a valuable asset to the Kytzo team."
  }
];

export default function Engineers() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Meet Our Engineers
            </h2>
            <p className="text-lg text-indigo-200/65">
              The talented individuals behind Kytzo's innovative solutions
            </p>
          </div>

          {/* Engineers grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {engineers.map((engineer, index) => (
              <div key={index} className="rounded-lg bg-gray-800/20 p-6">
                <div className="flex flex-col items-center">
                  <div className="mb-4 h-48 w-48 overflow-hidden rounded-full">
                    <Image
                      src={engineer.image}
                      width={192}
                      height={192}
                      alt={engineer.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mb-1 font-nacelle text-xl font-semibold text-gray-200">
                    {engineer.name}
                  </h3>
                  <p className="mb-4 text-sm text-indigo-200/65">{engineer.role}</p>
                  <p className="mb-6 text-sm text-indigo-200/65 text-center">
                    {engineer.description}
                  </p>
                  <div className="flex space-x-4">
                    <Link
                      href={engineer.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-200/65 hover:text-indigo-500"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </Link>
                    <Link
                      href={engineer.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-200/65 hover:text-indigo-500"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </Link>
                    <Link
                      href={engineer.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-200/65 hover:text-indigo-500"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.007 1.725-.02 2.544-.117.232 1.033.384 2.143.45 3.132h-2.994zm0-5.014v-3.661c.748.376 1.352.844 1.957 1.489-.547.359-1.093.699-1.957 1.172zm2.703-3.267c1.546.94 2.709 2.351 3.257 4.032-1.044-.951-2.601-1.486-3.257-1.743.24-.521.386-1.092.386-1.707 0-.196-.013-.388-.031-.576.34-.034.682-.052 1.022-.052.31 0 .618.016.922.049-.39-.63-.97-1.13-1.647-1.47.178-.039.36-.059.543-.059.203 0 .404.024.6.071-.666-.45-1.394-.784-2.18-1.01.178-.02.36-.031.543-.031.234 0 .465.019.693.054zm-8.66 12.088h2.994v-3.066h-2.994c.059 1.143.212 2.24.456 3.279-.823-.12-1.674-.188-2.538-.222zm-2.538 1.222c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm1.957-8.242v-3.015c.868-.007 1.725-.02 2.544-.117.232 1.033.384 2.143.45 3.132h-2.994zm-2.544-3.117c.819.097 1.676.11 2.544.117v-3.015c-.864-.473-1.41-.813-1.957-1.172.605-.645 1.209-1.113 1.957-1.489v-3.661c-.748.376-1.352.844-1.957 1.489-.547.359-1.093.699-1.957 1.172v3.015c.868.007 1.725.02 2.544.117zm-2.544 2.117h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222v-3.057zm-2.538 1.222c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm1.957 2.162v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm2.538-1.222c.823-.12 1.674-.188 2.538-.222v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279zm.456-5.279h-2.994c.059-1.143.212-2.24.456-3.279.823.12 1.674.188 2.538.222v2.835zm2.538-1.222c.499-1.33 1.159-2.497 1.957-3.456v3.62c-.666-.028-1.319-.081-1.957-.164zm-1.957-2.162v-3.62c.798.959 1.458 2.126 1.957 3.456-.638.083-1.291.136-1.957.164zm-2.538 1.222c.823-.12 1.674-.188 2.538-.222v3.057h-2.994c.059-1.143.212-2.24.456-3.279zm-.456 5.279h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222v-3.057z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 