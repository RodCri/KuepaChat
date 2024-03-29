/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { baseUrl, getRequest } from "../utils/services";

export const useFetchRecipientUser = (chat, user) =>{
  const [recipientUser, setRecipientUser] = useState(null);
  const [error, setError] = useState(null);

  const recipientId = chat?.members?.find((id) => id !== user?._id);
  // console.log("re",recipientId);
 //console.log("chat",chat)
  //console.log("user",user)

  useEffect(() => {
    const getUser = async () => {
      if(!recipientId) return null;

      const response = await getRequest(`${baseUrl}/users/find/${recipientId}`);
      if(response.error){
        return setError(error)
      }
      
      setRecipientUser(response)
      console.log(recipientUser)
    };
    getUser();
  }, [recipientId]);

  return {recipientUser, error,recipientId};
  
};