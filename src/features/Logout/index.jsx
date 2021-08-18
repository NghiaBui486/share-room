import React, { useMemo } from "react";
import { useHistory } from "react-router-dom";

function Logout(props) {
  let history = useHistory();
  useMemo(() => {
    if(localStorage.getItem("token")){
      localStorage.clear();
      history.push("/");
    }
    else
      console.log("ERROR");
  }, [])
  return <></>;
}

export default Logout;
