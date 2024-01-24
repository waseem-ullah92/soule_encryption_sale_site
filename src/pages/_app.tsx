import Head from "next/head";
import { useRouter } from "next/router";
import '@/styles/globals.css'

export default function App(props: any) {
  const { Component, pageProps } = props;
  const router = useRouter();
  const getLayout = Component.getLayout ?? ((page: any) => page);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {getLayout(<Component {...pageProps} />, router)}
    </>
  );
}
