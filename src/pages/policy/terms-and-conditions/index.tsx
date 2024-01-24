import React from "react";
import Layout from "@/layout";
import Page from "@/components/Page";
import TermAndCondition from "@/sections/policy/TermAndCondition";


const PAGE_TILE = "Terms And Conditions";

TermAndConditionPage.getLayout = function getLayout(page: any) {
  return (
    <Layout title={PAGE_TILE}>
      {page}
    </Layout>
  );
};

export default function TermAndConditionPage() {
  return (
    <Page title={PAGE_TILE}>
      <TermAndCondition/>
    </Page>
  );
}
