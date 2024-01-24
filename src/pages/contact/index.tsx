import React from "react";
import Layout from "@/layout";
import Page from "@/components/Page";
import Contact from "@/sections/contact/Contact";


const PAGE_TILE = "conatct";

ContactPage.getLayout = function getLayout(page: any) {
  return (
    <Layout title={PAGE_TILE}>
      {page}
    </Layout>
  );
};

export default function ContactPage() {
  return (
    <Page title={PAGE_TILE}>
      <Contact/>
    </Page>
  );
}
