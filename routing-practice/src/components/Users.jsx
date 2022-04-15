import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div
      className="text-center display-6 mt-5 bg-warning m-5"
      style={{ borderRadius: "20px" }}
    >
      <h1 className="text-dark">Thanks to</h1>
      {users.map((user) => (
        <li
          key={user.id}
          className="mb-2 text-dark"
          style={{ listStyleType: "none" }}
        >
          {user.name}
        </li>
      ))}

      <Link to="/" className="anchorUnderLineRemove text-primary h1">
        Back to Home
      </Link>
    </div>
  );
}

export default Users;
