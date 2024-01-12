import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsCardContextProvider } from "@/context/PropsCardContext";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nubank",
  description: "Personalize seu nubank",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <PropsCardContextProvider>
          <Header />
          {children}
        </PropsCardContextProvider>
      </body>
    </html>
  );
}
