import React from "react";
import Layout from "@/layout";
import Page from "@/components/Page";
import Pricing from "@/sections/pricing/Pricing";


const PAGE_TILE = "Pricing";

PricePage.getLayout = function getLayout(page: any) {
  return (
    <Layout title={PAGE_TILE}>
      {page}
    </Layout>
  );
};

export default function PricePage() {
  return (
    <Page title={PAGE_TILE}>
      <Pricing/>
    </Page>
  );
}
