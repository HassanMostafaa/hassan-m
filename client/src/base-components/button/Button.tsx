import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";

import { IGenComponentBaseComponentsButton } from "@/src/types/IGenTypes";
import { cn } from "@/src/utils/cn";

interface ButtonProps extends IGenComponentBaseComponentsButton {
  className?: string;
  staticStartIcon?: ReactNode;
  staticEndIcon?: ReactNode;
}

export const Button: FunctionComponent<ButtonProps> = ({
  buttonText,
  variant,
  buttonUrl,
  isExternalUrl,
  style,
  startIcon,
  endIcon,
  staticStartIcon,
  staticEndIcon,
  className,
}) => {
  const content = (
    <>
      {staticStartIcon ??
        (startIcon?.url && (
          <Image
            src={startIcon.url}
            alt={startIcon.alternativeText ?? ""}
            width={20}
            height={20}
          />
        ))}

      <span>{buttonText}</span>

      {staticEndIcon ??
        (endIcon?.url && (
          <Image
            src={endIcon.url}
            alt={endIcon.alternativeText ?? ""}
            width={20}
            height={20}
          />
        ))}
    </>
  );

  const buttonClassName = cn(
    "w-fit flex items-center cursor-pointer transition duration-300 justify-center gap-2 border p-2",
    {
      "border-primary bg-primary hover:bg-primary-hover text-black":
        style === "Primary",
      "border-primary/20 bg-primary/5 hover:bg-primary-hover/10 text-white":
        style === "Secondary",
    },
    className,
  );

  const linkClassName = cn(
    "w-fit inline-flex items-center hover:text-primary-hover gap-2 cursor-pointer",
    className,
  );

  // Button variant with a URL = styled link
  if (variant === "Button" && buttonUrl) {
    if (isExternalUrl) {
      return (
        <a
          href={buttonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClassName}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={buttonUrl} className={buttonClassName}>
        {content}
      </Link>
    );
  }

  // Normal button
  if (variant === "Button") {
    return (
      <button type="button" className={buttonClassName}>
        {content}
      </button>
    );
  }

  // Link variant
  if (!buttonUrl) {
    return <span className={linkClassName}>{content}</span>;
  }

  if (isExternalUrl) {
    return (
      <a
        href={buttonUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={buttonUrl} className={linkClassName}>
      {content}
    </Link>
  );
};
