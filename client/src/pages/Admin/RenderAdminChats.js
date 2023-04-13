import { useEffect, useState } from "react";
import styles from "./Admin.module.css";
import io from "socket.io-client";
const socket = io.connect("http://localhost:8080");
const RenderAdminChats = (props) => {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    const retriveChats = () => {
      fetch(
        `http://localhost:8080/api/chats/privateChats/${props.sender}/${props.reciver}`,
        {
          method: "get",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setChats(data);
        });
    };
    retriveChats();
  }, [props.sender, props.reciver]);

  socket.on("ReceiveMessage", (data) => {
    if (data.sender === localStorage.getItem("userEmail")) {
      setChats([...chats, data]);
    } else {
      if (
        data.reciver === localStorage.getItem("userEmail") &&
        data.sender === props.reciver
      ) {
        setChats([...chats, data]);
      }
    }
  });

  return (
    <div className={styles.renderChats}>
      {chats &&
        chats.map((mess) => {
          return (
            <div
              key={Math.random()}
              className={
                mess.sender === localStorage.getItem("userEmail")
                  ? styles.sender
                  : styles.reciver
              }
            >
              <p>{mess.message}</p>
            </div>
          );
        })}
    </div>
  );
};
export default RenderAdminChats;
