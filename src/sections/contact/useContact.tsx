import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { contactDefaultValues, ContactFormValidationSchema } from ".";


export const useContactForm = () => {
    const methods: any = useForm({
        resolver: yupResolver(ContactFormValidationSchema),
        defaultValues: contactDefaultValues,
      });
      const { handleSubmit } = methods;
      const onSubmit = (data: any) => {
      };
  return {
    methods,
    handleSubmit,
    onSubmit
  }
}
