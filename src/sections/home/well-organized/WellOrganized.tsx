import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import React from "react";
import { wellOrganizedMockData } from "./well-oraganized-mock-data";

const WellOrganized = () => {
  return (
    <Box
    //  sx={{padding:"50px 0px"}}
    >
      <Box className="d-flex  flex-direction-column align-items-center justify-content-center"
        sx={{ marginTop: { xs: "20px", lg: "40px" }, marginBottom: { xs: "40px", lg: "96px" } }}
      >
        <Typography component="h2">Have a well-organised life</Typography>
        <p> And do not worry about your loved ones after life</p>
      </Box>

      <Grid container spacing={2} sx={{ width: "100%", justifyContent: "space-between" }} m={0}>
        {wellOrganizedMockData?.map((item: any) => {
          return (
            <Grid key={item.id} xs={12} md={3.5} lg={3.5} xl={3.8} sx={{ marginBottom: { xs: "30px", md: "0px" } }}>
              <Card
                sx={{
                  background: "#fff",
                  boxShadow: `${item.boxShadow}`,
                  height: "273px",
                  // width: { lg: "100%", md: "80%", sm: "100%", xs: "100%" },
                  // minWidth:"362px",
                  borderRadius: "20px",
                  // margin: "0 auto"
                }}
              >
                <CardContent sx={styles.wrapCardContent}>
                  <Box
                    mt={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "84px",
                      height: "84px",
                      borderRadius: "50%",
                      background: `${item.background}`,
                      color: "#fff",
                    }}
                  >
                    <Typography component="h3" color={"#fff"}>{item.percentage}</Typography>

                  </Box>
                  <Box mt={5} sx={styles.cardParagraph}>
                    <Typography variant="body1" textAlign={"center"}>{item.paragraph}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default WellOrganized;

////////////////////////////
const styles = {

  cardWrap: (item: any) => ({}),
  wrapCardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  cardBox: (item: any) => ({}),
  cardParagraph: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
