import React from "react";
import TryButton from "@/components/button/TryButton";
import { Box, Grid, Typography } from "@mui/material";
import featureArrows from "../../../assets/svg/featureArrows.svg";


const FeatureHeader = () => {
  return (
    
    <Box sx={styles.wrapper}>
         <Box sx={styles.featureArrowsStyle}></Box>
      <Grid container>
        <Grid item xs={12} xl={12} sx={{marginTop:{xs:"40px",lg:"160px"}}}>
          <Box sx={styles.wrapTextSection}>
            <Typography
              sx={{
                fontSize: {xs:"1.5rem !important",lg:"2.55rem !important"},
                fontWeight: {xs:"600 !important",lg:"700 !important"},
                lineHeight: {xs:"40px !important",lg:"50px !important"},
                color: "#4d4d4d",
                marginBottom:{xs:"20px",lg:"20px"},
                padding:{xs:"0px 12px",lg:"0px"} 
              }}
            >
              Packed with some really cool features
            </Typography>
            <Typography variant="body1" sx={styles.featureHeaderParagraph}>
              Always juggling with passwords and important documents? Are you
              having trouble finding your Important papers? Do you wanna store
              your secret recipe for your grand kids? Here at Soul Encryption,
              We manage all your important stuffs in life at one place. COME
              JOIN US TODAY!!
            </Typography>
            <TryButton width="173px" height="50px">
              Try For Free
            </TryButton>
          </Box>
       
        </Grid>
      </Grid>
    </Box>
   
  );
};

export default FeatureHeader;

////////////////////////////
const styles = {
  wrapper: {
    background: "#FFFAFC !important",
    height: "754px",
    position: "relative",
    zIndex: "866",
    "@media (max-width: 1200px)": {
     height:"400px"
    },
    "@media (max-width: 575px)": {
      height:"400px"
     },
    "@media (max-width: 420px)": {
      height:"530px"
     },
  },
  featureArrowsStyle: {
    opacity: "0.3",
    position: "absolute",
    bottom: "-4px",
    zIndex: "999",
    height: "100%",
    backgroundImage: `url(${featureArrows.src})`,
    backgroundRepeat: "no-repeat",
    width: "100%",
    backgroundSize: "100% 100%",
    "@media (max-width: 1200px)": {
     display:"none",
    },
  },

  wrapTextSection: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  featureHeaderParagraph: {
    marginBottom:"20px",
    whiteSpace: "prewrap",
    width: "764px",
    "@media (max-width: 784px)": {
      width: "100%",
      padding:"0px 14px"
    },
   
  },
};
