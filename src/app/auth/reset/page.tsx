import AuthLayout from "@/components/layout/authLayout/AuthLayout";
import NewPassword from "@/components/pages/authCom/reset/NewPassword";
import React from "react";

const page = () => {
  return (
    <AuthLayout>
      <NewPassword />
    </AuthLayout>
  );
};

export default page;
