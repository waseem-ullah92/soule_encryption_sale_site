import * as Yup from "yup";

export const defaultValues = {
  firstName:"",
  lastName:"",
  email: "",
  phoneNumber:"",
  password: "",
  confirmPassword:"",
  remember: false,
};

export const AccountNomineeFormSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().required("Email is required").email("Invalid email"),
  phoneNumber: Yup.string().required("Phone number is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password should be of minimum 6 characters length"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm password is required"),
});

export { default as ReactHookForm } from "./Nominee";
