import Head from "next/head";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";

// import localFont from 'next/font/local';

// const vazirFont = localFont({ src: '../public/fonts/Vazirmatn-Regular.ttf' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
