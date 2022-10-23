import { ReactNode } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Boka målare</title>
        <meta name="description" content="Boka målare och få gratis offert" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
