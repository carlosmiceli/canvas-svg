import Head from "next/head";
import { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import styles from "../styles/Login.module.css";

export default function Home() {
  const [switchForm, setSwitchForm] = useState(true);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSwitch = () => {
    setSwitchForm(!switchForm);
  };

  const login = () => {
    localStorage.setItem("user", user);
    localStorage.setItem("password", password);
  };

  const signup = () => {
    localStorage.setItem("user", user);
    localStorage.setItem("password", password);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Canvas by Carlos Miceli</title>
        <meta name="description" content="Canvas MVP by Carlos Miceli" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Canvas!</h1>

        <div className={styles.grid}>
          {switchForm ? (
            <div className={styles.card}>
              <h2>Login</h2>
              <form>
                <TextField
                  id="user-login"
                  placeholder="User"
                  required
                  value={user}
                  onInput={e => setUser(e.target.value)}
                />
                <TextField
                  id="password-login"
                  placeholder="Password"
                  required
                  value={password}
                  onInput={e => setPassword(e.target.value)}
                />
              </form>
              <div className={styles.buttons}>
                <Button onClick={login}>Login</Button>
                <Button onClick={handleSwitch}>Sign Up</Button>
              </div>
            </div>
          ) : (
            <div className={styles.card}>
              <h2>Signup</h2>
              <form>
                <TextField
                  id="user-signup"
                  placeholder="User"
                  required
                  value={user}
                  onInput={e => setUser(e.target.value)}
                />
                <TextField
                  id="password-signup"
                  placeholder="Password"
                  required
                  value={password}
                  onInput={e => setPassword(e.target.value)}
                />
              </form>
              <div className={styles.buttons}>
                <Button onClick={handleSwitch}>Login</Button>
                <Button onClick={signup}>Sign Up</Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
