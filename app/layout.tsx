import Header from "@/components/Header";
import "./globals.css";
import { Space_Mono } from "next/font/google";

const font = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main className="min-h-screen max-w-[1200px] mx-auto max-[1200px]:px-6">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
