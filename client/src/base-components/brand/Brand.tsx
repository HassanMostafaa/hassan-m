import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

import { IGenComponentBaseComponentsBrandLogo } from "@/src/types/IGenTypes";

interface BrandProps extends IGenComponentBaseComponentsBrandLogo {
  desktopSize?: number;
  mobileSize?: number;
  variant?: "always-desktop" | "always-mobile";
}

export const Brand: FunctionComponent<BrandProps> = ({
  Logo,
  LogoSmall,
  desktopSize = 150,
  mobileSize = 50,
  variant,
}) => {
  const desktopClassName = {
    default: "hidden sm:block",
    "always-desktop": "block",
    "always-mobile": "hidden",
  }[variant ?? "default"];

  const mobileClassName = {
    default: "block sm:hidden",
    "always-desktop": "hidden",
    "always-mobile": "block",
  }[variant ?? "default"];

  return (
    <Link href="/" className="flex items-center">
      {Logo?.url && (
        <Image
          src={Logo.url}
          alt={Logo.alternativeText || "logo"}
          width={150}
          height={80}
          style={{ width: desktopSize, height: "auto" }}
          className={desktopClassName}
          priority
        />
      )}

      {LogoSmall?.url && (
        <Image
          src={LogoSmall.url}
          alt={LogoSmall.alternativeText || "logo"}
          width={mobileSize}
          height={mobileSize}
          style={{ width: mobileSize, height: "auto" }}
          className={mobileClassName}
          priority
        />
      )}
    </Link>
  );
};
