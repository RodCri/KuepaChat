import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { ChatContext } from "../context/ChatContext";
import { useFetchRecipientUser } from "../hooks/useFetchRecipient";
import { Stack } from "react-bootstrap"
import moment from "moment";
import InputEmoji from "react-input-emoji";

export const ChatBox = () => {

  const {user} = useContext(AuthContext);
  const {currentChat, messages, isMessagesLoading, sendTextMessage} = useContext(ChatContext);
  const {recipientUser} = useFetchRecipientUser(currentChat,user);
  const [textMessage,setTextMessage] = useState("");
  console.log(recipientUser)
  console.log("current",currentChat)
  console.log("user",user)

  if(recipientUser)
    return(
      <p>No conversation select yet..</p>
    );
  
  if(isMessagesLoading)
    return (
      <p>Loading chat...</p>
    );
  
  return (
    <Stack gap={4} className="chat-box">
      <div className="chat-header">
        <strong>{!recipientUser?.nameUser}</strong>
      </div>
      <Stack gap={3} className="messages">
        {messages && 
          messages.map((message,index) => (
            <Stack 
              key={index} 
              className={`${
                message?.senderId === user?._id 
                  ? "message self align-self-end flex-grow-0" 
                  : "message align-self-start flex-grow-0"
              }`}
            >
          <span>{message.messageText}</span>
          <span 
            className="date message-footer">
              {moment(message.createdAt).calendar()}
          </span>
        </Stack>
        ))}
      </Stack>
      <Stack direction="horizontal" gap={3} className="chat-input flex-grow-0">
        <InputEmoji value={textMessage} onChange={setTextMessage} fontFamily="nunito" borderColor="#fd531e" />
        <button 
          className="send-btn"
          onClick={() => sendTextMessage(textMessage, user, currentChat?._id,sendTextMessage)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
          </svg>
        </button>
      </Stack>
    </Stack>
  );
};
