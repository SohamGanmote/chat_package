import { useNavigate, useParams } from "react-router-dom";
import styles from "./Admin.module.css";
import { useState } from "react";
import RenderAdminChats from "./RenderAdminChats";
import io from "socket.io-client";
const socket = io.connect("http://localhost:8080");
const AdminChats = (props) => {
  const redirect = useNavigate();
  const { sender, reciver } = useParams();
  const [message, setMessage] = useState("");
  const messageOnChangeHandler = (e) => {
    setMessage(e.target.value);
  };
  const newMessageHandler = () => {
    socket.emit("NewMessage", {
      sender: "sohamganmote@gmail.com",
      reciver: reciver,
      message: message,
    });
    setMessage("");
  };
  return (
    <div className={styles.chats}>
      <div className={styles.hedder}>
        <h1>{reciver}</h1>
        <button onClick={() => redirect("/admin")}>back</button>
      </div>
      <RenderAdminChats sender={sender} reciver={reciver} url={props.url} />
      <form className={styles.chatForm} onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Start Conversation"
          value={message}
          onChange={messageOnChangeHandler}
          maxLength="200"
        />
        <button onClick={newMessageHandler}>Send</button>
      </form>
    </div>
  );
};
export default AdminChats;
