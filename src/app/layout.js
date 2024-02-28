import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Osegbo Chukwuemeka",
  description: "FullStack Develooper",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-800 relative text-gray-50`}>{children}</body>
    </html>
  );
}
