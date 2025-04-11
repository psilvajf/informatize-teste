import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us - Kytzo",
  description: "Learn about Kytzo's mission, values, and the team behind our innovative solutions.",
};

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        {/* Page header */}
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h1 className="h1 mb-4">About Kytzo</h1>
          <p className="text-xl text-gray-400">
            We're on a mission to make technology accessible and empowering for everyone.
          </p>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-3xl">
          <div className="space-y-8">
            {/* Our Story */}
            <div>
              <h2 className="h3 mb-4">Our Story</h2>
              <p className="mb-4">
                Founded in 2023, Kytzo began with a simple vision: to create technology solutions that actually solve real-world problems. 
                Our founders recognized that in a world filled with complex software, many people were being left behind.
              </p>
              <p>
                What started as a small team passionate about accessible technology has grown into a company dedicated to 
                building intuitive, powerful tools that empower users of all technical backgrounds.
              </p>
            </div>

            {/* Our Mission */}
            <div>
              <h2 className="h3 mb-4">Our Mission</h2>
              <p>
                At Kytzo, we believe that technology should work for everyone. Our mission is to create software that's not just powerful, 
                but also intuitive and accessible. We're committed to breaking down barriers and ensuring that our solutions 
                empower users rather than confuse them.
              </p>
            </div>

            {/* Our Values */}
            <div>
              <h2 className="h3 mb-4">Our Values</h2>
              <ul className="list-inside list-disc space-y-2">
                <li><strong>Accessibility</strong> - We design with everyone in mind, regardless of technical expertise.</li>
                <li><strong>Innovation</strong> - We're constantly exploring new ways to solve problems more effectively.</li>
                <li><strong>Transparency</strong> - We believe in open communication with our users and within our team.</li>
                <li><strong>Quality</strong> - We're committed to excellence in everything we build.</li>
                <li><strong>Community</strong> - We value the input and feedback from our diverse user community.</li>
              </ul>
            </div>

            {/* Team */}
            <div>
              <h2 className="h3 mb-4">Our Team</h2>
              <p className="mb-4">
                Behind Kytzo is a diverse team of designers, developers, and problem solvers united by a shared passion. 
                We bring together different perspectives, experiences, and skills to create products that truly resonate with our users.
              </p>
              <p>
                We're always looking for talented individuals who share our vision. Check out our 
                <Link href="#0" className="text-indigo-500 hover:text-indigo-400 ml-1">
                  careers page
                </Link> to join our team.
              </p>
            </div>

            {/* Get In Touch */}
            <div>
              <h2 className="h3 mb-4">Get In Touch</h2>
              <p>
                We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, 
                don't hesitate to reach out at 
                <a href="mailto:hello@kytzo.com" className="text-indigo-500 hover:text-indigo-400 ml-1">
                  hello@kytzo.com
                </a>
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-lg bg-gray-800 p-8 text-center">
            <h3 className="h4 mb-2">Ready to experience Kytzo?</h3>
            <p className="mb-6 text-gray-400">
              Try our solutions and see how we can help you achieve your goals.
            </p>
            <div>
              <Link href="/" className="btn bg-indigo-500 text-white hover:bg-indigo-600">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 