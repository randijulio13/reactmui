import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Router from "./router";
import { authenticated } from "./store";
import Spinner from "./components/Spinner";

function App(props) {
  const [auth, setAuth] = useRecoilState(authenticated);
  const [mounted, setMounted] = useState(false);

  const getMe = async () => {
    try {
      setMounted(false);
      let { data } = await axios.get("me");
      setAuth({
        check: true,
        user: data.data,
      });
    } catch (err) {}
    setMounted(true);
  };

  useEffect(() => {
    getMe();
  }, [auth.check]);

  return mounted ? <Router /> : <Spinner />;
}

export default App;
