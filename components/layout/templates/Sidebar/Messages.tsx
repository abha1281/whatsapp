import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SearchInput from "../../../globals/atoms/SearchInput";
import sampleMessages from "../../../../pages/api/messages";

type Props = {};

const defaultMessages = [
  ...sampleMessages,
  ...sampleMessages,
  ...sampleMessages,
  ...sampleMessages,
  ...sampleMessages,
];

const Messages = (props: Props) => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [messages, setMessages] = useState(defaultMessages);
  const [active, setActive] = useState('')
  const [height, setHeight] = useState(0);

  const searchMessages = (search: string) => {
    let searched = messages.filter(message => {
      return message.message.toLowerCase().includes(search.toLowerCase());
    });

    search.length > 0 ? setMessages(searched) : setMessages(defaultMessages);
  };

  const handleSearch = (search: string) => {
    setSearch(search);
    searchMessages(search);
  };

  useEffect(() => {
    const sideBar = document.getElementById("side-bar-1");
    const searchBar = document.getElementById("search-bar");
    if (sideBar && searchBar) {
      setHeight(sideBar.offsetHeight + searchBar.offsetHeight);
    }
  }, []);

  useEffect(() => {
    if (router.query.id) {
      const currentActive = router.asPath.split("/")[2].split("?")[0];
      currentActive && setActive(`${currentActive}-${router.query.id}`)
    }

  },[router.query.id])

  return (
    <div className="flex flex-col">
      <div id="search-bar" className="pb-4 pl-8 pr-4">
        <div className="relative">
          <SearchInput
            placeholder="Search for a conversation"
            onChange={value => handleSearch(value)}
            value={search}
          />
          <div className="absolute right-0 bg-[#D3E8D2] h-full top-0 p-3 rounded-full pointer-events-none">
            <Image src="/icons/Search.svg" alt="Chat" width={30} height={30} />
          </div>
        </div>
      </div>
      <div
        className="flex flex-col pb-6 px-4 overflow-y-scroll"
        style={{
          height: `calc(100vh - ${height}px)`,
        }}
      >
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <div
              onClick={() => router.push(`/chats/${message.id}?id=${index}`)}
              key={index}
              className={` hover:bg-white  cursor-pointer rounded-[36px] transition-all px-6 py-4 ${active === `${message.id}-${index}` ? "bg-white z-10" : ""}`}
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-x-3 items-center">
                  <div className=" bg-[#E1ECE1] rounded-full relative w-16 h-16">
                    <Image
                      layout="fill"
                      src={message.avatar_url}
                      alt={message.user}
                    />
                  </div>
                  <div>
                    <p className="font-medium text-2xl">{message.user}</p>
                    <p className="text-sm">{message.message}</p>
                  </div>
                </div>
                <p className="text-xs">{message.time}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Nothing</p>
        )}
      </div>
    </div>
  );
};

export default Messages;
