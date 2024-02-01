import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/NavBar";
import "./App.css";

function App() {
  const [auth, setAuth] = useState("");
  const [search, setSearch] = useState("");

  return (
    <div>
      <Navbar auth={auth} setAuth={setAuth} />
      <Outlet context={{ auth, setAuth, search, setSearch }} />
    </div>
  );
}

export default App;
