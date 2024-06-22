import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/app/components/Slidebar/Sidebar";
import GlobalStylesProvider from "@/app/providers/GlobalStylesProvider";
import ContextProvider from "@/app/providers/ContextProvider";
import { ClerkProvider} from "@clerk/nextjs";
import {auth} from "@clerk/nextjs/server";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const {userId} = auth();

  return (
      <ClerkProvider>
        <html lang="en">
        <head>
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
                  integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
                  crossOrigin="anonymous"
                  referrerPolicy="no-referrer"/>
        </head>
        <body className={inter.className}>
        <ContextProvider>
            <GlobalStylesProvider>
                {userId && <Sidebar/>}
                <div className="w-full">{children}</div>
            </GlobalStylesProvider>
        </ContextProvider>
        </body>
        </html>
      </ClerkProvider>
  );
}
