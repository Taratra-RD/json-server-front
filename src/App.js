import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  let name = document.getElementById("name");
  let password = document.getElementById("password");

  const handlePost = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api", user)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    name.value = "";
    password.value = "";
    setUser(null);
  };

  const create = () => {
    axios
      .get("http://localhost:8080")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, [users]);

  return (
    <div className="App">
      <div className="app--form">
        <button onClick={create}>Create table</button>
        <form>
          <h4>CREATE LOGIN</h4>
          <label>
            <input
              type="text"
              onChange={(e) => setUser({ name: e.target.value })}
              placeholder="name"
              id="name"
            />
          </label>
          <label>
            <input
              id="password"
              type="text"
              onChange={(e) =>
                setUser((prev) => ({ ...prev, password: e.target.value }))
              }
              placeholder="password"
            />
          </label>
          <button
            onClick={handlePost}
            disabled={user === null ? true : false}
            style={
              user === null
                ? { boxShadow: "15rem 2.5rem inset rgba(0,0,0,0.5)" }
                : { boxShadow: "none" }
            }
          >
            Add
          </button>
        </form>
      </div>
      <div className="app--list">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map((value, i) => (
              <tr key={i}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
