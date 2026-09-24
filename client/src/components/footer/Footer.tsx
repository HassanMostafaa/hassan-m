import { FunctionComponent } from "react";
import { Button } from "@/src/base-components/button/Button";

import { IGenFooter } from "@/src/types/IGenTypes";
import { BlocksContent } from "@strapi/blocks-react-renderer";
import RichTextRenderer from "@/src/base-components/richtext-renderer/RichTextRenderer";
import { Brand } from "@/src/base-components/brand/Brand";

export const Footer: FunctionComponent<
  Omit<IGenFooter, "__typename" | "documentId">
> = ({ brand, copyrightsText, navigations, socialLinks }) => {
  return (
    <footer className="bg-background-secondary space-y-10 p-4 md:p-10">
      <div className="flex flex-col gap-8 md:flex-row items-center md:items-start md:justify-between md:gap-4">
        {/* Brand + Social Links */}
        <div className="flex flex-col gap-6 md:flex-row items-start md:gap-10">
          {brand && (
            <Brand variant="always-desktop" desktopSize={230} {...brand} />
          )}

          <div className="flex flex-wrap gap-4 md:flex-col">
            {socialLinks &&
              socialLinks.map((socialLink) =>
                socialLink ? (
                  <Button
                    key={socialLink.id}
                    className="w-full min-w-fit!"
                    {...socialLink}
                  />
                ) : null,
              )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap gap-4 md:justify-end md:gap-10">
          {navigations
            ?.filter((navigation) => navigation !== null)
            .map((navigation) => {
              return <Button key={navigation.id} {...navigation} />;
            })}
        </nav>
      </div>

      <RichTextRenderer
        className="text-center md:text-end"
        content={copyrightsText as BlocksContent}
      />
    </footer>
  );
};
