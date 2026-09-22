import Image from "next/image";
import Link from "next/link";
import { IGenHeader } from "@/src/types/IGenTypes";
import { Button } from "@/src/base-components/button/Button";

export function Header({
  Brand,
  HeaderNavigations,
  PrimaryAction,
  SecondaryAction,
}: IGenHeader) {
  return (
    <header className="sticky mt-6 bg-primary/5 border-primary/30 border w-full max-w-xl items-center backdrop-blur-2xl p-2 flex justify-between mx-auto top-0 z-50">
      {/* Brand */}
      <Link href="/" className="flex items-center">
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

      {/* Desktop navigation */}

      {HeaderNavigations?.Items?.map((item) => {
        if (!item?.ButtonUrl) return null;

        return (
          <Link key={item.id} href={item.ButtonUrl}>
            {item.ButtonText}
          </Link>
        );
      })}

      {SecondaryAction?.ButtonUrl && (
        <Button {...SecondaryAction} className="px-4!" />
      )}

      {PrimaryAction?.ButtonUrl && (
        <Button {...PrimaryAction} className="px-4!" />
      )}
    </header>
  );
}
