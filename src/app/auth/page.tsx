import AuthLayout from '@/components/layout/authLayout/AuthLayout';
import LoginPage from '@/components/pages/auth/login/LoginPage';
import React from 'react';

const page = () => {
    return (
        <AuthLayout>
           <LoginPage/>
        </AuthLayout>
    );
};

export default page;