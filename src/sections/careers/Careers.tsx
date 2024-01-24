import React from "react";
import TryButton from "@/components/button/TryButton";
import { Box, Typography } from "@mui/material";
import SectionWrapper from "@/components/section-wrapper";

const Careers = () => {
  return (
    <SectionWrapper background="#fff">
      <Box
        sx={{
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2">CAREERS</Typography>
      </Box>
      <Box sx={styles.topHeadingWRap}>
        <TryButton
          width="136px"
          height="40px"
          borderRadius="90px"
          fontSize="18px"
        >
          We are Hiring
        </TryButton>
        <Typography mt={2} variant="h3" sx={{ fontSize: "30px !important" }}>
          Join our team
        </Typography>
        <Typography
          variant="body1"
          mt={2}
          mb={0.3}
          textAlign={"center"}
          sx={{ width: "35%" }}
        >
          A global team of top-tier creatives, where talent knows no boarders.
          We pride ourselves on recruiting only the coolest and most skilled
          individuals
        </Typography>
      </Box>
      <Box
        mt={5}
        mb={6}
        p={2}
        sx={{
          height: {
            xl: "100vh",
            lg: "100vh",
            md: "110vh",
            sm: "120vh",
            xs: "200vh",
          },
          boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.10)",
          background: "#fff",
          borderRadius: "20px",
        }}
      >
        <iframe
          src="https://jobs.orcaloholding.co.uk/jobs/companies/Ee8bx2YR3JzmBNmdGp5Vy4r0NK"
          width="100%"
          no-border
          title="Jobs Widget"
          style={{ border: "none", height: "90vh" }}
        ></iframe>
      </Box>
    </SectionWrapper>
  );
};

export default Careers;

// styles
const styles = {
  topHeadingWRap: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wrapIframeBoxStyle: {
    boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.10)",
    background: "#fff",
    borderRadius: "20px",
    height: "915px",
    "@media (max-width: 1874px)": {
      height: "980px",
    },
    "@media (max-width: 1127px)": {
      height: "1000px",
    },
  },
};
