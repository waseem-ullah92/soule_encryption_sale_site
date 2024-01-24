import React from "react";
import Layout from "@/layout";
import Page from "@/components/Page";
import Home from "@/sections/home";


const PAGE_TILE = "Home";

HomePage.getLayout = function getLayout(page: any) {
  return (
    <Layout title={PAGE_TILE}>
      {page}
    </Layout>
  );
};

export default function HomePage() {
  return (
    <Page title={PAGE_TILE}>
      <Home/>
    </Page>
  );
}
