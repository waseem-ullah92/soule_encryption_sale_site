import TryButton from "@/components/button/TryButton";
import {
  CustomSelect,
  CustomTextField,
  FormProvider,
} from "@/components/hook-form";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import heartBg from "../../assets/svg/chooseplanHeartImg.svg";
import { ContactCardData, ContactSupportData } from "./ContactData";
import Image from "next/image";
import SectionWrapper from "@/components/section-wrapper";
import { useContactForm } from "./useContact";
import { contactData } from ".";
import Link from "next/link";

const Contact = (disabled: any) => {
  const { onSubmit, methods, handleSubmit } = useContactForm();
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  return (
    <SectionWrapper background="#FFFAFC">
      <Box
        sx={{
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2">Contact Us</Typography>
      </Box>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          spacing={3}
          padding={{ xs: "40px 48px 0px 30px", lg: "40px 48px 0px 30px" }}
          sx={{
            boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.10)",
            background: "#fff",
            borderRadius: "20px",
            margin: { xl: "0 auto" },
          }}
        >
          <Grid item xs={12} sx={{ margin: { xl: "0 auto" } }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h2">
                Get in <span style={{ color: "#FF3B83" }}>touch</span>
              </Typography>
              <p>
                The support team is here to help! If you would like to get in
                touch, please contact us through our social media channels.
              </p>
            </Box>
          </Grid>
          {contactData?.map((item: any) => (
            <Grid item xs={12} md={item?.md} xl={item?.xl} key={item?.id}>
              <item.component
                fullWidth
                {...item.componentProps}
                disabled={disabled}
                size={"small"}
                placeholder={item.componentProps.placeholder}
              ></item.component>
            </Grid>
          ))}
          <Grid item xl={12} xs={12}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox  sx={{
                  color: "#D0D5DD",
                  borderRadius: "8px !important",
                  width: "20px",
                  height: "20px",
                  margin:"0px 12px",

                  "& .MuiSvgIcon-root": {
                    borderRadius: "8px !important",
                  },
                  "&.Mui-checked": {
                    color: "#FF3B83",
                    borderRadius: "8px !important",
                  },
                }}/>}
                label={
                  <p>
                    You agree to our friendly  &nbsp;
                    <Link style={{color:"#FF3B83"}} href="">privacy policy</Link>
                  </p>
                }
              />
            </FormGroup>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ marginBottom: "70px", margin: { xl: "0 auto" } }}
          >
            <TryButton
              type="submit"
              width="100%"
              height="50px"
              borderRadius="8px"
            >
              Send message
            </TryButton>
          </Grid>
          <Box
            sx={{
              backgroundImage: `url(${heartBg.src})`,
              backgroundRepeat: "no-repeat",
              width: { xs: "100%", md: "88%" },
              height: "125px",
              opacity: "0.3",
              margin: "0 auto",
              marginTop: "40px",
            }}
          ></Box>
        </Grid>
      </FormProvider>

      <Grid container spacing={2}>
        {ContactCardData.map((item: any) => {
          return (
            <>
              <Grid item xs={12} md={4} lg={4} mb={4} mt={4}>
                <Box
                  sx={{
                    background: "#FDFCFA",
                    borderRadius: "20PX",
                    minWidth: "315PX",
                    height: "100%",
                  }}
                  p={4}
                >
                  <Typography variant="h3" mb={2}>
                    {item?.title}
                  </Typography>
                  <Typography variant="body1">{item?.description}</Typography>
                </Box>
              </Grid>
            </>
          );
        })}
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{ background: "#FFF5F9", borderRadius: "20PX", padding: "30px" }}
      >
        {ContactSupportData.map((item: any) => {
          return (
            <>
              <Grid item xs={12} md={4} lg={4} textAlign={"center"}>
                <Box
                  sx={{
                    height: "48px",
                    width: "48px",
                    background: "#FF3B83",
                    borderRadius: "8PX",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto",
                  }}
                >
                  <Image src={item?.img} alt="img" />
                </Box>
                <Typography variant="h3" mt={3}>
                  {item?.title}
                </Typography>
                <Typography variant="body1">{item?.email}</Typography>
              </Grid>
            </>
          );
        })}
      </Grid>
    </SectionWrapper>
  );
};

export default Contact;
