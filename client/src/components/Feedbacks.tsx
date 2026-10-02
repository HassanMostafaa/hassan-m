import React, { FunctionComponent } from "react";
import { IGenComponentComponentsFeedbacks } from "../types/IGenTypes";
import RichTextRenderer from "../base-components/richtext-renderer/RichTextRenderer";
import { BlocksContent } from "@strapi/blocks-react-renderer";
import { SimpleCard } from "../base-components/simple-card/SimpleCard";

export const Feedbacks: FunctionComponent<IGenComponentComponentsFeedbacks> = ({
  description,
  items,
  title,
}) => {
  if (!title && !description && (!items || items?.length === 0)) return null;
  return (
    <section className="container text-center space-y-6 text-text">
      {title && <p className="text-3xl lg:text-7xl text-text">{title}</p>}
      <RichTextRenderer
        className="md:max-w-xl mx-auto text-sm md:text-xl"
        content={description as BlocksContent}
      />

      {items && items?.length && items?.length > 0 ? (
        <div className="grid text-start gap-6 grid-cols-1 md:grid-cols-2">
          {items?.map((item, index) => {
            return (
              <SimpleCard
                key={`${item?.id}-feedbacks-section-item-${index}`}
                imgClassName="rounded-full"
                {...item}
              />
            );
          })}
        </div>
      ) : null}
    </section>
  );
};
