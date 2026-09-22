import "./globals.css";
import { getLayoutProps } from "@/src/services/content/getLayoutProps";
import { Header } from "@/src/components/header/Header";

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const { header } = await getLayoutProps();
  return (
    <html lang="en" className={` h-full antialiased`}>
      <body className="bg-background text-white min-h-full flex flex-col">
        {header && <Header {...header} />}

        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
