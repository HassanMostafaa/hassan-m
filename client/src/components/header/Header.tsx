"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IGenHeader } from "@/src/types/IGenTypes";
import { Button } from "@/src/base-components/button/Button";
import { File } from "lucide-react";
import { AnimatedMenuIcon } from "@/src/base-components/animated-menu-icon/AnimatedMenuIcon";
import { MobileDrawer } from "./MobileDrawer";

export function Header({
  Brand,
  HeaderNavigations,
  PrimaryAction,
  SecondaryAction,
}: IGenHeader) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky mt-6 bg-primary/5 border-primary/30 border w-full max-w-xl items-center backdrop-blur-2xl p-2 flex gap-4 justify-between mx-auto top-0 z-50">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
        >
          {Brand?.Logo?.url && (
            <Image
              src={Brand.Logo.url}
              alt={Brand.Logo.alternativeText || "logo"}
              width={240}
              height={80}
              className="hidden w-25 h-auto sm:block"
              priority
            />
          )}

          {Brand?.LogoSmall?.url && (
            <Image
              src={Brand.LogoSmall.url}
              alt={Brand.LogoSmall.alternativeText || "logo"}
              width={40}
              height={40}
              className="block h-10 w-10 sm:hidden"
              priority
            />
          )}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-4">
          {HeaderNavigations?.Items?.map((item) => {
            if (!item?.ButtonUrl) return null;
            return (
              <Link
                key={item.id}
                className="relative hover:text-primary-hover group"
                href={item.ButtonUrl}
              >
                {item.ButtonText}

                <span className="absolute top-full left-0 w-full h-0.5 bg-primary-hover origin-right scale-x-0 transition-transform duration-500 ease-out group-hover:origin-left group-hover:scale-x-100" />
              </Link>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden sm:flex items-center gap-2">
          {SecondaryAction?.ButtonText && (
            <Button
              {...SecondaryAction}
              endIcon={
                <File className="text-primary" size={18} strokeWidth={1} />
              }
            />
          )}
          {PrimaryAction?.ButtonText && <Button {...PrimaryAction} />}
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
