
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { DelegatesFormSchema ,defaultValues} from ".";
import { useRouter } from "next/router";

export const useDelegates = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const route =useRouter()
  const methods: any = useForm({
    resolver: yupResolver(DelegatesFormSchema),
    defaultValues,
  });

  const {
    handleSubmit,control,
    formState: { isSubmitting, isValid,errors },
  } = methods;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((show) => !show);
  };

  const onSubmit = (data: any) => {
    route.push('/login')
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
    handleShowConfirmPassword,
    control,
    errors


  };
};
