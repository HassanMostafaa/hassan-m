import { IGenComponentBaseComponentsProjectTeaserCard } from "@/src/types/IGenTypes";
import NextImage from "next/image";
import Link from "next/link";
import React, { FunctionComponent } from "react";

export const FeaturedProjectItem: FunctionComponent<
  IGenComponentBaseComponentsProjectTeaserCard
> = ({ projectUrl, Image, description, title }) => {
  const card = (
    <article className="relative flex flex-col gap-4">
      {Image?.url && (
        <div className="relative border border-primary aspect-16/10 w-full overflow-hidden bg-neutral-100">
          <NextImage
            src={Image.url}
            alt={Image.alternativeText ?? title ?? ""}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300"
          />
        </div>
      )}

      <div className="absolute inset-x-2 bottom-2 flex items-center flex-wrap justify-between gap-1 border border-primary bg-background-secondary/50 p-4 backdrop-blur-sm">
        {title && <h3 className="text-3xl text-text font-semibold">{title}</h3>}
        {description && <p className="">{description}</p>}
      </div>
    </article>
  );

  // Only wrap in a link if there's a URL
  return projectUrl ? (
    <Link href={projectUrl} className="block">
      {card}
    </Link>
  ) : (
    card
  );
};
