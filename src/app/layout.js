import { Cormorant_Garamond, Figtree } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { wedding } from "@/lib/config";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });

export const metadata = {
  title: `${wedding.partner1} & ${wedding.partner2}`,
  description: `Join us on ${wedding.dateLabel} in ${wedding.city}.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${figtree.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="py-8 text-center text-sm text-ink/70">
          {wedding.partner1} & {wedding.partner2} · #EdwinAndGrace2027
        </footer>
      </body>
    </html>
  );
}
