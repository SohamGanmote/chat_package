import { useState } from "react";
import styles from "./Auth.module.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const redirect = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const emailOnChangeHandler = (e) => setEmail(e.target.value);
  const passOnChangeHandler = (e) => setPass(e.target.value);
  const submitHandler = () => {
    if (email !== "" && pass !== "") {
      console.log(email);
      console.log(pass);
      setEmail("");
      setPass("");
      setError("");
      //   Check If any Users is There in SQL or NOT
    } else {
      setError("Invalid Input");
    }
  };
  return (
    <div className={styles.auth}>
      <h1>Login</h1>
      <div className={styles.input}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter Your Email"
          id="email"
          value={email}
          onChange={emailOnChangeHandler}
        />
      </div>
      <div className={styles.input}>
        <label htmlFor="pass">Password</label>
        <input
          type="password"
          placeholder="Enter Your Password"
          id="pass"
          value={pass}
          onChange={passOnChangeHandler}
        />
      </div>
      <div className={styles.submitBtnDiv}>
        <p style={{ color: "red" }}>{error}</p>
        <button onClick={submitHandler}>Login</button>
        <p>
          Don't have Account?{" "}
          <span onClick={() => redirect("/auth/signup")}>SignUp</span>
        </p>
      </div>
    </div>
  );
};
export default Login;
