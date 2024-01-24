import React from "react";
import Layout from "@/layout";
import Page from "@/components/Page";
import Careers from "@/sections/careers/Careers";


const PAGE_TILE = "Careers";

CareersPage.getLayout = function getLayout(page: any) {
  return (
    <Layout title={PAGE_TILE}>
      {page}
    </Layout>
  );
};

export default function CareersPage() {
  return (
    <Page title={PAGE_TILE}>
      <Careers/>
    </Page>
  );
}
