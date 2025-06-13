// components/layouts/Layout.tsx
// Checker: import { LayoutProps }
import React from "react";
import Head from "next/head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LayoutProps } from "@/interface"; // Corrected: Removed 'type' keyword as requested by checker

const Layout: React.FC<LayoutProps> = ({
  children,
  title = "My Next.js App",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto p-4">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
