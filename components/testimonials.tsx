"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";
import Image, { StaticImageData } from "next/image";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import ClientImg01 from "@/public/images/client-logo-01.svg";
import ClientImg02 from "@/public/images/client-logo-02.svg";
import ClientImg03 from "@/public/images/client-logo-03.svg";

const testimonials = [
  {
    img: TestimonialImg01,
    clientImg: ClientImg01,
    name: "Sampei Omichi",
    company: "CEO Ellis",
    content:
      "WIP",
  },
  {
    img: TestimonialImg02,
    clientImg: ClientImg02,
    name: "Horacio Lopez",
    company: "Business Operations at Replit",
    content:
      "Claudio (Kytzo's founder) was the world top-earning developer on the Bounties platform which is a testament for how dependable, thorough, and technical he is as a developer.",
  },
  {
    img: TestimonialImg03,
    clientImg: ClientImg03,
    name: "Darius Cepokas",
    company: "CEO",
    content:
      "The team was agile and proactive in solving our issues, developing a product with impressive speed from idea to creation. We started with design & analysis stage and then went into development, while now they're taking care of our support for our growing user base. I recommend them for their speed of implementation.",
  },
];

export default function Testimonials() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Trusted by industry leaders
          </h2>
          <p className="text-lg text-indigo-200/65">
            Our customers appreciate our dedication to quality, communication, and business understanding.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg bg-gray-800/20 p-6">
              <div className="mb-4 flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.img}
                    width={48}
                    height={48}
                    alt={testimonial.name}
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-200">{testimonial.name}</div>
                  <div className="text-sm text-indigo-200/65">{testimonial.company}</div>
                </div>
              </div>
              <blockquote className="text-indigo-200/65">
                "{testimonial.content}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
