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

  const buttonClassName = cn(
    "w-fit flex items-center cursor-pointer transition duration-300 justify-center gap-2 border p-2",
    {
      "border-primary bg-primary hover:bg-primary-hover text-black":
        Style === "Primary",
      "border-primary/20 bg-primary/5 hover:bg-primary-hover/10 text-white":
        Style === "Secondary",
    },
    className,
  );

  // Button variant with a URL = styled link
  if (Variant === "Button" && ButtonUrl) {
    if (ExternalUrl) {
      return (
        <a
          href={ButtonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClassName}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={ButtonUrl} className={buttonClassName}>
        {content}
      </Link>
    );
  }

  // Normal button
  if (Variant === "Button") {
    return (
      <button type="button" className={buttonClassName}>
        {content}
      </button>
    );
  }

  // Link variant
  if (!ButtonUrl) {
    return <span className={cn(className, "cursor-pointer")}>{content}</span>;
  }

  if (ExternalUrl) {
    return (
      <a
        href={ButtonUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(className, "cursor-pointer")}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={ButtonUrl} className={cn(className, "cursor-pointer")}>
      {content}
    </Link>
  );
};
