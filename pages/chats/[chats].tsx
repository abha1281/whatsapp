import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import ChatMessage from "../../components/globals/atoms/ChatMessage";
import sampleMessages from "../api/messages";

type Message = {
  id?: string;
  user?: string;
  avatar_url?: string;
  time: string;
  message: string;
};

type User = {
  id: string;
  user: string;
  avatar_url: string;
  time: string;
  message: string;
};

interface OldMessage extends Message {
  type: string;
}

const Chats = () => {
  const router = useRouter();
  const [newMessage, setNewMessage] = useState("");
  const [oldMessages, setOldMessages] = useState<OldMessage[]>([]);
  const [newMessages, setNewMessages] = useState<Message[]>([]);
  const [height, setHeight] = useState(0);
  const [user, setUser] = useState<User | null>(null);
  const messagesRef = useRef<HTMLDivElement | null>(null);

  const submitMessage = () => {
    if (newMessage.length > 0) {
      let dateString = new Date().toLocaleTimeString();
      const timeMessage = {
        message: newMessage,
        time: [dateString.split(":")[0], dateString.split(":")[1]].join(":"),
        id: "you",
        user: "you",
        avatar_url: "/avatars/you.jpg",
      };
      setNewMessages([...newMessages, timeMessage]);
      setNewMessage("");
    }
  };

  useEffect(() => {
    const titleHeading = document.getElementById("title-heading");
    if (titleHeading) {
      setHeight(titleHeading.offsetHeight + 200);
    }
  }, []);

  useEffect(() => {
    const findRecivedMessages = sampleMessages.find(
      message => message.id === router.asPath.split("/")[2].split("?")[0]
    );
    if (findRecivedMessages) {
      setUser(findRecivedMessages);
      const recivedOldMessage = {
        type: "text",
        ...findRecivedMessages,
      };
      setOldMessages([recivedOldMessage]);
    }
  }, [router.asPath]);

  useEffect(() => {
    if (messagesRef && messagesRef.current) {
      messagesRef.current.scrollBy(0, messagesRef.current.clientHeight);
    }
  }, [messagesRef, messagesRef.current, newMessages]);
  return (
    <div className="relative h-full min-w-screen">
      <div id="title-heading" className="flex items-center justify-between">
        <div>
          <p className="font-medium text-3xl">{user?.user ?? "Abu"}</p>
          <p className="text-sm">Last active at {user?.time ?? "08:33"}</p>
        </div>
        <div className="flex gap-x-3">
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

      <div
        ref={messagesRef}
        className="flex flex-col gap-y-3 mt-6 overflow-y-scroll scroll-smooth pr-1"
        style={{
          height: `calc(100vh - ${height}px)`,
        }}
      >
        {oldMessages.map((message, index) => (
          <ChatMessage
            index={index}
            lastIndex={oldMessages.length - 1}
            user={user}
            message={message}
            key={index}
          />
        ))}

        <div className="flex justify-center">
          <p className="flex font-medium text-[#424941] rounded-3xl px-10 py-1 bg-[#D3E8D2] w-max">
            Today
          </p>
        </div>
        {newMessages.map((message, index) => (
          <ChatMessage
            index={index}
            lastIndex={newMessages.length - 1}
            user={user}
            message={message}
            key={index}
          />
        ))}
      </div>

      <div className="absolute w-full bottom-0 z-10">
        <div className="w-full items-center flex rounded-full bg-[#E1ECE1] justify-between">
          <input
            className="py-4 pl-6 px-3 w-full bg-transparent focus:outline-none placeholder:text-[#424941]"
            type="text"
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
            placeholder="Text Message"
            onKeyDown={e => {
              if (e.key === "Enter") {
                submitMessage();
              }
            }}
          />
          <div className="bg-[#AED1AC] rounded-full h-14 w-14 flex items-center justify-center relative">
            {!newMessage && (
              <div className="flex item-center gap-x-3 absolute right-16">
                <button className="relative w-7 h-7 hover:bg-green-100 rounded-full">
                  <Image
                    layout="fill"
                    src={"/icons/SentimentSatisfiedAlt.svg"}
                    alt="SentimentSatisfiedAlt"
                  />
                </button>
                <button className="relative w-7 h-7">
                  <Image
                    layout="fill"
                    src={"/icons/AttachFile.svg"}
                    alt="AttachFile"
                  />
                </button>
              </div>
            )}
            {newMessage ? (
              <button onClick={submitMessage} className="relative w-7 h-7">
                <Image layout="fill" src={"/icons/Radar.svg"} alt="Mic" />
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
