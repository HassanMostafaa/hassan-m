import { type BlocksContent } from "@strapi/blocks-react-renderer";
import { FunctionComponent } from "react";

import { Button } from "@/src/base-components/button/Button";
import { IGenComponentComponentsHeroSection } from "@/src/types/IGenTypes";
import RichTextRenderer from "@/src/base-components/richtext-renderer/RichTextRenderer";
import { Globe, MoveUpRight } from "lucide-react";

export const HeroSection: FunctionComponent<
  Omit<IGenComponentComponentsHeroSection, "__typename" | "id">
> = ({ CallToAction, Subtitle, Title, tag }) => {
  if (!tag && !Title && !Subtitle) {
    return null;
  }

  return (
    <section className="flex max-w-5xl! min-h-[60dvh] container flex-col gap-4 items-center justify-center text-center">
      {tag && (
        <span className="flex gap-2 items-center text-primary">
          <Globe /> {tag}
        </span>
      )}

      {Title && (
        <h1 className="text-5xl text-primary  sm:text-6xl lg:text-7xl">
          {Title}
        </h1>
      )}

      {/* CONDITIONALLY RENDERED INSIDE */}
      <RichTextRenderer content={Subtitle as BlocksContent} />

      {CallToAction?.buttonText && (
        <Button
          {...CallToAction}
          className="group inline-flex mx-auto items-center gap-3"
          staticStartIcon={
            <span className="inline-flex rounded-full border border-border bg-primary/10 p-2">
              <MoveUpRight
                className="transition-transform duration-300 group-hover:rotate-135 text-primary"
                size={18}
                strokeWidth={1}
              />
            </span>
          }
        />
      )}
    </section>
  );
};
