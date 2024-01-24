import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Divider,
} from "@mui/material";
import { featuresCardMockData } from "./features-cards-mock";
import Image from "next/image";
import shareIcon from "../../../assets/svg/shareIcon.svg";
import CustomModal from "@/components/modal";
import featureBgRightImage from "../../../assets/svg/featuresBgRightImage.svg";
import featureBgLeftImage from "../../../assets/svg/featuresBgLefttImage.svg";
import SectionWrapper from "@/components/section-wrapper";
import Link from "next/link";

const FeaturesCards = () => {
  const [isModalOpen, setIsModalOpen] = useState<any>(false);
  const [selectedModalData, setSelectedModalData] = useState<any>(null);

  const modalHandler = (data: any) => {
    const cardData = featuresCardMockData.find((item) => item.id === data);
    if (cardData) {
      setSelectedModalData(cardData);
      setIsModalOpen(true);
    }
  };
  const modalHandleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Box sx={styles.wrapper}>
      {/* <Box sx={{position:'relative'}}> */}
      {/* <Box>
        <Box sx={styles.featureBgLeftImage}></Box>
        <Box sx={styles.featureBgRightImage}></Box>
      </Box> */}
      <SectionWrapper background="#FFFAFC">
        <Grid container spacing={6}>
          {featuresCardMockData?.map((item: any) => {
            return (
              <Grid item xs={12} xl={4} lg={4} md={6} sm={12} key={item.id}>
                <Card
                  sx={{
                    background: "#fff",
                    boxShadow: `${item.boxShadow}`,
                    height: "100%",
                    width: { lg: "100%", md: "100%", sm: "100%", xs: "100%" },
                    borderRadius: "20px",
                    margin: "0 auto",
                  }}
                  onClick={() => {
                    modalHandler(item.id);
                  }}
                >
                  <CardContent sx={{ cursor: "pointer" }}>
                    <Box mt={1} sx={styles.headingWrap} mb={2}>
                      <Typography component="h3">{item.heading}</Typography>
                      {/* <Image src={shareIcon} alt="share icon" /> */}
                      <CardActions>
                        <span
                          style={{
                            textDecoration: "none",
                            color: "rgb(25, 118, 210)",
                            fontSize: "13.5px",
                            fontWeight: 500,
                            fontFamily: "Poppins",
                          }}
                        >
                          Explore More
                        </span>
                      </CardActions>
                    </Box>
                    <Divider />
                    <Box mt={3}>
                      <Typography
                        variant="body1"
                        sx={{ whiteSpace: "pre-line" }}
                      >
                        {item.paragraph}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
          {isModalOpen && selectedModalData && (
            <CustomModal
              open={isModalOpen}
              handleClose={() => {
                setSelectedModalData(null);
                setIsModalOpen(false);
              }}
              modalHandleClose={modalHandleClose}
              modalBoxShadow={selectedModalData?.boxShadow}
            >
              <Box>
               <Grid container spacing={2} sx={styles.containerGridWrap}>
                  {selectedModalData?.modalData?.modalContent?.map(
                    (data: any) => {
                      return (
                        <>
                          {data.modalDescription && selectedModalData.id === "11" ? (
                           <> <Box key={data.id} pb={1} >
                                  <Typography variant="body1">
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: data.modalDescription,
                                      }}
                                    ></span>
                                  </Typography>
                                </Box>
                                
                                <Typography variant="body1">
                                <ul className="nomineeUL">
                                  {data?.list?.map((item: any) => (
                                    <li key={item?.id}>
                                      <span style={{ whiteSpace: "pre-line"}}>
                                        {item?.listDescription}
                                      </span>
                                    </li>
                                  ))}
                                   </ul>
                                </Typography>
                              
                                </>
                          ) : (
                            <Box key={data.id} pb={2}>
                              <Typography variant="body1" >
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: data.modalDescription,
                                  }}
                                ></span>
                              </Typography>
                            </Box>
                          )}
                          <Grid 
                            key={data.id}
                            item
                            xl={selectedModalData?.modalData?.xl}
                            lg={selectedModalData?.modalData?.lg}
                            md={selectedModalData?.modalData?.md}
                            sm={selectedModalData?.modalData?.sm}
                            xs={selectedModalData?.modalData?.xs}
                          >
                            <Box sx={styles.modalWrap}>
                              <Box sx={styles.imgBox} mb={1}>
                                <Image src={data?.modalImg} alt="Modal Image" />
                              </Box>
                              <Typography variant="h4" textAlign={"center"} >
                                {data?.modalImgText}
                              </Typography>
                            </Box>
                          </Grid>
                        </>
                      );
                    }
                  )}
                </Grid>
              </Box>
            
            </CustomModal>
          )}
        </Grid>
      </SectionWrapper>
      {/* </Box> */}
    </Box>
  );
};

export default FeaturesCards;

////////////////////////////
const styles = {
  wrapper: {
    background: "#FFFAFC !important",
    marginTop: "60px",
    paddingBottom: "80px",
    "@media (max-width: 1540px)": {
      height: "100%",
      marginBottom: "12px",
    },
    "@media (max-width: 1240px)": {
      height: "100%",
      marginBottom: "12px",
    },
    "@media (max-width: 900px)": {
      marginTop: "20px",
      paddingBottom: "50px",
    },
  },
  // featureBgRightImage: {
  //   opacity: "0.8",
  //   position: "absolute",
  //   top: "-60px",
  //   right: "0px",
  //   zIndex: "0",
  //   height: "100%",
  //   backgroundImage: `url(${featureBgRightImage.src})`,
  //   backgroundRepeat: "no-repeat",
  //   width: "300px",
  //   backgroundSize: "100% 100%",
  //   "@media (max-width: 1240px)": {
  //     opacity: "0.3",
  //   },
  //   "@media (max-width: 590px)": {
  //     display: "none",
  //   },
  // },
  // featureBgLeftImage: {
  //   opacity: "0.8",
  //   position: "absolute",
  //   top: "0px",
  //   left: "0px",
  //   zIndex: "1",
  //   height: "100%",
  //   backgroundImage: `url(${featureBgLeftImage.src})`,
  //   backgroundRepeat: "no-repeat",
  //   width: "300px",
  //   backgroundSize: "100% 100%",
  //   "@media (max-width: 1240px)": {
  //     opacity: "0.2",
  //   },
  //   "@media (max-width: 590px)": {
  //     opacity: "0",
  //   },
  // },
  headingWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "@media (max-width: 350px)": {
      flexDirection: "column",
    },
  },
  cardParagraph: {
    color: "rgba(46, 46, 46, 0.70)",
    fontSize: "14px",
    fontWeight: 400,
    fontFamily: "Poppin",
    lineHeight: "25px",
  },
  containerGridWrap: {
    display: "flex",
    justifyContent: "flex-start",
    padding: "22px",
  },
  modalWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  modalDescriptionStyle: {
    color: "rgba(46, 46, 46, 0.70)",
    fontSize: "14px",
    fontWeight: 400,
    fontFamily: "Poppin",
    lineHeight: "25px",
  },
  modalImgText: {
    textAlign: "center",
    color: "#2E2E2E",
    fontSize: "16px",
    fontWeight: 500,
    fontFamily: "Poppin",
    lineHeight: "25px",
  },
  imgBox: {
    width: "112px",
    height: "112px",
    background: "#FFFFFF",
    border: "1px solid #DCDCDC",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
