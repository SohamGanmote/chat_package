import { useState } from "react";
import styles from "./Auth.module.css";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const redirect = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const nameOnChangeHandler = (e) => setName(e.target.value);
  const emailOnChangeHandler = (e) => setEmail(e.target.value);
  const passOnChangeHandler = (e) => setPass(e.target.value);
  const submitHandler = () => {
    if (name !== "" && email !== "" && pass !== "") {
      fetch(`http://localhost:8080/api/auth/signup`, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          pass: pass,
        }),
      })
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          localStorage.setItem("userEmail", email);
          redirect("/");
        });
      setName("");
      setEmail("");
      setPass("");
      setError("");
    } else {
      setError("Invalid Inputs");
    }
  };
  return (
    <div className={styles.auth}>
      <h1>SignUp</h1>
      <div className={styles.input}>
        <label htmlFor="name">Name</label>
        <input
          type="email"
          placeholder="Enter Your Name"
          id="name"
          value={name}
          onChange={nameOnChangeHandler}
        />
      </div>
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
        <button onClick={submitHandler}>SignUp</button>
        <p>
          Already have Account?{" "}
          <span onClick={() => redirect("/auth/login")}>LogIn</span>
        </p>
      </div>
    </div>
  );
};
export default SignUp;
