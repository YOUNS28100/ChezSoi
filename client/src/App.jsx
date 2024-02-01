import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/NavigationBar";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [auth, setAuth] = useState("hello i'm auth");
  return (
    <div>
      <Navbar context={{ auth, setAuth }} />
      <Outlet context={{ auth, setAuth }} />
      <Footer />
    </div>
  );
}

export default App;
