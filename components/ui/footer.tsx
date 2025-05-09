import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-5 xl:gap-8">
          <div>
            <ul className="text-sm space-y-2">
              <li className="mb-2"></li>
              <li className="mb-2"></li>
              <li className="mb-2"></li>
              <li className="mb-2"></li>
            </ul>
          </div>
          <div>
            <ul className="text-sm space-y-2">
              <li className="mb-2"></li>
              <li className="mb-2"></li>
              <li className="mb-2"></li>
              <li className="mb-2"></li>
              <li className="mb-2"></li>
            </ul>
          </div>
          <div>
            <ul className="text-sm space-y-2">
              <li className="mb-2"></li>
              <li className="mb-2"></li>
              <li className="mb-2"></li>
            </ul>
          </div>
          <div>
            <ul className="text-sm space-y-2">
              <li className="mb-2"></li>
              <li className="mb-2"></li>
              <li className="mb-2"></li>
              <li className="mb-2"></li>
              <li className="mb-2"></li>
            </ul>
          </div>
          <div className="col-span-1 text-right">
            <div className="mb-3">
              <Link href="/" aria-label="Cruip">
                <Image
                  src="/images/logo.svg"
                  alt="Cruip Logo"
                  width={70}
                  height={32}
                />
              </Link>
            </div>
            <div className="text-sm">
              <p className="text-gray-200/65 mb-3">·</p>
              <ul className="inline-flex gap-1">
                <li>
                  <a
                    aria-label="Twitter"
                    href="#0"
                    className="flex items-center justify-center text-indigo-500 transition-colors duration-150"
                  />
                </li>
                <li>
                  <a
                    aria-label="Medium"
                    href="#0"
                    className="flex items-center justify-center text-indigo-500 transition-colors duration-150"
                  />
                </li>
                <li>
                  <a
                    aria-label="Github"
                    href="#0"
                    className="flex items-center justify-center text-indigo-500 transition-colors duration-150"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
