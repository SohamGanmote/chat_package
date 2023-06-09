import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Home/HomePage";
import Root from "./pages/Root";
import Admin from "./pages/Admin/Admin";
import AdminChats from "./pages/Admin/AdminChats";

function App() {
  const router = createBrowserRouter([
    // Auth Routes
    {
      path: "/auth",
      children: [
        { path: "login", element: <Login /> },
        { path: "signup", element: <SignUp /> },
      ],
    },

    // Home Page Route
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/admin",
          element: <Admin />,
        },
        {
          path: "chats/:sender/:reciver",
          element: <AdminChats url="http://localhost:8080" />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
