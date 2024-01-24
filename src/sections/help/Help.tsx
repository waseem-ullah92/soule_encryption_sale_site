import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import { HelpData, contactData } from "./HelpData";
import SectionWrapper from "@/components/section-wrapper";

const Help = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item: any) => {
    setSelectedItem(selectedItem === item ? null : item);
  };
  return (
    <Box>
      <Box
        sx={{
          height: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#FFFAFC",
        }}
      >
        <Typography variant="h2"
          mb={3}
        >
          We are here to support you
        </Typography>
        <Typography variant="body1"
        >
          Frequently Asked Questions
        </Typography>
      </Box>

      {/* <Box sx={{ padding: "50px 92px" }}> */}
      <SectionWrapper background="#FFFAFC">
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} lg={8} xl={9}>
            {HelpData.map((item: any) => {
              return (
                <>
                  <Box key={item?.id}>
                    <Accordion sx={{ boxShadow: "none",backgroundColor:"#FFFAFC" }}>
                      <AccordionSummary
                        expandIcon={
                          <ExpandMoreIcon
                            sx={{
                              color:
                                selectedItem === item ? "#FF3B83" : "#2E2E2E",
                            }}
                          />
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{
                          marginBottom: "10px",
                          marginTop: "0px",
                        }}
                        onClick={() => handleClick(item)}
                      >
                        <Typography
                          variant="h3"
                          sx={{color: selectedItem === item ? "#FF3B83" : "#2E2E2E",fontWeight:"500 !important"}}
                        >
                          {item?.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography
                          variant="body1"
                          dangerouslySetInnerHTML={{ __html: item?.answer }}
                        />
                      </AccordionDetails>
                    </Accordion>
                  </Box>
                </>
              );
            })}
          </Grid>
          <Grid item xs={12} md={4} lg={4} xl={3}>
            {contactData.map((item: any) => {
              return (
                <>
                  <Box
                    key={item?.id}
                    sx={{
                      borderRadius: "10PX",
                      background: "#FF3B83",
                      boxShadow: "0px 4px 24px 0px rgba(0, 0, 0, 0.10)",
                      padding: "15px",
                    }}
                  >
                    <Typography
                      variant="h3"
                      color={"#fff"}
                      mb={4}
                    >
                      {item?.title}
                    </Typography>
                    <Typography
                     variant="body1"
                     color={"#fff"}
                     mb={4}
                    >
                      {item?.availableTime}
                    </Typography>
                    <Typography
                      variant="body1"
                      color={"#fff"}
                      mb={4}
                    >
                      {item?.contactNo}
                    </Typography>
                    <Typography
                      variant="body1"
                      color={"#fff"}
                      mb={4}
                    >
                      {item?.email}
                    </Typography>
                  </Box>
                </>
              );
            })}
          </Grid>
        </Grid>
        </SectionWrapper>
    </Box>
  );
};

export default Help;
