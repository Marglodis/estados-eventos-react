import Input from "./components/Input";
import Buton from "./components/Boton";

import React, { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  return (
    <form>
      <Input user={user} setUser={setUser} pass={pass} setPassword={setPass} />
      <Buton user={user} pass={pass} />
    </form>
    
  );
}

export default App;