import React from "react";
// import CustomTextField from "@/components/customTextField/CustomTextField";
import {
  Box,
  Grid,
  Typography,
  InputAdornment,
  IconButton,
  Select,
  OutlinedInput,
  MenuItem,
  Checkbox,
  ListItemText,
  SelectChangeEvent,
  FormHelperText,
} from "@mui/material";
import TryButton from "@/components/button/TryButton";
import Link from "next/link";
import {
  CustomSelect,
  CustomTextField,
  FormProvider,
} from "@/components/hook-form";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDelegates } from "./useDelegates";
import { Controller } from "react-hook-form";

const Delegates = () => {
  const [selectMultiItem, setSelectMultiItem] = React.useState<string[]>([]);
  const {
    showPassword,
    methods,
    handleShowPassword,
    handleSubmit,
    onSubmit,
    isSubmitting,
    showConfirmPassword,
    handleShowConfirmPassword,
    errors,
    control,
  } = useDelegates();

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
  };
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const options = [
    { id: "1", name: "Insurance, Soliciting", value: "Insurance Soliciting" },
    { id: "2", name: "Testator", value: "Testator" },
    { id: "3", name: "Banks", value: "Banks" },
    { id: "4", name: "Legal", value: "Legal" },
    { id: "5", name: "Finance", value: "Finance" },
    { id: "6", name: "Health Organisations", value: "Health Organisations" },
    {
      id: "7",
      name: "Funeral Planning Companies",
      value: "Funeral Planning Companies",
    },
    { id: "8", name: "Retirement Care", value: "RetirementCare" },
    { id: "9", name: "Event Managers", value: "Event Managers" },
    { id: "10", name: "Others", value: "Others" },
  ];

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
          <Grid item xl={6} md={6} lg={6} xs={12}>
            <CustomTextField
              fullWidth
              name="firstName"
              label="First Name"
              placeholder="Enter First Name"
            />
          </Grid>
          <Grid item xl={6} md={6} lg={6} xs={12}>
            <CustomTextField
              fullWidth
              name="lastName"
              label="Last Name"
              placeholder="Enter Last Name"
            />
          </Grid>
          <Grid item xl={6} md={6} lg={6} xs={12}>
            <CustomTextField
              fullWidth
              name="email"
              label="Email"
              placeholder="Enter Email"
            />
          </Grid>
          <Grid item xl={6} md={6} lg={6} xs={12}>
            <CustomTextField
              fullWidth
              name="businessName"
              label="Business Name"
              placeholder="Enter Business Name"
            />
          </Grid>
          <Grid item xl={6} md={6} lg={6} xs={12}>
            <CustomTextField
              fullWidth
              name="comapnyRegNumber"
              label="Company Registration Number"
              placeholder="Enter  Company Registration Number"
            />
          </Grid>
          <Grid item xl={6} md={6} lg={6} xs={12}>
            <label
              style={{
                color: "#4B5563",
                fontSize: "14px",
                lineHeight: "20PX",
                fontWeight: "400",
                textTransform: "capitalize",
                marginBottom: "5px",
              }}
            >
              Service Offered
            </label>
            <Controller
              name="serviceOffered"
              control={control}
              defaultValue={[]}
              render={({ field }) => (
                <Select
                  className="delegate-select"
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  fullWidth
                  {...field}
                  displayEmpty
                  autoComplete="off"
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return (
                        <span className="multiselectPlaceholder">
                          Select Option
                        </span>
                      );
                    }
                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                  sx={{
                    borderRadius: "8px",
                    color: "#4B5563",
                    fontSize: "14px !important",
                    fontWeight: "500 !important",
                    fontFamily: "Poppins !important",
                    lineHeight: "20px",

                    "&:hover fieldset": {
                      borderColor: "rgba(255, 59, 131, .5) !important",
                    },
                    "& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline ":
                      {
                        borderColor: "rgba(255, 59, 131, .5) !important",
                        boxShadow:
                          "0 0 0 0.25rem rgba(255, 59, 131, .15) !important",
                        outline: 0,
                      },
                    "& .MuiSelect-outlined": {
                      padding: 1.47,
                      minHeight: "15px !important",
                      borderRadius: "8px !important",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid rgba(0, 0, 0, 0.23)",
                      padding: "12px 16px",
                      borderRadius: "8px",
                    },
                    "& .Mui-focused fieldset": {
                      borderColor: " rgba(255, 59, 131,.5) !important",
                      boxShadow: "0 0 0 0.25rem rgba(255, 59, 131,.15)",
                      outline: 0,
                    },
                    "& .MuiOutlinedInput-notchedOutline ": {
                      borderColor: errors.serviceOffered ? "#d32f2f" : "",
                    },
                    "& .MuiInputLabel-shrink": {
                      display: "none",
                    },
                  }}
                >
                  {options.map((item) => (
                    <MenuItem key={item.id} value={item.value}>
                      <Checkbox
                        checked={field.value.indexOf(item.value) > -1}
                        sx={{
                          color: "#D0D5DD",
                          borderRadius: "8px",
                          width: "20px",
                          height: "20px",

                          "& .MuiSvgIcon-root": {
                            borderRadius: "8px",
                          },
                          "&.Mui-checked": {
                            color: "#FF3B83",
                            borderRadius: "8px",
                          },
                        }}
                      />
                      <ListItemText
                        primary={item.name}
                        sx={{
                          marginLeft: "10px",
                          color: "#4B5563",
                          fontSize: "14px !important",
                          fontWeight: "500 !important",
                          fontFamily: "Poppins !important",
                          lineHeight: "20px",
                        }}
                      />
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            {errors.serviceOffered && (
              <p
                style={{
                  color: "#d32f2f",
                  marginTop: "3px",
                  marginLeft: "14px",
                }}
              >
                {errors.serviceOffered.message}
              </p>
            )}
          </Grid>
          <Grid item xl={12} xs={12}>
            <CustomTextField
              fullWidth
              placeholder="Enter Service Description"
              name="serviceDescription"
              label="Service Description"
              multiline={true}
              minRows={3}
            />
          </Grid>
          <Grid item xl={6} md={6} lg={6} xs={12}>
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
          <Grid item xl={6} md={6} lg={6} xs={12}>
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
          <Grid
            mt={2}
            item
            xl={12}
            xs={12}
            display={"flex"}
            justifyContent={"center"}
          >
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
              By Signing up, you are creating a guest account, and you agree
              to&nbsp;
              <strong>Soul Encryption</strong>
            </Typography>
          </Grid>
          <Grid item xl={12} xs={12} display={"flex"} justifyContent={"center"}>
            <Typography mt={0} variant="body1" color={"#237FFF"}>
              Terms and conditions & Privacy statement
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </FormProvider>
  );
};

export default Delegates;

const styles = {
  multiSelectPlaceholder: {
    color: "#9CA3AF",
    fontWeight: "400 !important",
    fontSize: "12px !important",
  },
};
