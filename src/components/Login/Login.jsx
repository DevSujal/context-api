import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";

const Login = () => {
  const { setUser } = useContext(UserContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser({
      userName,
      password,
    });
  };
  return (
    <div className="bg-gray-500 w-full flex flex-col gap-4 p-4 rounded">
      <h2 className="text-center font-semibold text-xl text-cyan-200">Login</h2>
      <input
        className="p-3 text-black rounded "
        type="text"
        placeholder="Username"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        className="p-3 text-black rounded"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className=" p-3 bg-blue-700 rounded-md text-white"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
