import { useEffect, useState } from "react";
import styles from "./Admin.module.css";
import { useNavigate } from "react-router-dom";
const Admin = () => {
  const redirect = useNavigate();
  const [chats, setChats] = useState([]);
  useEffect(() => {
    const retriveChats = () => {
      fetch(
        `http://localhost:8080/api/chats/conversations/${localStorage.getItem(
          "userEmail"
        )}`,
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
  }, []);
  return (
    <div className={styles.menu}>
      <div className={styles.hedder}>
        <h1>Messages</h1>
        <button onClick={() => redirect("/")}>back</button>
      </div>
      {chats &&
        chats.map((conv) => {
          return (
            <>
              {conv.userName !== "sohamganmote@gmail.com" && (
                <div
                  className={styles.conversetions}
                  key={Math.random()}
                  onClick={() => {
                    redirect(
                      `/chats/${localStorage.getItem("userEmail")}/${
                        conv.userName
                      }`
                    );
                  }}
                >
                  <h1>{conv.userName}</h1>
                  <p>Last Message : {conv.lastMessage}</p>
                </div>
              )}
            </>
          );
        })}
    </div>
  );
};
export default Admin;
