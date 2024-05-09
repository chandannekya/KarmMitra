import { useState } from "react";
import Button from "@mui/material/Button";
import { Input } from "@mui/material";
import style from "./SignUpPage.module.css";

function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputs = [
    { placeholder: "Name", type: "text", value: name, setter: setName },
    { placeholder: "Email", type: "email", value: email, setter: setEmail },
    {
      placeholder: "Password",
      type: "password",
      value: password,
      setter: setPassword,
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // backend work
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          {inputs.map((input, index) => (
            <Input
              key={index}
              className={style.input}
              placeholder={input.placeholder}
              variant="outlined"
              type={input.type}
              value={input.value}
              onChange={(event) => input.setter(event.target.value)}
            />
          ))}
          <Button type="submit" variant="contained">
            Sign Up
          </Button>
        </form>
        <a href="#">already have an account?</a>
        {/* ******************   router work h ********  */}
      </div>
    </div>
  );
}

export default SignUpPage;
