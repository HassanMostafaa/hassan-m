import React from "react";
import { getLayoutProps } from "../services/content/getLayoutProps";
import { Header } from "../components/header/Header";
import { cn } from "../utils/cn";

export const MainLayout: React.FunctionComponent<
  React.PropsWithChildren
> = async ({ children }) => {
  const { header } = await getLayoutProps();
  return (
    <body
      className={cn(
        "bg-background container mx-auto max-sm:px-4 text-white min-h-full flex flex-col",
      )}
    >
      {header && <Header {...header} />}

      <main className="flex-1">{children}</main>
    </body>
  );
};
