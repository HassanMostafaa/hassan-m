"use client";

import Link from "next/link";
import { File } from "lucide-react";
import { Button } from "@/src/base-components/button/Button";
import { IGenHeader } from "@/src/types/IGenTypes";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  HeaderNavigations: IGenHeader["HeaderNavigations"];
  PrimaryAction: IGenHeader["PrimaryAction"];
  SecondaryAction: IGenHeader["SecondaryAction"];
}

export function MobileDrawer({
  open,
  onClose,
  HeaderNavigations,
  PrimaryAction,
  SecondaryAction,
}: MobileDrawerProps) {
  return (
    <div
      className={`sm:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`absolute top-0 left-0 right-0 bg-primary/5 backdrop-blur-2xl border-b border-primary/30 pt-24 pb-6 px-6 flex flex-col gap-6 transition-transform duration-300 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Links */}
        <nav className="flex flex-col gap-4">
          {HeaderNavigations?.Items?.map((item) => {
            if (!item?.buttonUrl) return null;
            return (
              <Link
                key={item.id}
                href={item.buttonUrl}
                className="text-lg"
                onClick={onClose}
              >
                {item.buttonText}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex flex-col gap-3 mt-4">
          {SecondaryAction?.buttonText && (
            <Button
              {...SecondaryAction}
              staticEndIcon={
                <File className="text-primary" size={18} strokeWidth={1} />
              }
              className="w-full justify-center"
            />
          )}
          {PrimaryAction?.buttonText && (
            <Button {...PrimaryAction} className="w-full justify-center" />
          )}
        </div>
      </div>
    </div>
  );
}
