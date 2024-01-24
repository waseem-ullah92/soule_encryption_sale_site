import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import {
  Box,
  Grid,
  Stack,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import ListIcon from "../../../assets/svg/ListIcon.svg";
import welcomeImage from "../../../assets/svg/loginWelcome.svg";
import LoginLeftBearImg from "../../../assets/svg/loginBearLeftImg.svg";
import LoginRighttBearImg from "../../../assets/svg/loginBearRightImg.svg";
import Image from "next/image";
import Link from "next/link";
import TryButton from "@/components/button/TryButton";
import robertFoxImg from "../../../assets/svg/loginRobertImg.svg";
import marvinMcKinneyImg from "../../../assets/svg/loginMarvinImg.svg";
import darleneRobertsonImg from "../../../assets/svg/loginDarleneImg.svg";
import eleanorPenaImg from "../../../assets/svg/loginEleanor.svg";
import WhiteHeartImg from "../../../assets/svg/loginWhiteHeartImg.svg";
import RedHeartImg from "../../../assets/svg/loginRedHeartImg.svg";
import LoginBgHeartImg from "../../../assets/svg/chooseplanHeartImg.svg";
import LoginBgImage from "../../../assets/svg/loginBgImg.svg";
import LoginBottomLine from "../../../assets/svg/loginBottomLine.svg";
import { CustomTextField, FormProvider } from "@/components/hook-form";
import { useLoginForm } from "./useLogin";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { loginMockData } from "./login-mockdata";

export default function Login() {
  const {
    showPassword,
    methods,
    handleShowPassword,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isValid,
  } = useLoginForm();

  const passwordEndAdornment = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={handleShowPassword} edge="end">
          {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>
      </InputAdornment>
    ),
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container sx={{
        height: {
          xl: "100vh",
          lg: "100vh",
          md: "130vh",
          sm: "100vh",
        },
      }}>
        <Grid item xl={6} lg={7} md={6} sm={12} xs={12}
          sx={{
            background: "rgba(255, 59, 131, 0.04)",
            display:{xs:"none",md:"block"},
            position: "relative",
          }}
        >
          <Box>
            <Box>
              <Image src={LoginBgImage} alt="Image" />
            </Box>
            <Box sx={styles.loginLeftContent} pl={4} pr={4}>
              <Box ml={1.5} mt={1.5}>
                <Typography variant="h1" sx={styles.loginLeftContentHeading}>
                  Keep Your <span style={{ color: "#FF3B83" }}>Personal&nbsp;</span>
                  Records Secure
                </Typography>
              </Box>

              <List sx={{ marginTop: "10px" }}>
                <ListItem>
                  <ListItemAvatar>
                    <Image src={ListIcon} alt="List Icon" />
                  </ListItemAvatar>
                  <ListItemText primary="Save Documents, Passwords & End-of-Life Plans" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Image src={ListIcon} alt="List Icon" />
                  </ListItemAvatar>
                  <ListItemText primary="Easy & Secure" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Image src={ListIcon} alt="List Icon" />
                  </ListItemAvatar>
                  <ListItemText primary="Access on All Devices" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Image src={ListIcon} alt="List Icon" />
                  </ListItemAvatar>
                  <ListItemText primary="Start Your Free Trial" />
                </ListItem>
              </List>
            </Box>

            <Grid
              container
              mt={2}
              spacing={2}
              // columnGap={2.3}
              justifyContent={"center"}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {loginMockData.map((item: any) => {
                return (
                  <Grid xl={2.5} lg={2.5} md={3.7} sm={3} xs={6} key={item.id}>
                    <Box
                      sx={{
                        position: "relative",
                        height: "190px",
                        width: "100%",
                      }}
                    >
                      <Box
                        sx={{
                          background: `${item.img}`,
                          backgroundRepeat: "no-repeat",
                          width: "100%",
                          backgroundSize: "100% 100%",
                          height: "100%",
                          position: "absolute",
                          marginTop: `${item.marginTop}`,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                            width: "100%",
                            color: "#fff",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#fff",
                              fontSize: "12px !important",
                              fontWeight: " 400 !important",
                              lineHeight: "9.96px !important",
                              margin: "12px 0px",
                              "&:before": {
                                content: "''",
                                display: "inline-block",
                                width: "6.09px",
                                height: "6.09px",
                                borderRadius: "50%",
                                backgroundColor: "#14FF00",
                                marginRight: "5px",
                              },
                            }}
                          >
                            {item.status}
                          </Typography>
                          <Image src={WhiteHeartImg} alt="gallary logo" />
                        </Box>
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: "10px",
                            // left: "17px",
                            textAlign: "center",
                            width: "100%"
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#fff",
                              fontSize: "12px !important",
                              fontWeight: "500 !important",
                              fontFamily: "Poppin",
                              // marginLeft: "7px",
                            }}
                          >
                            {item.name}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>


            {/* <Box sx={styles.loginBottomLineBgImg}></Box> */}

          </Box>
          <Box sx={styles.LoginBgHeartImg}>
           
          </Box>

        </Grid>


        <Grid item xl={6} lg={5} md={6} sm={12} xs={12}
          sx={{
            background: {xs:"none",md:"#fff"},
          }}>
          <Box
          >
            <Box sx={styles.loginFormWrapper}>
              <Box sx={{ marginTop: { xs: "10px", md: "10px" } }}>
                <Image src={welcomeImage} alt="Welcome Image" />
                <Typography pt={3}>Log in to Soul Encryption</Typography>
              </Box>
              <Box className="bearimgContainer" mt={4} width={260}>
                <Box className="leftBear">
                  {" "}
                  <Image src={LoginLeftBearImg} alt="Login Bear Image " />
                </Box>
                <Box className="RightBear">
                  <Image src={LoginRighttBearImg} alt="Login Bear Image " />
                </Box>
              </Box>
              <Box sx={styles.loginFormBoxStyle}>
                <Typography pt={4} pb={3} sx={styles.loginFormHeadingTwo}>
                  Login
                </Typography>
                <Grid container spacing={2} justifyContent={"center"}>
                  <Grid item xl={10} xs={10}>
                    <CustomTextField
                      fullWidth
                      name="email"
                      label="Email address"
                      disabled={isSubmitting}
                    />
                  </Grid>
                  <Grid item xl={10} xs={10}>
                    <CustomTextField
                      fullWidth
                      name="password"
                      label="Password"
                      type={showPassword ? "text" : "password"}
                      disabled={isSubmitting}
                      InputProps={passwordEndAdornment}
                    />
                  </Grid>
                  <Grid item xl={10} xs={10}>
                    <Link
                      href=""
                      style={{
                        color: "#4B5563",
                        fontSize: "12.18px",
                        fontWeight: 500,
                        fontFamily: "Poppin",
                      }}
                    >
                      Forgot Your Password?
                    </Link>
                  </Grid>

                  <Grid item xl={10} xs={10}>
                    <TryButton
                      type="submit"
                      width="356px"
                      height="38px"
                      borderRadius="8px"
                    >
                      Sign in
                    </TryButton>
                  </Grid>

                  <Box mt={2} sx={styles.loginFormSignUpWrap}>
                    <Typography sx={styles.loginFormHeadingSix}>
                      Do not have an account? &nbsp;
                      <Link
                        href="/signup"
                        style={{ color: "#FF3B83", textDecoration: "none" }}
                      >
                        Sign up
                      </Link>
                    </Typography>
                    <Typography mt={0.5} sx={styles.loginFormHeadingSix}>
                      Need support? Visit our &nbsp;
                      <Link
                        href=""
                        style={{ color: "#FF3B83", textDecoration: "none" }}
                      >
                        Help Center
                      </Link>
                    </Typography>
                  </Box>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </FormProvider>
  );
}

// styles
const styles = {
  loginLeftContentWrapper: {
    // background: "rgba(255, 59, 131, 0.04)",
  },

  LoginBgHeartImg: {
    opacity: "0.3",
    position: "absolute",
    bottom: "0",
    // right: "-250px",
    // left:"300px",
    zIndex: "999",
    height: "130px",
    backgroundImage: `url(${LoginBgHeartImg.src})`,
    backgroundRepeat: "no-repeat",
    width: "100%",
    backgroundSize: "100% 100%",
    "@media (max-width: 1440px)": {
      height: "80px",
    },
  },
  loginLeftContent: {
    display: "flex",
    alignItems: "left",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  loginLeftContentHeading: {
    color: "#2E2E2E",
    fontSize: "48px",
    fontWeight: 600,
    fontFamily: "Poppin",
    lineHeight: "48.96px",
    letterSpacing: "-6%",
    whiteSpace: "pre-line",
  },
  robertFoxImgStyle: {
    height: "192px",
    backgroundImage: `url(${robertFoxImg.src})`,
    backgroundRepeat: "no-repeat",
    width: "100%",
    position: "relative",
  },
  marvinMcKinneyImgStyle: {
    height: "192px",
    backgroundImage: `url(${marvinMcKinneyImg.src})`,
    backgroundRepeat: "no-repeat",
    width: "100%",
    position: "relative",
  },
  darleneRobertsonImgStyle: {
    height: "192px",
    backgroundImage: `url(${darleneRobertsonImg.src})`,
    backgroundRepeat: "no-repeat",
    width: "100%",
    position: "relative",
  },
  eleanorPenaImgStyle: {
    height: "192px",
    backgroundImage: `url(${eleanorPenaImg.src})`,
    backgroundRepeat: "no-repeat",
    width: "100%",
    position: "relative",
  },
  loginFormWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  loginFormBoxStyle: {
    borderRadius: "13.97px",
    background: "#FFF",
    boxShadow: "0px 0px 10.47782px 0px rgba(65, 204, 184, 0.18)",
    width: " 429.591px",
    height: "435.703px",
    "@media (max-width: 460px)": {
      width: "85%",
      height: "100%",
    },
  },
  loginFormHeadingTwo: {
    color: "#FF3B83",
    fontSize: "22px",
    fontWeight: 700,
    fontFamily: "Poppin",
    lineHeight: "24px",
    textAlign: "center",
  },
  loginFormHeadingSix: {
    color: "#224957",
    fontSize: "12.22px",
    fontWeight: 400,
    fontFamily: "Poppin",
    lineHeight: "18.34px",
  },
  loginFormSignUpWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
};
