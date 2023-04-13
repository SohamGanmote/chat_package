import io from "socket.io-client";
import style from "./ChatForm.module.css";
import { useState } from "react";
const socket = io.connect("http://localhost:8080");
const ChatForm = (props) => {
  const [message, setMessage] = useState("");
  const messageOnChangeHandler = (e) => {
    setMessage(e.target.value);
  };
  const newMessageHandler = () => {
    socket.emit("NewMessage", {
      sender: props.user,
      reciver: "sohamganmote@gmail.com",
      message: message,
    });
    setMessage("");
  };
  return (
    <form className={style.chatForm} onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Start Conversation"
        value={message}
        onChange={messageOnChangeHandler}
        maxLength="200"
      />
      <button onClick={newMessageHandler}>Send</button>
    </form>
  );
};
export default ChatForm;
