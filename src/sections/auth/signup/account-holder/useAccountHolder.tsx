
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AccountHolderFormSchema,defaultValues } from ".";

export const useAccountHolder = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const methods: any = useForm({
    resolver: yupResolver(AccountHolderFormSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((show) => !show);
  };

  const onSubmit = (data: any) => {


  };

  return {
    showPassword,
    methods,
    handleShowPassword,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isValid,
    showConfirmPassword,
    handleShowConfirmPassword
  };
};
