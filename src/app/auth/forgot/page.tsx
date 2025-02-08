import AuthLayout from "@/components/layout/authLayout/AuthLayout";
import ForgotPassword from "@/components/pages/authCom/forgot/ForgotPassword";
import React from "react";

const page = () => {
  return (
    <AuthLayout>
      <ForgotPassword />
    </AuthLayout>
  );
};

export default page;
