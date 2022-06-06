import React, {useEffect} from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authenticated } from "../store";

function Auth(props) {
  const auth = useRecoilValue(authenticated);
  const navigate = useNavigate();
  
  useEffect(() => {
      if(!auth.check){
          navigate('/login')
      }
  }, [auth.check]);

  return <Outlet />;
}

export default Auth;
