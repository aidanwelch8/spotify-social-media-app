import Home from "./pages/home/Home"
import Login from "./pages/auth/Login"
import { useEffect, useState } from "react";
import { setClientToken } from "./pages/auth/Spotify";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return ( !token ? <Login /> : <Home />
  );
}

export default App;
