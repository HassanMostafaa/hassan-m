import { IGenComponentBaseComponentsSimpleCard } from "@/src/types/IGenTypes";
import { padNumber } from "@/src/utils/padNumber";
import React, { FunctionComponent } from "react";
import RichTextRenderer from "../richtext-renderer/RichTextRenderer";
import { BlocksContent } from "@strapi/blocks-react-renderer";
import { MoveUpRight } from "lucide-react";
import { Button } from "../button/Button";

type ISimpleCard = Omit<
  IGenComponentBaseComponentsSimpleCard,
  "__typename" | "id"
> & {
  index?: number;
};

export const SimpleCard: FunctionComponent<ISimpleCard> = ({
  action,
  description,
  title,
  index,
}) => {
  return (
    <div className="border-border border bg-primary/5 p-4 md:p-10 flex flex-col justify-between gap-6">
      <div className="space-y-2">
        {/* index */}
        {index && <p className="text-text-muted">{padNumber(index)}.</p>}

        {/* title */}
        {title && <h3 className="text-3xl text-text-muted">{title}</h3>}
      </div>

      {/* description */}
      <RichTextRenderer
        className="text-text"
        content={description as BlocksContent}
      />

      {/* action */}
      {action?.buttonText && (
        <Button
          {...action}
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
  );
};
