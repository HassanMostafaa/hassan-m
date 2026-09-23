import "./globals.css";
import { MainLayout } from "@/src/layouts/MainLayout";
import { cn } from "@/src/utils/cn";
import { chillax } from "@/src/assets/fonts/fonts";

export default async function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(chillax.variable, `h-full antialiased font-chillax`)}
    >
      <MainLayout>{children}</MainLayout>
    </html>
  );
}
