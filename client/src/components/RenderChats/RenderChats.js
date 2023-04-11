import { useEffect, useState } from "react";
import style from "./RenderChats.module.css";
import io from "socket.io-client";

const RenderChats = (props) => {
  const socket = io.connect(props.url);
  const [chats, setChats] = useState([]);
  useEffect(() => {
    const retriveChats = () => {
      fetch(`http://localhost:8080/api/chats/${props.user}`, {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setChats(data);
        });
    };
    retriveChats();
  }, [props.user]);
  socket.off("ReceiveMessage").on("ReceiveMessage", (data) => {
    if (data.sender === props.user) {
      setChats([...chats, data]);
    }
  });
  return (
    <div className={style.chats}>
      {chats.length > 0 &&
        chats.map((message) => {
          return (
            <div
              key={Math.random()}
              className={
                message.sender === props.user ? style.sender : style.reciver
              }
            >
              <span>{message.message}</span>
            </div>
          );
        })}
    </div>
  );
};
export default RenderChats;
