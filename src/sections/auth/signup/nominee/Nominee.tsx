import React from "react";
// import CustomTextField from "@/components/customTextField/CustomTextField";
import {
  Box,
  Grid,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import TryButton from "@/components/button/TryButton";
import Link from "next/link";
import { CustomTextField, FormProvider } from "@/components/hook-form";
import { useNominee } from "./useNominee";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Nominee = () => {
  const {
    showPassword,
    methods,
    handleShowPassword,
    handleSubmit,
    onSubmit,
    isSubmitting,
    showConfirmPassword,
    handleShowConfirmPassword
  } = useNominee();
  const passwordEndAdornment = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={handleShowPassword} edge="end">
          {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>
      </InputAdornment>
    ),
  };

  const confirmPasswordEndAdornment = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={handleShowConfirmPassword} edge="end">
          {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>
      </InputAdornment>
    ),
  }
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h2" color={"#FF3B83"}>
            Create your account
          </Typography>
          <Typography mb={3} mt={2.5} variant="body1">
            Sign up with your name, email address and a password.
          </Typography>
        </Box>
        <Grid container spacing={2} justifyContent={"center"}>
          <Grid item md={6} lg={6} xl={6} xs={12}>
            <CustomTextField fullWidth name="firstName" label="First Name"  placeholder="Enter First Name"/>
          </Grid>
          <Grid item md={6} lg={6} xl={6} xs={12}>
            <CustomTextField fullWidth name="lastName" label="Last Name"  placeholder="Enter Last Name"/>
          </Grid>
          <Grid item md={6} lg={6} xl={6} xs={12}>
            <CustomTextField fullWidth name="email" label="Email" placeholder="Enter Email"/>
          </Grid>
          <Grid item md={6} lg={6} xl={6} xs={12}>
            <CustomTextField
              fullWidth
              name="phoneNumber"
              label="Phone Number"
              placeholder="Enter Phone Number"
            />
          </Grid>
          <Grid item md={6} lg={6} xl={6} xs={12}>
            <CustomTextField
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              disabled={isSubmitting}
              InputProps={passwordEndAdornment}
              placeholder="Enter Password"
            />
          </Grid>
          <Grid item md={6} lg={6} xl={6} xs={12}>
          <CustomTextField
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              disabled={isSubmitting}
              InputProps={confirmPasswordEndAdornment}
              placeholder="Enter Confirm Password"
            />
          </Grid>
          <Grid  mt={2} item xl={12} xs={12} display={"flex"} justifyContent={"center"}>
            <TryButton
              type="submit"
              width="360px"
              height="44px"
              borderRadius="8px"
            >
              Sign Up
            </TryButton>
          </Grid>
          <Grid item xl={12} xs={12} display={"flex"} justifyContent={"center"}>
            <Typography variant="body1">
              already have an account?&nbsp;
              <Link
                href="/login"
                style={{ color: "#FF3B83", textDecoration: "none" }}
              >
                Sign In
              </Link>
            </Typography>
          </Grid>
          <Grid item xl={12} xs={12} display={"flex"} justifyContent={"center"}>
            <Typography mt={2.3} variant="body1">
              By Signing up, you are creating a guest account, and you agree to&nbsp;
              <strong>Soul Encryption</strong>
            </Typography>
          </Grid>
          <Grid item xl={12} xs={12} display={"flex"} justifyContent={"center"}>
            <Typography  variant="body1" color={"#237FFF"}>
              Terms and conditions & Privacy statement
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </FormProvider>
  );
};

export default Nominee;
