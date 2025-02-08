import AuthLayout from "@/components/layout/authLayout/AuthLayout";
import Register from "@/components/pages/authCom/register/Register";
import React from "react";

const page = () => {
  return (
    <AuthLayout>
      <Register />
    </AuthLayout>
  );
};

export default page;
