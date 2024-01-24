import { Box,Grid, Typography } from "@mui/material";
import React from "react";
import choosePlanImg from "../../../assets/svg/chooseplanHeartImg.svg";
import TryButton from "@/components/button/TryButton";

const ChoosePlan = () => {
  return (
    <Box >
      <Grid container sx={{marginTop:{xs:"40px",lg:"120px"}, marginBottom:{xs:"40px",lg:"120px"}}}>
        <Grid item xl={12} xs={12}>
          <Box sx={styles.boxWrap}>
            <Typography component="h2" sx={styles.topHeading}>
              Choose the Plan that’s Right for you
            </Typography>
            <p style={styles.choosePlanPragaraph}>
              Try our Freemium and Premium Accounts
            </p>
            <TryButton
              width="173PX"
              height="50px"
            >
              Try For Free
            </TryButton>

            <Box sx={styles.imageWrap}></Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChoosePlan;

const styles = {
  boxWrap: {
    position: "relative",
    height: "500px",
    background: "rgba(255, 245, 249, 0.93)",
    zIndex: "2",
    borderRadius: "50px",
    textAlign: "center",
    overflow:"hidden",
  },
  imageWrap: {
    opacity: "0.3",
    position: "absolute",
    bottom: "2px",
    zIndex: "-1",
    height: "180px",
    backgroundImage: `url(${choosePlanImg.src})`,
    backgroundRepeat: "no-repeat",
    width: "100%",
    backgroundSize: "cover",
    "@media (max-width: 500px)": {
      display:"none"
    },
  },
  topHeading: {
    textAlign: "center",
    paddingTop: "92px"
  },
  choosePlanPragaraph: {
    marginBottom: "54px",
  },

};
