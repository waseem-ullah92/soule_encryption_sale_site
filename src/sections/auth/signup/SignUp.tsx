import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AccountHolder from "./account-holder/AccountHolder";
import Nominee from "./nominee/Nominee";
import Delegates from "./delegates/Delegates";
import { Grid } from "@mui/material";
import heartbg from '../../../assets/svg/chooseplanHeartImg.svg'
import loginBg from '../../../assets/svg/loginBgImg.svg'
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect,useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SignUp() {
  const router= useRouter()
  const [value, setValue] = useState<any>(Number(router.query.selectedTab) || 0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    router.push({
      pathname: "/signup",
      query: {
        selectedTab: newValue,
      },
    });
    setValue(newValue);
  };



  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }}>

      <Grid container spacing={2} >
        <Box sx={styles.imgBackground}>
        <Image src={loginBg} alt="loginBg" style={{position:"absolute"}}/>
        </Box>
        <Grid item xs={11} lg={8} sx={{ width: "100%", margin: "0 auto" }}>
          <Box sx={{ display: "flex", justifyContent: "center", margin: "79px 0px 27px 0px" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              aria-label="basic tabs example"
              sx={{
                background: "#FF3B83",
                color: "#000",
                borderRadius: "95px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
               
                "&.MuiTabs-root .Mui-selected": {
                  background: "#FFEBF3 !important",
                  minWidth: "95px",
                  color:"#000",
                  fonSize:"12px",
                  fontWeight:"400px !important",
                  borderRadius: "160px",
                  textDecoration:"none !important",
                  textTransform:"capitalize !important",
                  
                },
                "&.MuiTabs-root": {
                  minWidth: "286px",
                  maxWidth: "386px",
                  textTransform:"capitalize !important",
                  
                },
                '.MuiButtonBase-root-MuiTab-root.Mui-selected ':{
                  fonSize:"12px",
                  fontWeight:"400px !important",
                  borderRadius: "160px",
                  textDecoration:"none !important",
                  textTransform:"capitalize !important",
                  
                },
                '.MuiButtonBase-root ':{
                  fonSize:"12px",
                  fontWeight:"400px !important",
                  borderRadius: "160px",
                  textDecoration:"none !important",
                  textTransform:"capitalize !important",
               
                },
                '& .MuiTabs-indicator':{
                  backgroundColor: "transparent !important"
                }
              }}
            >


              <Tab  sx={{ fontSize: "12px", color: "#000" }} label="Account Holder" {...a11yProps(0)} />
              <Tab  sx={{ fontSize: "12px", color: "#000" }} label="Nominee" {...a11yProps(1)} />
              <Tab  sx={{ fontSize: "12px", color: "#000" }} label="Delegates" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <Box
            sx={{
              borderRadius: "16px",
              boxShadow: "0px 0px 12px 0px rgba(65, 204, 184, 0.18)",
              marginBottom: "40px"
            }}
          >
            <CustomTabPanel value={value} index={0}>
              <AccountHolder />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Nominee  />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <Delegates />
            </CustomTabPanel>
          </Box>
        </Grid>
      </Grid>
      <Box>
        <Image src={heartbg} alt="heart bg" style={{ width: "100%", height: "100%",opacity:"0.3" }} />
      </Box>


    </Box>
  );
}

// styles
const styles = {
  signUpBoxStyle: {
    background: "#fff",
    borderRadius: "16px",
    width: "874px",
    height: "633px",
    margin: "0 auto",
    boxShadow: "0px 0px 12px 0px rgba(65, 204, 184, 0.18)",
  },
  imgBackground:{
    "@media (max-width: 1100px)": {
     display:"none"
    },
  }
};
