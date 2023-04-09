import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Home/HomePage";
import Root from "./pages/Root";

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
      children: [{ index: true, element: <Home /> }],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
