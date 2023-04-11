import io from "socket.io-client";
import style from "./ChatForm.module.css";
import { useState } from "react";
const ChatForm = (props) => {
  const socket = io.connect(props.url);
  const [message, setMessage] = useState("");
  const messageOnChangeHandler = (e) => {
    setMessage(e.target.value);
  };
  const newMessageHandler = () => {
    if (message !== "") {
      socket.emit("NewMessage", {
        sender: props.user,
        reciver: "sohamganmote@gmail.com",
        message: message,
      });
      setMessage("");
    }
  };
  return (
    <form className={style.chatForm} onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Start Conversation"
        value={message}
        onChange={messageOnChangeHandler}
      />
      <button onClick={newMessageHandler}>Send</button>
    </form>
  );
};
export default ChatForm;
