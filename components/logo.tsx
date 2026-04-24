import Image from "next/image";
import Link from "next/link";
import navLogo from "@/public/logo-nav.jpeg";
import footerLogo from "@/public/logo-footer.jpeg";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isFooter = variant === "light";
  const imageSrc = isFooter ? footerLogo : navLogo;
  const imageAlt = "BPolyTix logo";

  return (
    <Link
      href="/"
      className={`inline-flex select-none items-center ${className}`}
      aria-label="BPolyTix home"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        priority
        loading="eager"
        draggable={false}
        className={
          isFooter
            ? "h-20 w-auto select-none object-contain sm:h-24"
            : "h-11 w-auto select-none object-contain sm:h-12"
        }
      />
    </Link>
  );
}
