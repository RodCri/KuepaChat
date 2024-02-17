/* eslint-disable react/prop-types */
import { useFetchRecipientUser } from "../hooks/useFetchRecipient";
import { Stack } from "react-bootstrap"
import avatar from '../assets/us.png';

export const UserChat = ({chat,user}) => {

  const {recipientUser} = useFetchRecipientUser(chat,user);

  //console.log("reeee",recipientUser);
  
  return (
    <Stack direction="horizontal" gap={3} className="user-card align-items-center p-2 justify-content-between" role="button">
      <div className="d-flex align-items-center">
        <div className="me-3">
          <img src={avatar} alt="" />
        </div>
        <div className="text-content">
          <div className="name">{recipientUser?.nameUser}</div>
          <div className="text">text message</div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-end">
        <div className="date">
          12/15/2222
        </div>
        <div className="this-user-notifications">
          2
        </div>
        <div className="user-online"></div>
      </div>
    </Stack>
  )
}
