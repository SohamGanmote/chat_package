import { useNavigate } from "react-router-dom";
import ChatP from "../../components/chat_package/ChatP";
import { useEffect } from "react";
const HomePage = () => {
  const redirect = useNavigate();
  let currentUser = localStorage.getItem("userEmail");
  useEffect(() => {
    if (!currentUser) {
      redirect("/auth/login");
    }
  }, [redirect, currentUser]);
  return (
    <div>
      <button onClick={() => redirect("/admin")}>ShowChats</button>
      {currentUser !== "sohamganmote@gmail.com" && (
        <ChatP username={currentUser} url="http://localhost:8080" />
      )}
    </div>
  );
};
export default HomePage;
