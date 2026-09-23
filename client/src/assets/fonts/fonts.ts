import localFont from "next/font/local";

export const chillax = localFont({
  variable: "--font-chillax",
  display: "swap",
  src: [
    {
      path: "./chillax-font/chillax-extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./chillax-font/chillax-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./chillax-font/chillax-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./chillax-font/chillax-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./chillax-font/chillax-semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./chillax-font/chillax-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});
