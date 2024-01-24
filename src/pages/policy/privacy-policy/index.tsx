import React from "react";
import Layout from "@/layout";
import Page from "@/components/Page";
import PrivacyPolicy from "@/sections/policy/PrivacyPolicy";


const PAGE_TILE = "Privacy Policy";

PrivacyPolicyPage.getLayout = function getLayout(page: any) {
  return (
    <Layout title={PAGE_TILE}>
      {page}
    </Layout>
  );
};

export default function PrivacyPolicyPage() {
  return (
    <Page title={PAGE_TILE}>
      <PrivacyPolicy/>
    </Page>
  );
}
