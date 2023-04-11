import style from "./Chat.module.css";
import ChatForm from "../ChatForm/ChatForm";
import RenderChats from "../RenderChats/RenderChats";
const Chat = (props) => {
  return (
    <div className={style.Chat}>
      <div className={style.hedder}>
        <h3>Admin Name</h3>
        <button onClick={props.close}>Close</button>
      </div>
      <RenderChats user={props.username} url={props.url} />
      <ChatForm url={props.url} user={props.username} />
    </div>
  );
};
export default Chat;
