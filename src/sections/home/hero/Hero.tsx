import { Avatar, AvatarGroup, Box, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import imgSlider1 from "../../../assets/svg/imgSlider1.svg";
import imgSlider2 from "../../../assets/svg/imgSlider2.svg";
import imgSlider3 from "../../../assets/svg/imgSlider3.svg";
import TryButton from "@/components/button/TryButton";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Hero = () => {
  return (
    <Box
      // sx={{
      //   padding: "0px 120px 63px 120px",
      // }}
    >
      
      <Grid container  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent={"space-between"} marginBottom={"100px"}>
        <Grid item xs={12} lg={5.1} xl={6.9}>
          <Box sx={{ paddingTop: "100px",textAlign:{xs:"center",lg:"start"} }}>
            <Typography
              component="h2"
              sx={{
                marginBottom: "22px",
                fontWeight: "700",
                letterSpacing:"1px",
                marginTop:"20px"
              }}
            >
              Be a grief Support to your Loved ones after your death!
            </Typography>

            <p
              style={{
                marginBottom: "44px",
              }}
            >
              Leave your loved ones with the tools they need to manage your
              end-of-life affairs, by securing your important documents,
              accounts, and memories.
            </p>
            <Box sx={{ marginBottom: "96px", display: "flex",alignItems:"center",gap:"20px",justifyContent:{xs:"center",lg:"start"},flexWrap:"wrap" }}>
              <TryButton width="173PX" height="50px">
                Try For Free
              </TryButton>
              <Typography component="h4"
                style={{
                  color: "#00CCFF",
                  display:"flex",
                  alignItems:"center"
                }}
              >
                or discover more
                <ExpandMoreIcon/>
              </Typography>
            </Box>

            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"start"}
            >
              <Typography variant="h3" sx={{marginBottom:"30px"}} 
              >
                New Profiles
              </Typography>
              <AvatarGroup max={6}>
                <Avatar alt="Remy Sharp" src="/avatar.svg" />
                <Avatar alt="Remy Sharp" src="/avatar-2.svg" />
                <Avatar alt="Remy Sharp" src="/avatar-3.svg" />
                <Avatar alt="Remy Sharp" src="/avatar-4.svg" />
                <Avatar alt="Remy Sharp" src="/avatar-2.svg" />
                <Avatar alt="Remy Sharp" src="/avatar-6.svg" />
              </AvatarGroup>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6.5} xl={5.1} sx={{display:{xs:"none",md:"none", lg:"block"}}}>
          <Box className="cardMainWrap">
            <Box className="reduceCard">
              <Image
                src={imgSlider3}
                style={{ rotate: "-2.6deg",textAlign:"center", marginTop: "1px" ,border:"none",outline:"none"}}
                width={287}
              
                alt="CardImg"
              />
              <Typography component="h3"
                sx={styles.cardParagraph}
              >
                Trusted Leading
              </Typography>
            </Box>
            <Box className="innovationCard">
              <Image
                src={imgSlider2}
                style={{ rotate: "-4deg" , marginTop: "-2px",border:"none",outline:"none",textAlign:"center" }}
                width={291}
                alt="CardImg"
              />
              <Typography component="h3"
                sx={styles.cardParagraph}
              >
                innovation dedication,
              </Typography>
            </Box>
            <Box className="trustedCard">
              <Image
                src={imgSlider1}
                style={{ rotate: "7.5deg" ,textAlign:"center", marginLeft:"-9px",marginTop:"-8px",border:"none",outline:"none"}}
                width={307}
                alt="CardImg"
                
              />
               <Typography component="h3"
                sx={styles.cardParagraph}
              >
                We aim to reduce stress
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* <Grid item xs={6}></Grid> */}
    </Box>
  );
};

export default Hero;
const styles = {
  cardParagraph: {
    color: "#fff",
    rotate: "0.1deg",
    textAlign: "center",
    marginTop:"-8px"
  },
};
