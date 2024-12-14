import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/global/header";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "300", "100", "500", "700", "900"],
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Psicologia Clínica Mônica Aran",
  description: "Consultório de Psicologia Clínica Mônica Aran",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} antialiased bg-[#f5f5f5]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
