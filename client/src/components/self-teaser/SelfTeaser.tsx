import { Button } from "@/src/base-components/button/Button";
import RichTextRenderer from "@/src/base-components/richtext-renderer/RichTextRenderer";
import { IGenComponentComponentsSelfTeaser } from "@/src/types/IGenTypes";
import { BlocksContent } from "@strapi/blocks-react-renderer";
import { ChevronsLeftRightEllipsis, MoveUpRight } from "lucide-react";
import React, { FunctionComponent } from "react";
import Marquee from "react-fast-marquee";

export const SelfTeaser: FunctionComponent<
  Omit<IGenComponentComponentsSelfTeaser, "__typename" | "id">
> = ({ actionButton, description, marqueeText, sectionTeaserText, title }) => {
  if (!marqueeText && !sectionTeaserText && !title && !actionButton?.buttonText)
    return null;

  return (
    <>
      {marqueeText && (
        <Marquee
          className="bg-background-secondary h-12! border-border border"
          gradientColor="var(--color-background-secondary)"
          gradient
          autoFill
        >
          <span className="mx-8 flex items-center text-lg gap-20">
            {marqueeText}
            <ChevronsLeftRightEllipsis
              strokeWidth={1}
              className="text-primary"
            />
          </span>
        </Marquee>
      )}
      {(sectionTeaserText || title || description) && (
        <section className="text-center max-w-4xl! container space-y-6 mt-10">
          {sectionTeaserText && (
            <p className="text-text-muted">{sectionTeaserText}</p>
          )}
          {title && <p className="text-3xl lg:text-7xl text-text">{title}</p>}
          <RichTextRenderer
            className="text-sm md:text-xl md:max-w-2xl mx-auto text-text"
            content={description as BlocksContent}
          />
          {actionButton?.buttonText && (
            <Button
              className="mx-auto group"
              staticEndIcon={
                <MoveUpRight
                  className="group-hover:rotate-45 transition"
                  size={22}
                  strokeWidth={1}
                />
              }
              {...actionButton}
            />
          )}
        </section>
      )}
    </>
  );
};
