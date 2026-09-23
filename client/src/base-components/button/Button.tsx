import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";
import { IGenComponentBaseComponentsButton } from "@/src/types/IGenTypes";
import { cn } from "@/src/utils/cn";

interface ButtonProps extends IGenComponentBaseComponentsButton {
  className?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export const Button: FunctionComponent<ButtonProps> = ({
  ButtonText,
  Variant,
  ButtonUrl,
  ExternalUrl,
  Style,
  className,
  startIcon,
  endIcon,
}) => {
  const content = (
    <>
      {startIcon}
      <span>{ButtonText}</span>
      {endIcon}
    </>
  );

  if (Variant === "Button") {
    const buttonClassName = cn(
      "w-fit flex items-center justify-center gap-2 border p-2",
      {
        "border-primary bg-primary text-black": Style === "Primary",
        "border-primary/20 bg-primary/5 text-white": Style === "Secondary",
      },
      className,
    );

    return (
      <button type="button" className={buttonClassName}>
        {content}
      </button>
    );
  }

  if (!ButtonUrl) {
    return <span className={className}>{content}</span>;
  }

  if (ExternalUrl) {
    return (
      <a
        href={ButtonUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={ButtonUrl} className={className}>
      {content}
    </Link>
  );
};
