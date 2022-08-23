import Image from "next/image";
import React from "react";

type Message = {
  id?: string;
  user?: string;
  avatar_url?: string;
  time: string;
  message: string;
};

type Props = {
  message: Message;
  index: number;
  lastIndex: number;
  user: {
    id: string;
  } | null;
};

const ChatMessage = ({ message, user, index, lastIndex }: Props) => {
  let dateString = new Date().toLocaleTimeString();
  let currentTime = [dateString.split(":")[0], dateString.split(":")[1]].join(
    ":"
  );

  return (
    user && (
      <div>
        {currentTime == message.time && <p className={`mt-3 text-xs ${message.id !== user.id ? "flex justify-end mr-14" : ""}`}>
          {message.time}
        </p>}
        <div
          className={`relative flex gap-x-3  ${
            message.id !== user.id ? "flex-row-reverse ml-auto" : ""
          }`}
        >
          {index === lastIndex && message.avatar_url && (
            <div className="">
              <div className="relative w-12 h-12 bg-[#E1ECE1] rounded-full overflow-hidden">
                <Image
                  objectFit="cover"
                  layout="fill"
                  alt="user"
                  src={message.avatar_url}
                />
              </div>
            </div>
          )}
          <div
            className={`text-sm bg-[#EBF3E9] max-w-[60%] p-4 overflow-hidden ${
              index === lastIndex ? "rounded-b-[36px]" : ""
            }  ${
              message.id !== user?.id ? "rounded-l-[36px]" : "rounded-r-[36px]"
            }
          
        ${index !== lastIndex && message.avatar_url ? "mr-14" : ""}`}
          >
            <p className="mx-2 break-words">{message.message}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default ChatMessage;
