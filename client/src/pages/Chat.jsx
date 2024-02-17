import { useContext } from "react"
import { Container, Stack } from "react-bootstrap"
import { ChatContext } from "../context/ChatContext"
import { UserChat } from "../components/UserChat";
import { AuthContext } from "../context/AuthContext";

export const Chat = () => {

  // eslint-disable-next-line no-unused-vars
  const {user} = useContext(AuthContext);
  // eslint-disable-next-line no-unused-vars
  const {userChats, isUserChatsLoading, userChatsError} = useContext(ChatContext);

  // console.log("userChats", userChats)
  return (
    <Container>
      {userChats?.length <1 ? null : (
        <Stack direction="horizontal" gap={4} className="align-items-start">
          <Stack className="messages-box flex-grow-0 pe-3" gap={3}>
            {isUserChatsLoading && <p>Chats....</p> }
            {userChats?.map((chat,index)=>{
              return(
                <div key={index}>
                  <UserChat chat={chat} user={user} />
                </div>
              )
            })}
          </Stack>
          <p>ChatBox</p>
        </Stack>
        
      )}
    </Container>
  )
}
