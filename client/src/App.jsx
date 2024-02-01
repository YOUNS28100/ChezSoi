import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/NavigationBar";
import "./App.css";

function App() {
  const [auth, setAuth] = useState("hello i'm auth");
  return (
    <div>
      <Navbar context={{ auth, setAuth }} />
      <Outlet context={{ auth, setAuth }} />
    </div>
  );
}

export default App;
