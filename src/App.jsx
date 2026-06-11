import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/register",
        user
      );

      setMessage(res.data.message);

      setUser({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
      setMessage("Registration Failed");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>User Registration</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={user.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={user.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={user.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>

        {message && <p className="success">{message}</p>}
      </div>
    </div>
  );
}

export default App;