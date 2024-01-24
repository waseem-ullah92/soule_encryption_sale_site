import { Box, Grid, Typography } from "@mui/material";
import React from "react";
// import Header from "./header";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import SectionWrapper from "@/components/section-wrapper";
import Image from "next/image";
import heroIcon from '../assets/svg/herobgicon.svg'

const Layout = ({ children }: any) => {
  return (
    <div>
      <Image src={heroIcon} alt="icon" style={{position:"absolute",left:"1px",top:"60px"}}/>
      <div style={{ background: "#F7F5ED",position:"relative" }}>
        <SectionWrapper background="#FDFCFA">
          <Header />
        </SectionWrapper>
      </div>
      {children}
      
      <SectionWrapper background="#FDFCFA">
        <Footer />
      </SectionWrapper>

      <Grid item xs={12} sx={{ backgroundColor: "#FF3B83" }}>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            padding: "30px",
            color: "#FFF",
          }}
        >
          Copyright &#169; 2023 Soul Encryption All rights reserved Orcalo
          Limited
        </Typography>
      </Grid>
    </div>
  );
};

export default Layout;
