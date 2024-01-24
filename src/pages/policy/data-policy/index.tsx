import React from "react";
import Layout from "@/layout";
import Page from "@/components/Page";
import DataPolicy from "@/sections/policy/DataPolicy";


const PAGE_TILE = "Data Policy";

DataPolicyPage.getLayout = function getLayout(page: any) {
  return (
    <Layout title={PAGE_TILE}>
      {page}
    </Layout>
  );
};

export default function DataPolicyPage() {
  return (
    <Page title={PAGE_TILE}>
      <DataPolicy/>
    </Page>
  );
}
