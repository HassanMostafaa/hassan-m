import { FunctionComponent, ReactNode } from "react";

import { HeroSection } from "@/src/components/hero-section/HeroSection";
import { IGenPageSectionsDynamicZone, Maybe } from "@/src/types/IGenTypes";

function renderSectionByType(section: IGenPageSectionsDynamicZone): ReactNode {
  switch (section.__typename) {
    case "ComponentComponentsHeroSection":
      return <HeroSection {...section} />;

    default:
      return (
        <div className="border border-primary bg-primary/10 p-2">
          Unimplemented section: {section.__typename ?? "Unknown"}
        </div>
      );
  }
}

export const Page: FunctionComponent<{
  sections?: Maybe<Array<Maybe<IGenPageSectionsDynamicZone>>>;
}> = ({ sections }) => {
  if (!sections?.length) {
    return null;
  }

  return (
    <>
      {/* header spacing */}
      <div />

      {/* sections */}
      {sections.map((section, index) => {
        if (!section?.__typename) {
          return null;
        }

        return (
          <div key={`${section.__typename}-page-${index}`}>
            {renderSectionByType(section)}
          </div>
        );
      })}
    </>
  );
};
