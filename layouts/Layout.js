/** @format */

import { useMediaQuery } from "react-responsive";

import { Header } from "../components";

const Layout = ({ children }) => {
  const isLgScreen = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  return (
    <div className="h-full lg:bg-[#5A698C]">
      <Header />
      {children}
      {!isLgScreen && <section className="h-[200px] bg-[#FF733C] w-full" />}
    </div>
  );
};

export default Layout;
