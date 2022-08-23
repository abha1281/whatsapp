import Head from "next/head";
import React from "react";
import SideBar from "./Sidebar/SideBar";

type Props = {
  children: React.ReactNode;
};

const MainTemplate = ({ children }: Props) => {
  return (
    <>
    <Head>
      <title>Whatsapp</title>
      <link rel="icon" href="https://img.icons8.com/color/344/whatsapp--v1.png" />
    </Head>
    <div className="flex">
      <SideBar />
      <div className="ml-[28rem] p-10 bg-white min-h-screen" style={{
        width: "calc(100vw - 28rem)",
      }}>
      {children}
      </div>
    </div>
    </>
  );
};

export default MainTemplate;
