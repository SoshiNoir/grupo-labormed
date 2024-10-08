import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Grupo Labormed",
  description: "Laboratório de Análises Clínicas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar />
        <main className="relative overflow-hidden mt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
