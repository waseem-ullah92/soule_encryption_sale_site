import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, Button } from "@mui/material";
import Image from "next/image";
import logo from "../../assets/svg/logo.svg";
import TryButton from "@/components/button/TryButton";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useRouter } from "next/router";

const navItems = [
  { key: 1, label: "features", path: "/features" },
  { key: 1, label: "pricing", path: "/pricing" },
  { key: 1, label: "blog", path: "/blog" },
  { key: 1, label: "help", path: "/help" },
  { key: 1, label: "Careers", path: "/careers" },
  { key: 1, label: "contact", path: "/contact" },
  // { key: 1, label: "delegate", path: "/signup?selectedTab=2" },
];

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const router = useRouter();

  const { pathname } = router;

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", padding: "20px" }}
    >
      <Link href={"/home"}>
        <Image src={logo} alt={""} style={{ width: "100%" }} />
      </Link>
      <Divider />
      <List>
        {navItems?.map((item: any) => (
          <ListItem key={item?.label} disablePadding>
            <ListItemButton>
              <Link
                href={`${item?.path}`}
                style={{
                  color: "#2E2E2E",
                  fontSize: "18px",
                  fontWeight: "400",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  margin: "7px 0px",
                }}
              >
                {item?.label}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box mb={1}>
        <Link href={"/signup"}>
          <TryButton width="100%" height="50px" borderRadius="8px">
            Try For Free
          </TryButton>
        </Link>
      </Box>


      <Link href={"/signup?selectedTab=2"} >
        <TryButton width="100%" height="50px" borderRadius="8px">
          Partner With Us
        </TryButton>
      </Link>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    // <AppBar position="static" sx={{ background: "#F7F5ED", boxShadow: "none" }}>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <div style={{ width: "100%" }}>
        <Toolbar disableGutters>
          <Grid
            container
            sx={{ justifyContent: { lg: "space-between" } }}
            alignItems={"center"}
          >
            <Grid item xs={1} sx={{ display: { lg: "none" } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon style={{ color: "#FF3B83" }} />
              </IconButton>
            </Grid>
            <Grid
              item
              xs
              lg={1.4}
              xl={2}
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              <Link href={"/home"}>
                <Image src={logo} alt={""} style={{ width: "100%" }} />
              </Link>
            </Grid>
            <Grid
              item
              lg={7}
              xl={6}
              sx={{ display: { xs: "none", lg: "flex" } }}
            >
              <Box
                sx={{ flexGrow: 1, display: "flex", justifyContent: { lg: "center", xl: "center" } }}
              >
                {navItems?.map((item: any) => (
                  <Button
                    key={item?.label}
                    // onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      display: "block",
                      // fontSize: "18px",
                      fontWeight: "400",
                      "&:hover": {
                        backgroundColor: "transparent", // Change this to your desired hover color
                      },
                    }}
                  >
                    <Link
                      href={`${item?.path}`}
                      className="navLinks"
                      style={{
                        color: pathname === item?.path ? "#FF3B83" : "#2E2E2E",
                        fontWeight: "500",
                        textDecoration: "none",

                      }}
                    >
                      {item?.label}
                    </Link>
                  </Button>
                ))}
              </Box>
            </Grid>
            <Grid item xs lg={3} xl={3.4}>
              <Box
                sx={{
                  flexGrow: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  justifyContent: { xs: "end" },
                }}
              >

                <Box sx={{ display: { xs: "none", lg: "block" } }}>
                  <Link href={"/signup"}>
                    <TryButton width="145px" height="45px" fontSize="13.5px">
                      Try For Free
                    </TryButton>
                  </Link>
                </Box>

                <Box sx={{ display: { xs: "none", lg: "block" } }}>
                  <Link href={"/signup?selectedTab=2"}>
                    <TryButton width="145px" height="45px" fontSize="13.5px">
                      Partner With Us
                    </TryButton>
                  </Link>
                </Box>

                <Link
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    color: "#FF3B83",
                    // marginLeft: "10px",
                    textDecoration: "none",
                  }}
                  href={"/login"}
                >
                  Login
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </div>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
    // </AppBar>
  );
}

export default Header;

