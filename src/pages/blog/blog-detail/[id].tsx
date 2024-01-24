import React from "react";
import Layout from "@/layout";
import Page from "@/components/Page";
import BlogDetails from "@/sections/blog/blog-details/BlogDetails";


const PAGE_TILE = "blog details";

BlogDetailPage.getLayout = function getLayout(page: any) {
  return (
    <Layout title={PAGE_TILE}>
      {page}
    </Layout>
  );
};

export default function BlogDetailPage() {
  return (
    <Page title={PAGE_TILE}>
      <BlogDetails/>
    </Page>
  );
}
