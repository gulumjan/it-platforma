import ProfileLayout from "@/components/pages/profile/profileLayout/ProfileLayout";
import { FC, ReactNode } from "react";

interface IlayoutProps {
    children: ReactNode;
}

const layout: FC<IlayoutProps> = ({ children }) => {
    return <ProfileLayout>{children}</ProfileLayout>;
};

export default layout;