import Home from "./pages/home/Home"
import Login from "./pages/auth/Login"
import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    const _token = hash.split("&")[0].split("=")[1];
    window.localStorage.setItem("token", _token);
    setToken(_token);
  }, []);

  return (
    !token ?
      <Login />
      : <Home />
  );
}

export default App;
