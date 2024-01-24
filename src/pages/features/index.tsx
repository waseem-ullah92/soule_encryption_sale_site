import React from "react";
import Layout from "@/layout";
import Page from "@/components/Page";
import Feature from "@/sections/features";


const PAGE_TILE = "Features";

FeaturesPage.getLayout = function getLayout(page: any) {
  return (
    <Layout title={PAGE_TILE}>
      {page}
    </Layout>
  );
};

export default function FeaturesPage() {
  return (
    <Page title={PAGE_TILE}>
      <Feature/>
    </Page>
  );
}
