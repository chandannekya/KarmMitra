import { useState } from "react";
import Button from "@mui/material/Button";
import { Input } from "@mui/material";
import style from "./SignInPage.module.css";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // backend work
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <Input
            className={style.input}
            variant="outlined"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            className={style.input}
            variant="outlined"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <Button type="submit" variant="contained">
            Sign In
          </Button>
        </form>
        <a href="#">Don't have an account?</a>{" "}
        {/* ******************   router work h ********  */}
      </div>
    </div>
  );
}

export default SignUpPage;
