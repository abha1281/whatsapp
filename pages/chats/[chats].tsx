import Image from "next/image";
import React, { useEffect, useState } from "react";
import SearchInput from "../../components/globals/atoms/SearchInput";

type Messages = {
  time: string
  message: string
};

const Chats = () => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setNewMessages] = useState<Messages[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  const submitMessage = () => {
    let dateString = new Date().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"})
    const timeMessage = {
      message: newMessage,
      time: dateString,
    }
    console.log(timeMessage.time)
    setNewMessages([...messages, timeMessage]);
    setNewMessage("");
  };

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    } , 1000);
  },[])
  return (
    <div className="relative h-full min-w-screen">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium text-3xl">Abu</p>
          <p className="text-sm">Last active at 08:33</p>
        </div>
        <div className="flex">
          <button className="relative w-7 h-7">
            <Image
              layout="fill"
              src="/icons/PhoneInTalk.svg"
              alt="PhoneInTalk"
            />
          </button>
          <button className="relative w-7 h-7">
            <Image layout="fill" src="/icons/ThreeDots.svg" alt="ThreeDots" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-y-6 mt-6 max-h-[70vh] overflow-y-scroll">
        {messages.map((message, index) => (
          <div
            className="relative ml-auto flex gap-x-3 flex-row-reverse w-[60%]"
            key={index + " message"}
          >
            {
              <div className="absolute">
                <div className="relative w-12 h-12 bg-red-500 rounded-full ">
                  <Image layout="fill" alt="user" src="/avatars/Roberta.png" />
                </div>
              </div>
            }
            <p className="text-sm bg-[#EBF3E9] p-4 mr-14 rounded-l-full rounded-b-full break-words">
              {message.message}
            </p>
          </div>
        ))}
      </div>

      <div className="absolute w-full bottom-0 z-10">
        <div className=" w-full items-center flex rounded-full bg-[#E1ECE1] justify-between">
          <input
            className="py-4 pl-6 px-3 w-full bg-transparent focus:outline-none placeholder:text-[#424941]"
            type="text"
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
            placeholder="Digite aqui..."
            onKeyDown={e => {
              if (e.key === "Enter") {
                submitMessage();
              }
            }}
          />
          <div className="bg-[#AED1AC] rounded-full h-14 w-14 flex items-center justify-center">
            {newMessage ? (
              <button className="relative w-7 h-7">
                <Image
                  onClick={submitMessage}
                  layout="fill"
                  src={"/icons/Radar.svg"}
                  alt="Mic"
                />
              </button>
            ) : (
              <button className="relative w-7 h-7">
                <Image layout="fill" src={"/icons/Mic.svg"} alt="Mic" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
