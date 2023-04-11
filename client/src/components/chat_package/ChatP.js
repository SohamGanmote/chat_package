import style from "./ChatP.module.css";
import icon from "../../assets/ChatP/icon.jpg";
import Chat from "../chat/Chat";
import { useState } from "react";
const ChatP = (props) => {
  const user = props.username;
  const openChats = () => {
    setPage(<Chat username={user} url={props.url} close={closeChat} />);
  };
  let icons = (
    <img src={icon} alt="icon" className={style.ChatP} onClick={openChats} />
  );
  const [page, setPage] = useState(icons);
  const closeChat = () => {
    setPage(icons);
  };
  return <>{page}</>;
};
export default ChatP;
