
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { TextField } from "@mui/material";


// ----------------------------------------------------------------------

export default function CustomSelect({label,disabled, placeholder,name, children, ...other }: any) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
        {label && (
               <label   style={{ color: disabled ? '#4B5563' : '#4B5563',fontSize:"14px",lineHeight:"20PX",fontWeight:"400",textTransform:"capitalize",marginBottom:"5px" }}>
                  {label}
              </label>
           )}
       
        <TextField
          {...field}
          select
          fullWidth
          SelectProps={{ native: true }}
          error={!!error}
          helperText={error?.message}
          {...other}
          value={field.value ? field.value : " "}
          inputProps={{
            style: {
              color: "#224957",
              fontSize: "14px",
              lineHeight: "20PX",
              fontWeight: "400",
              textTransform: "capitalize",
              placeholder:placeholder
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              height: "44px",
              color: "#9CA3AF !important", 
              fontWeight:"400 !important",
              fontSize:"14px !important",
              lineHeight:"20px",
              letterSpacing:"-0.28px"
            },
            "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #D1D5DB",
              padding: "12px 16px",
              borderRadius: "8px",
            },
            
          }}
        >
          <option value=" ">Select Option</option>
          {children}
        </TextField>
        </>
      )}
    />
  );
}

