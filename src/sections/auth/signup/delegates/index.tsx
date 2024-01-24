import * as Yup from "yup";

export const defaultValues = {
  firstName:"",
  lastName:"",
  email: "",
  businessName:"",
  comapnyRegNumber:"",
  serviceOffered:[],
  serviceDescription: "",
  password: "",
  confirmPassword:"",
  remember: false,
};

export const DelegatesFormSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().required("Email is required").email("Invalid email"),
  businessName:Yup.string().required("Business name is required"),
  comapnyRegNumber:Yup.string().required("Company registration number is required"),
  serviceOffered:Yup.array().min(1, 'Service offered is required').required('Service offered is required'),
  serviceDescription:Yup.string().required("Service description is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password should be of minimum 6 characters length"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm password is required"),
  
});

export { default as ReactHookForm } from "./Delegates";
