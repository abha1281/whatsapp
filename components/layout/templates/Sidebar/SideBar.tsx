import Image from "next/image";
import React, { useState } from "react";
import SearchInput from "../../../globals/atoms/SearchInput";
import Icon from "../../../icons/Icon";
import Messages from "./Messages";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <div className="max-w-md w-full bg-[#FBFDF6] h-full fixed overflow-y-scroll">
      <div className="flex justify-between items-center py-10 pl-8 pr-4 sticky top-0 bg-[#FBFDF6] z-10">
        <p className="font-medium text-3xl">Whatsapp</p>
        <div className="flex gap-x-4 items-center">
          <button>
            <Image src="/icons/Radar.svg" alt="Chat" width={30} height={30} />
          </button>
          <button>
            <Image src="/icons/Chat.svg" alt="Chat" width={30} height={30} />
          </button>
          <button>
            <Image
              src="/icons/ThreeDots.svg"
              alt="Chat"
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>
      <Messages />
    </div>
  );
};

export default SideBar;
