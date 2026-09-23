"use client";
import { cn } from "@/src/utils/cn";
import React from "react";

interface AnimatedMenuIconProps {
  isOpen: boolean;
  onClick: () => void;
  size?: number;
  className?: string;
}

export const AnimatedMenuIcon = ({
  isOpen,
  onClick,
  size = 32,
  className,
}: AnimatedMenuIconProps) => {
  const bar = `h-px w-[70%] bg-primary transition-all duration-500`;

  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      style={{ width: size, height: size }}
      className={cn(
        "flex flex-col items-center justify-center gap-1.5 bg-transparent border-none cursor-pointer",
        className,
      )}
    >
      <span
        className={`${bar} ${isOpen ? "translate-y-1.75 rotate-45" : ""}`}
      />
      <span className={`${bar} ${isOpen ? "opacity-0" : "opacity-100"}`} />
      <span
        className={`${bar} ${isOpen ? "-translate-y-1.75 -rotate-45" : ""}`}
      />
    </button>
  );
};
