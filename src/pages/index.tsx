
import {useState, useEffect} from "react"
import Layout from '@/layout';
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import LoadingScreen from "@/components/LoadingScreen";
import Page from "@/components/Page";

HomePage.getLayout = function getLayout(page: any) {
  return <Layout variant="main">{page}</Layout>;
};

export default function HomePage() {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);




  useEffect(() => {
    router.push("/home");
  }, [router])


  if (isLoading) return <LoadingScreen />;



  return (
    <Page title="Home Page">
      <div></div>
    </Page>
  );
}
