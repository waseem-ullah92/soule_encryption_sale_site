
import { useState } from "react";
import { LoginFormSchema, defaultValues } from ".";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export const useLoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
//   const [loginTrigger, { isLoading }] = useLoginMutation();
//   const { login } = useAuth();

  const methods: any = useForm({
    resolver: yupResolver(LoginFormSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
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
  };
};
