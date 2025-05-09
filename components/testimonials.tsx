export default function Testimonials() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Don't take our word for it
            </h2>
            <p className="text-xl text-indigo-200/65">
              We provide tech-first solutions that empower decision-makers to
              build healthier and happier workspaces from anywhere in the world.
            </p>
          </div>

          {/* Testimonial grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div></div>
            <div></div>
            <div></div>
            <div className="mt-0"></div>
            <div className="mt-0"></div>
            <div className="mt-0"></div>
            <div className="mt-0"></div>
            <div className="mt-0"></div>
            <div className="mt-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
