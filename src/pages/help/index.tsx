import React from "react";
import Layout from "@/layout";
import Page from "@/components/Page";
import Help from "@/sections/help/Help";


const PAGE_TILE = "help";

HelpPage.getLayout = function getLayout(page: any) {
  return (
    <Layout title={PAGE_TILE}>
      {page}
    </Layout>
  );
};

export default function HelpPage() {
  return (
    <Page title={PAGE_TILE}>
      <Help/>
    </Page>
  );
}
