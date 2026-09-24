import { Button } from "@/src/base-components/button/Button";
import { IGenComponentComponentsFeaturedProjects } from "@/src/types/IGenTypes";
import React, { FunctionComponent } from "react";
import { FeaturedProjectItem } from "./FeaturedProjectItem";
import { MoveUpRight } from "lucide-react";

export const FeaturedProjects: FunctionComponent<
  Omit<IGenComponentComponentsFeaturedProjects, "__typename" | "id">
> = ({ Items, seeAllButton, title }) => {
  return (
    <section className="container space-y-6" id="featured-projects">
      {/* header */}
      <div className="flex gap-4 justify-between">
        {title && <p className="text-primary text-5xl">{title}</p>}
        {seeAllButton?.buttonText && (
          <Button
            {...seeAllButton}
            className="group"
            staticStartIcon={
              <MoveUpRight
                strokeWidth={1}
                size={40}
                className="p-2 text-primary border rounded-full border-border bg-primary/10 group-hover:rotate-45 transition"
              />
            }
          />
        )}
      </div>

      {/* items */}
      {Items && Items?.length > 0 ? (
        <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
          {Items.map((item) => {
            if (!item?.__typename) return null;
            return <FeaturedProjectItem key={item.id} {...item} />;
          })}
        </div>
      ) : null}
    </section>
  );
};
