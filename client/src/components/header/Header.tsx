"use client";

import { useState } from "react";

import Link from "next/link";
import { IGenHeader } from "@/src/types/IGenTypes";
import { Button } from "@/src/base-components/button/Button";
import { File } from "lucide-react";
import { AnimatedMenuIcon } from "@/src/base-components/animated-menu-icon/AnimatedMenuIcon";
import { MobileDrawer } from "./MobileDrawer";
import { Brand as BrandComponent } from "@/src/base-components/brand/Brand";

export function Header({
  Brand,
  HeaderNavigations,
  PrimaryAction,
  SecondaryAction,
}: IGenHeader) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky sm:mt-6 bg-primary/5 border-primary/30 border w-full max-w-xl items-center backdrop-blur-lg p-2 flex gap-4 justify-between mx-auto top-0 sm:top-6 z-50">
        {Brand && <BrandComponent {...Brand} desktopSize={100} />}

        <nav className="hidden sm:flex items-center gap-4">
          {HeaderNavigations?.Items?.map((item) => {
            if (!item?.buttonUrl) return null;
            return (
              <Link
                key={item.id}
                className="relative hover:text-primary-hover group"
                href={item.buttonUrl}
              >
                {item.buttonText}

                <span className="absolute top-full left-0 w-full h-0.5 bg-primary-hover origin-right scale-x-0 transition-transform duration-500 ease-out group-hover:origin-left group-hover:scale-x-100" />
              </Link>
            );
          })}
        </nav>

        <div className="hidden sm:flex items-center gap-2">
          {SecondaryAction?.buttonText && (
            <Button
              {...SecondaryAction}
              staticEndIcon={
                <File className="text-primary" size={18} strokeWidth={1} />
              }
            />
          )}
          {PrimaryAction?.buttonText && <Button {...PrimaryAction} />}
        </div>

        {/* Mobile toggle */}
        <div className="sm:hidden ml-auto">
          <AnimatedMenuIcon
            isOpen={open}
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
      </header>

      <MobileDrawer
        open={open}
        onClose={() => setOpen(false)}
        HeaderNavigations={HeaderNavigations}
        PrimaryAction={PrimaryAction}
        SecondaryAction={SecondaryAction}
      />
    </>
  );
}
