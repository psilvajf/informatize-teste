import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Cruip">
      <Image
        src="https://cdn.builder.io/api/v1/image/assets%2F421683bafcd74f55a212ef1092732a22%2Fe487a8eb5300490e98b2148537fa7d67"
        alt="Cruip Logo"
        width={70}
        height={32}
      />
    </Link>
  );
}
