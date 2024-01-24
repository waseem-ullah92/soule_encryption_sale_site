import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  footerContent,
  footerContentList,
  footerPolicy,
  footerSocialIcon,
} from "./FooterData";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/svg/logo.svg";
import ArrowUpIcon from "../../assets/svg/UpArrow.svg";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box>
      <Grid
        container
        spacing={2}
        m={0}
        // rowSpacing={1}
        // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ padding: { xs: '30px 0px', md: '60px 0px' } }}>
        {footerContent.map((item: any) => {
          return (
            <Grid item xs={12} sm={12} md={5} lg={5} key={item.id}>
              <Box>
               <Link href={"/home"}> <Image src={logo} alt="logo" style={{ marginBottom: "20px" }} /></Link>
                <Typography
                  component="h3"
                  sx={{
                    marginBottom: "20px",
                  }}
                >
                  {item?.footerTitle}
                </Typography>
                <Typography variant="body1">
                  {item?.footerDescription}
                </Typography>
              </Box>
            </Grid>
          );
        })}
        <Grid item xs={6} sm={6} md={3.5} lg={2} sx={{display:"flex",justifyContent:{xs:"start",md:"center"}}}>
          <ul style={{ margin: '0px', padding: "0px" }}>
            {footerContentList.map((item: any) => {
              return (
                <>
                  <Link href={`${item?.link}`} style={{ textDecoration: "none" }}>
                    <li
                      style={{
                        listStyleType: 'none',
                        marginBottom: '15px',
                      }}
                      key={item?.id}>
                      {item?.list}
                    </li>
                  </Link>
                </>
              );
            })}
          </ul>
        </Grid>
        <Grid item xs={6} sm={6} md={3.5} lg={2} sx={{display:"flex",justifyContent:{xs:"start",md:"center"}}}>
          <ul style={{ margin: "0px", padding: "0px" }}>
            {footerPolicy?.map((item: any) => {
              return (
                <>
                  <Link href={`${item?.link}`} style={{ textDecoration: "none" }}>
                    <li
                      style={{
                        listStyleType: "none",
                        marginBottom: "25px",
                      }}
                      key={item?.id}
                    >
                      {item?.list}
                    </li>
                  </Link>
                </>
              );
            })}
          </ul>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={3} sx={{display:{xs:"flex",lg:"flex"},justifyContent:{xs:"space-between",lg:"normal"},alignItems:{xs:"start", sm:"end",lg:"end"},flexDirection:{xs:"row-reverse",lg:"column"}}}>
        {showButton && (
          <Box textAlign={"center"}  sx={{display:{xs:"flex"},alignItems:{xs:"center"},marginBottom:{xs:"0px",md:"32px"},marginRight:{xs:"10px",md:"10px"}}}>
            <Image
              src={ArrowUpIcon}
              alt="Arrow Icon"
              
              onClick={handleScrollToTop}
              style={{cursor:'pointer',width:"100%",height:"100%"}}
            />
          </Box>
           )}
          <Box>
            {footerSocialIcon.map((item: any) => {
              return (
                //   <Image key={item.id} src={item.socialIcon} alt='fgdf' priority />
                <Link
                  href={item?.link}
                  key={item.id}
                  style={{ marginRight: "10px", marginBottom: "20px" }}
                >
                  {item?.socialIcon}
                </Link>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
