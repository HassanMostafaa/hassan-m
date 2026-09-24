import { SimpleCard } from "@/src/base-components/simple-card/SimpleCard";
import { IGenComponentComponentsGridCards } from "@/src/types/IGenTypes";
import React, { FunctionComponent } from "react";

export const SimpleCardsGrid: FunctionComponent<
  IGenComponentComponentsGridCards
> = ({ items }) => {
  if (!items || !items.length || items.length === 0) return null;
  return (
    <div className="grid container grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
      {items?.map((card, index) => {
        return card ? (
          <SimpleCard key={card.id} index={index + 1} {...card} />
        ) : null;
      })}
    </div>
  );
};
