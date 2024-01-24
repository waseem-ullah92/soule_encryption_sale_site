import React from "react";
import { Grid, Card, Typography, Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { feedbeckMockData } from "./feedback-mock-data";
import Image from "next/image";
import feedbackLineBgImg from "../../assets/svg/feedbackLineBg.svg";
import leftComma from "../../assets/svg/leftQomma.svg";
import rightComma from "../../assets/svg/rightQomma.svg";
import SectionWrapper from "@/components/section-wrapper";

// Carousel responsive settings
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

const Feedback = () => {
  return (
    <SectionWrapper background="#FFFAFC">
      <Grid container spacing={2}>
        <Grid item xl={12} xs={12}>
          <Card sx={styles.cardWrapper}>
            <Box sx={styles.feedbackLineBgStyle}></Box>
            <Box sx={styles.textWrap}>
              <Typography
                component="h2"
                sx={{ textAlign: { xs: "center", md: "left" } }}
              >
                Don’t take our word for it
              </Typography>
              <Typography
                mt={1} mb={2}
                variant="body1"
                sx={{ textAlign: { xs: "center", md: "left" } }}
              >
                Read what some of our customers think about Soul Encryption
              </Typography>
              <Box sx={{margin:"0 auto",width:{xl:"60%",lg:"60%",xs:"90%",md:"90%",sm:"90%"},marginTop:{ xs:"14px"},marginBottom:{xl:"20px",lg:"45px"}}}  >
            <Typography
              mb={3}
              variant="body1"
              sx={{textAlign:"center" }}
            >
              These feedback statements highlight the positive impact that Soul
              Encryption has had on individuals who have engaged with their
              mission and services
            </Typography>
            </Box>
            </Box>
            <Box  sx={styles.feedbackCarouselWrapStyle}>
              <Box
                // mt={14}
                mb={14}
                className="parent"
                sx={styles.feedBackinnerCardStyle}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "-65px",
                    left: "2px",
                    zIndex: -1,
                    display: { xs: "none", md: "block" },
                  }}
                >
                  <Image src={leftComma} alt="Image" height={100} width={100} />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "-68px",
                    right: "0",
                    zIndex: -1,
                    display: { xs: "none", md: "block" },
                  }}
                >
                  <Image
                    src={rightComma}
                    alt="kjldg"
                    height={100}
                    width={100}
                  />
                </Box>
                <Carousel
                  responsive={responsive}
                  swipeable={true}
                  draggable={true}
                  showDots={true}
                  arrows={true}
                >
                  {feedbeckMockData.map((item: any) => (
                    <Box
                      sx={{ padding: { xs: "20px", md: "60px 110px" } }}
                      key={item.id}
                      className="carousel-item"
                    >
                      <Box sx={styles.feedbackCardContentWrap}>
                        <Image src={item?.feedbackimg} alt="feedback Image" />
                        <Box pt={2}>
                          <Typography variant="body1">
                            {item?.description}
                          </Typography>
                          <Typography component="h4" mt={2} mb={2}>
                            {item?.name}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Carousel>
              </Box>
              
            </Box>
            
          </Card>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default Feedback;

////////////////////////////
const styles = {
  cardWrapper: {
    borderRadius: "30px",
    background: "#FFF5F9",
    height: "82%",
    margin: "0 auto",
    marginBottom: "120px",
    position: "relative",
    zIndex: "999",
    minHeight: "550px",
    padding:"40px 0px",
    "@media (max-width: 1140px)": {
      width: "100%",
      marginTop: "40px",
    },
    "@media (max-width: 1565px)": {
      width: "100%",
      height: "79%",
      marginTop: "40px",
    },
    "@media (max-width: 899px)": {
      height: "72%",
    },
    "@media (max-width: 490px)": {
      height: "75%",
    },
  },
  textWrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 480px)": {
      padding: "0px 5px",
    },
  },

  feedBackinnerCardStyle: {
    width: "90%",
    // height: "100%",
    background: "#fff",
    borderRadius: "30px",
    // marginTop: "30px",
    position: "relative",
    zIndex: 0.6,
    "@media (max-width: 430px)": {
      height: "auto !important",
    },
  },
  feedbackCardContentWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "30px",
    "@media (max-width: 730px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "0px",
    },
  },
  feedbackCardHeading: {
    color: "#2E2E2E",
    fontSize: "18px",
    fontWeight: 600,
    fontFamily: "Poppin",
    lineHeight: "25px",
    marginTop: "12px",
  },
  feedbackCardParagraph: {
    color: "rgba(46, 46, 46, 0.70)",
    fontSize: "14px",
    fontWeight: 400,
    fontFamily: "Poppin",
    lineHeight: "25px",
  },
  feedbackCarouselWrapStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
   
  },
  feedbackLineBgStyle: {
    opacity: "0.9",
    position: "absolute",
    bottom: "0px",
    top: "10px",
    left: "50px",
    zIndex: "-666",
    height: "100%",
    backgroundImage: `url(${feedbackLineBgImg.src})`,
    backgroundRepeat: "no-repeat",
    width: "110%",
    backgroundSize: "100% 100%",
    "@media (max-width: 1142px)": {
      display: "none",
    },
  },
};
