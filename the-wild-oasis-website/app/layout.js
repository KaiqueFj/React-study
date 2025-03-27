import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import { Josefin_Sans } from "next/font/google";
import "@/app/_styles/globals.css";
import Header from "./_components/Header";

const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by the beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${josefinFont.className} relative  min-h-screen antialiased bg-primary-950 flex flex-col text-primary-100`}
      >
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="mx-auto max-w-7xl ">{children}</main>
        </div>
      </body>
    </html>
  );
}
