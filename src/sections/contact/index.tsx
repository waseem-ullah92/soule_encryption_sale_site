import {CustomTextField } from "@/components/hook-form";


import * as Yup from "yup";

export const contactData = [
    {
        id: 1,
        componentProps: {
          name: "firstName",
          label: "First Name",
          placeholder:"Enter First Name",
          fullWidth: true,
          sx: { mb: 4 },
        },
        component: CustomTextField,
        md: 6,
      },
      {
        id: 2,
        componentProps: {
          name: "lastName",
          label: "Last Name",
          placeholder:"Enter Last Name",
          fullWidth: true,
          sx: { mb: 4 },
        },
        component: CustomTextField,
        md: 6,
      },
      {
        id: 3,
        componentProps: {
          name: "companyName",
          label: "Company Name",
          placeholder:"Enter Company Name",
          fullWidth: true,
          sx: { mb: 4 },
        },
        component: CustomTextField,
        md: 12,xl:6
      },
      {
        id: 4,
        componentProps: {
          name: "email",
          label: "Email",
          placeholder:"Enter Email",
          fullWidth: true,
          sx: { mb: 4 },
        },
        component: CustomTextField,
        md: 12,xl:6
      },
      {
        id: 5,
        componentProps: {
          name: "phoneNumber",
          label: "Phone Number",
          type:'number',
          fullWidth: true,
          sx: { mb: 4 },
        },
        component: CustomTextField,
        md: 12,
      },
      {
        id: 6,
        componentProps: {
          name: "didYouHear",
          label: "How did you here about us?",
          placeholder:"Write here...",
          multiline: true,
          minRows: 3,
          sx: { mb: 4 },
        },
        component: CustomTextField,
        md: 12,
      },
      {
        id: 6,
        componentProps: {
          name: "comments",
          label: "Comments",
          placeholder:"Write here...",
          multiline: true,
          minRows: 3,
          sx: { mb: 4 },
        },
        component: CustomTextField,
        md: 12,
      },
      {
        id: 7,
        componentProps: {
          name: "addressOne",
          label: "Address 1",
          placeholder:"Enter Address",
          fullWidth: true,
          sx: { mb: 4 },
        },
        component: CustomTextField,
        md: 6,
      },
      {
        id: 8,
        componentProps: {
          name: "addressTwo",
          label: "Address 2",
          placeholder:"Enter Address",
          fullWidth: true,
          sx: { mb: 4 },
        },
        component: CustomTextField,
        md: 6,
      },
  
  
]

export const contactDefaultValues = {
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    didYouHear: "",
    comments: "",
    addressOne: "",
    addressTwo: "",
   
   
  
};

export const ContactFormValidationSchema = Yup.object().shape({
    firstName: Yup.string().trim().required("Field is Required"),
    lastName: Yup.string().trim().required("Field is Required"),
    companyName: Yup.string().trim().required("Field is Required"),
    email: Yup.string().required("Field is required").email("Invalid Email"),
    phoneNumber: Yup.string().required("Field is Required"),
    didYouHear: Yup.string().trim().required("Field is Required"),
    comments: Yup.string().trim().required("Field is Required"),
    addressOne: Yup.string().trim().required("Field is Required"),
    addressTwo: Yup.string().trim().required("Field is Required"),

});

export { default as ApprovedDetailsForm } from "./Contact";