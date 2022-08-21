import React from "react";
import SideBar from "./Sidebar/SideBar";

type Props = {
  children: React.ReactNode;
};

const MainTemplate = ({ children }: Props) => {
  return (
    <div className="flex">
      <SideBar />
      <div className="ml-[28rem] px-10 pt-20 pb-10 bg-white min-h-screen" style={{
        width: "calc(100vw - 28rem)",
      }}>
      {children}
      </div>
    </div>
  );
};

export default MainTemplate;
