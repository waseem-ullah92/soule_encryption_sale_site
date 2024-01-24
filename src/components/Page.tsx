import { forwardRef } from "react";
// next
import Head from "next/head";
// @mui
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

const Page = forwardRef(
  ({ children, title = "", meta, ...other }: any, ref) => {
    return (
      <>
        <Head>
          <title>{`${title} | Soul Encryption`}</title>
          {meta}
        </Head>

        <Box ref={ref}  {...other}>
          {children}
        </Box>
      </>
    );
  }
);

Page.displayName = "Page";

export default Page;

