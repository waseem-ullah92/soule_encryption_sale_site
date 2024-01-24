import React from "react";
import Layout from "@/layout";
import Page from "@/components/Page";
import CookiePolicy from "@/sections/policy/CookiePolicy";


const PAGE_TILE = "Cookie Policy";

CookiePolicyPage.getLayout = function getLayout(page: any) {
  return (
    <Layout title={PAGE_TILE}>
      {page}
    </Layout>
  );
};

export default function CookiePolicyPage() {
  return (
    <Page title={PAGE_TILE}>
      <CookiePolicy/>
    </Page>
  );
}
