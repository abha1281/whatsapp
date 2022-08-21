import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import SearchInput from "../../../globals/atoms/SearchInput";

type Props = {};

const sampleMessages = [
  {
    id: 1,
    user: "Shamikh",
    avatar_url: "/avatars/Shamikh.png",
    time: "08:39",
    message: "Annanvynu mirey migeyah! PS knn..",
  },
  {
    id: 2,
    user: "Roberta",
    avatar_url: "/avatars/Roberta.png",
    time: "12:39",
    message: "Baixa o kwai com o meu, por...",
  },
  {
    id: 3,
    user: "Ângela",
    avatar_url: "/avatars/Angela.png",
    time: "11:39",
    message: "Bora jogar aquele Genshin?",
  },
  {
    id: 4,
    user: "Bruna",
    avatar_url: "/avatars/Bruna.png",
    time: "04:22",
    message: "Bora jogar aquele Genshin?",
  },
  {
    id: 5,
    user: "Fit Midde",
    avatar_url: "/avatars/FitMidde.png",
    time: "01:01",
    message: "Bora jogar aquele Genshin?",
  },
  {
    id: 6,
    user: "Mohd",
    avatar_url: "/avatars/Mohd.png",
    time: "23:59",
    message: "kitties!! whens commings?",
  },
];

const defaultMessages = [
  ...sampleMessages,
  ...sampleMessages,
  ...sampleMessages,
  ...sampleMessages,
  ...sampleMessages,
  ...sampleMessages,
];

const Messages = (props: Props) => {
  const router = useRouter()
  const [search, setSearch] = useState("");
  const [messages, setMessages] = useState(defaultMessages);

  const searchMessages = (search: string) => {
    let searched = messages.filter((message) => {
        return message.message.toLowerCase().includes(search.toLowerCase());
    }).sort((a, b) => {
        return a.id - b.id;
    }).reverse();


    search.length > 0 ? setMessages(searched) : setMessages(defaultMessages);
  }

  const handleSearch = (search: string) => {
    setSearch(search);
    searchMessages(search);
  }

  return (
    <div className="flex flex-col">
      <div className="sticky top-28 z-10 bg-[#FBFDF6] pb-4 pl-8 pr-4">
        <div className="relative">
          <SearchInput placeholder="Search for a conversation"  onChange={value => handleSearch(value)} value={search} />
          <div className="absolute right-0 bg-[#D3E8D2] h-full top-0 p-3 rounded-full pointer-events-none">
            <Image src="/icons/Search.svg" alt="Chat" width={30} height={30} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-1 pb-6 px-4">
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <div onClick={() => router.push(`/chats/${message.id}`)} key={index} className="flex justify-between items-center hover:bg-white cursor-pointer rounded-full p-4">
              <div className="flex gap-x-3 items-center">
                <div className=" bg-red-500 rounded-full relative w-16 h-16">
                  <Image
                    layout="fill"
                    src={message.avatar_url}
                    alt={message.user}
                  />
                </div>
                <div>
                  <p className="font-medium text-xl">{message.user}</p>
                  <p className="text-sm">{message.message}</p>
                </div>
              </div>
              <p className="text-sm">{message.time}</p>
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
