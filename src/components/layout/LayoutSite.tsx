import { FC, ReactNode } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";

interface iLayoutSiteProps {
  children: ReactNode;
}
const LayoutSite: FC<iLayoutSiteProps> = ({ children }) => {
  return (
    <section className={scss.LayoutSite}>
      <Header />
      <main>{children}</main>
      <Footer />
    </section>
  );
};

export default LayoutSite;
