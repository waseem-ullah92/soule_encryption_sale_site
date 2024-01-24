// import React from "react";
// import Layout from "@/layout";
// import Page from "@/components/Page";
// import Login from "@/sections/auth/login/Login";

import Login from "@/sections/auth/login/Login";
import SignUp from "@/sections/auth/signup/SignUp";

// const PAGE_TILE = "Login";

// LoginPage.getLayout = function getLayout(page: any) {
//   return (
//     <Layout title={PAGE_TILE}>
//       {page}
//     </Layout>
//   );
// };

export default function LoginPage() {
  return (
    // <Page title={PAGE_TILE}>
      <SignUp/>
    // </Page>
  );
}
