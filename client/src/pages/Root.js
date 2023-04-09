import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <section>
      <p>NavBar</p>
      <Outlet />
    </section>
  );
};
export default Root;
