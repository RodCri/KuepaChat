import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { ChatContext } from "../context/ChatContext";
import { useFetchRecipientUser } from "../hooks/useFetchRecipient";
import { Stack } from "react-bootstrap"
import moment from "moment";

export const ChatBox = () => {

  const {user} = useContext(AuthContext);
  const {currentChat, messages, isMessagesLoading} = useContext(ChatContext);
  const {recipientUser} = useFetchRecipientUser(currentChat,user);
  console.log(currentChat)

  if(recipientUser){
    return(
      <p>No conversation select yet..</p>
    );
  }
  if(isMessagesLoading){
    return (
      <p>Loading chat...</p>
    );
  }
  return (
    <Stack gap={4} className="chat-box">
      <div className="chat-header">
        <strong>{recipientUser?.nameUser}</strong>
      </div>
      <Stack gap={3} className="messages">
        {messages && messages.map((message,index) => <Stack key={index}>
          <span>{message.messageText}</span>
          <span>{moment(message.createdAt).calendar()}</span>
        </Stack>)}
      </Stack>
    </Stack>
  )
};
