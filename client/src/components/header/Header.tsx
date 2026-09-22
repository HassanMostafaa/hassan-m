import Image from "next/image";
import Link from "next/link";
import { IGenHeader } from "@/src/types/IGenTypes";

export function Header({
  Brand,
  HeaderNavigations,
  PrimaryAction,
  SecondaryAction,
}: IGenHeader) {
  return (
    <header className="sticky bg-primary/5 border-primary border w-full max-w-2xl items-center backdrop-blur-2xl p-4 flex justify-between mx-auto top-0 z-50">
      {/* Brand */}
      <Link href="/" className="flex items-center">
        {Brand?.Logo?.url && (
          <Image
            src={Brand.Logo.url}
            alt={Brand.Logo.alternativeText || "logo"}
            width={240}
            height={80}
            className="hidden w-30 h-auto sm:block"
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
      <nav className="flex gap-4">
        {HeaderNavigations?.Items?.map((item) => {
          if (!item?.ButtonUrl) return null;

          return (
            <Link key={item.id} href={item.ButtonUrl}>
              {item.ButtonText}
            </Link>
          );
        })}
      </nav>

      <div>
        {SecondaryAction?.ButtonUrl && (
          <HeaderButton
            label={SecondaryAction.ButtonText}
            href={SecondaryAction.ButtonUrl}
            external={SecondaryAction.ExternalUrl}
            variant={SecondaryAction.Style}
          />
        )}

        {PrimaryAction?.ButtonUrl && (
          <HeaderButton
            label={PrimaryAction.ButtonText}
            href={PrimaryAction.ButtonUrl}
            external={PrimaryAction.ExternalUrl}
            variant={PrimaryAction.Style}
          />
        )}
      </div>
    </header>
  );
}

function HeaderButton({
  label,
  href,
  external,
  variant,
}: {
  label?: string | null;
  href: string;
  external?: boolean | null;
  variant?: string | null;
}) {
  const className =
    variant === "Primary"
      ? " bg-primary px-5 py-2.5 text-sm font-medium text-white border border-primary transition-colors hover:bg-primary-hover"
      : "bg-[#152136] border border-primary px-5 py-2.5 text-sm font-medium text-white";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}
