import React, { useState } from "react";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputFields = [
    {
      type: "text",
      placeholder: "Name",
      value: name,
      onChange: setName,
      className:
        "p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500",
    },
    {
      type: "email",
      placeholder: "Email",
      value: email,
      onChange: setEmail,
      className:
        "p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500",
    },
    {
      type: "password",
      placeholder: "Password",
      value: password,
      onChange: setPassword,
      className:
        "p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500",
    },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic here (e.g., API call)
    console.log("Login:", email, password);
  };

  return (
    <div className="flex justify-center items-center h-screen shadow-lg p-10 m-10 bg-[rgba(35,34,34,0.1)] backdrop-blur-md rounded">
      <form
        onSubmit={handleLogin}
        className="flex flex-col space-y-4 w-full max-w-md mx-auto"
      >
        <h1 className="text-2xl font-bold text-center">SignUp</h1>
        {inputFields.map((field, index) => (
          <div className="relative" key={index}>
            <input
              id={`field${index}`}
              type={field.type}
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              className={`rounded block w-full px-2 pt-7 pb-1 border-b-2 focus:ring-0 focus:border-black ${
                field.value ? "pt-7" : "pt-3.5"
              } transition-all duration-300`}
              required
            />
            <label
              htmlFor={`field${index}`}
              className="absolute top-0 left-0 h-full px-2 transition-all duration-300 transform origin-left scale-100 text-gray-500"
            >
              {field.placeholder}
            </label>
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          SignUp
        </button>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 mr-1 text-white py-2 px-4 rounded-md hover:bg-blue-700 w-1/2"
          >
            SignUp using Google
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white ml-1 py-2 px-4 rounded-md hover:bg-blue-700 w-1/2"
          >
            SignUp using Facebook
          </button>
        </div>
        <div className="flex justify-center items-center">
          <a className="text-blue-500 no-underline">
            already have account? SignIn
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
