import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
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
      <div className="max-w6xl mx-auto px-4 sm:px-6">
        <div className="bg-linear-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Talk to Us
            </h2>
            <div className="mb-12 space-y-4">
              <p className="text-xl text-indigo-200/65">
                Transform your industry with AI automation, replacing tedious tasks with innovation. Let us help you grow your business and maximize your impact.
              </p>
            </div>
            
            <div className="mx-auto max-w-lg rounded-lg border border-gray-800 bg-gray-800/20 p-6">
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm text-indigo-200/65">Name*</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full rounded border border-gray-700 bg-gray-800/40 px-3 py-2 text-gray-200 focus:border-indigo-500 focus:outline-none" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm text-indigo-200/65">E-mail*</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full rounded border border-gray-700 bg-gray-800/40 px-3 py-2 text-gray-200 focus:border-indigo-500 focus:outline-none" 
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="mb-1 block text-sm text-indigo-200/65">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full rounded border border-gray-700 bg-gray-800/40 px-3 py-2 text-gray-200 focus:border-indigo-500 focus:outline-none" 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm text-indigo-200/65">How can we help automate your business?*</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full rounded border border-gray-700 bg-gray-800/40 px-3 py-2 text-gray-200 focus:border-indigo-500 focus:outline-none"
                    required
                    placeholder="Tell us about your current processes and automation goals..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
                >
                  Optimize. Automate. Elevate.
                </button>
                
                <p className="text-xs text-indigo-200/50 text-center">
                  We'll get back to you within 24 hours to discuss how we can help automate your business processes
                  and increase your productivity.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
