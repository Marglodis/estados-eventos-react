import { useState } from "react";

function Input({ user, setUser, pass, setPassword }) {
  const [hasChanges, setHasChanges] = useState(false);
  return (
    <>
      <h1 className="title">Login</h1>
      <label>
        <i class="fa-solid fa-user"></i>
        <input
          id="usuario"
          type="text"
          value={user}
          placeholder="username"
          onChange={(e) => {
            setHasChanges(true);
            setUser(e.target.value);
          }}
        ></input>
        {!user && hasChanges && (
          <p>
            El campo <b>username</b> es obligatorio{" "}
          </p>
        )}
      </label>
      <label>
        <i class="fa-solid fa-lock"></i>
        <input
          value={pass}
          type="password"
          id="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </label>
    </>
  );
}

export default Input;
