import React from "react";
import { getLayoutProps } from "../services/content/getLayoutProps";
import { Header } from "../components/header/Header";
import { cn } from "../utils/cn";
import { Footer } from "../components/footer/Footer";

export const MainLayout: React.FunctionComponent<
  React.PropsWithChildren
> = async ({ children }) => {
  const { header, footer } = await getLayoutProps();
  return (
    <body className={cn("bg-background text-white min-h-full flex flex-col")}>
      {header && <Header {...header} />}

      <main className="flex-1 space-y-10">{children}</main>

      {footer && <Footer {...footer} />}
    </body>
  );
};
