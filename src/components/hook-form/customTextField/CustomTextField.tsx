import { useFormContext, Controller } from "react-hook-form";
// @mui
import { TextField } from "@mui/material";

// ----------------------------------------------------------------------

export default function CustomTextField({disabled,multiline,label,placeholder, name, ...other }: any) {
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
          error={!!error}
          helperText={error?.message}
          {...other}
          autoComplete="off" 
          multiline={multiline}
          inputProps={{
            style: {
              color: "#224957",
              fontSize: "14px",
              lineHeight: "20PX",
              fontWeight: "400",
              textTransform: "capitalize",
            },
            placeholder: placeholder,
            rows: other.minRows || 3,
          }}
         
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "8PX",
              height: multiline?"none" :"44px",
              '&:hover fieldset': {
                borderColor: ' rgba(255, 59, 131,.5) !important',
              }
            },
            "& .MuiOutlinedInput-input::placeholder": { 
              color: "#9CA3AF", 
              fontWeight:"400 !important",
              fontSize:"14px !important",
              lineHeight:"20px",
              letterSpacing:"-0.28px",
              fontFamily: 'Poppins !important',
            },
            "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #D1D5DB",
              padding: "12px 16px",
              borderRadius: "8px",
            },
            "& .Mui-focused fieldset": {
              borderColor: ' rgba(255, 59, 131,.5) !important',
              boxShadow: "0 0 0 0.25rem rgba(255, 59, 131,.15)",
              outline:0,   
            },
            
          }}
        />
          </>
      )}
    
    />
  );
}
