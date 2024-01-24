import React from "react";
import Layout from "@/layout";
import Page from "@/components/Page";
import BlogSection from "@/sections/blog/BlogSection";


const PAGE_TILE = "blog";

BlogPage.getLayout = function getLayout(page: any) {
  return (
    <Layout title={PAGE_TILE}>
      {page}
    </Layout>
  );
};

export default function BlogPage() {
  return (
    <Page title={PAGE_TILE}>
      <BlogSection/>
    </Page>
  );
}
