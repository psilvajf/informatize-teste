"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end">
            <li></li>
            <li>
              <Link
                href="/signup"
                className="btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
              >
                Contato
              </Link>
            </li>
          </ul>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets%2F421683bafcd74f55a212ef1092732a22%2F789683f4d8dc46d2807545b8f488ff5a?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F421683bafcd74f55a212ef1092732a22%2F789683f4d8dc46d2807545b8f488ff5a?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F421683bafcd74f55a212ef1092732a22%2F789683f4d8dc46d2807545b8f488ff5a?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F421683bafcd74f55a212ef1092732a22%2F789683f4d8dc46d2807545b8f488ff5a?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F421683bafcd74f55a212ef1092732a22%2F789683f4d8dc46d2807545b8f488ff5a?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F421683bafcd74f55a212ef1092732a22%2F789683f4d8dc46d2807545b8f488ff5a?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F421683bafcd74f55a212ef1092732a22%2F789683f4d8dc46d2807545b8f488ff5a?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F421683bafcd74f55a212ef1092732a22%2F789683f4d8dc46d2807545b8f488ff5a"
            className="aspect-square object-cover object-center w-[109%] -ml-[1px] min-h-[20px] min-w-[20px] overflow-hidden max-w-[33px] cursor-pointer pointer-events-auto"
            alt="User profile"
          />
        </div>
      </div>
    </header>
  );
}
