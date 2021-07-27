import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

function MainPage() {
  let history = useHistory();
  const redirectLogin = () => {
    history.push("/user-login");
  };

  return (
    <div style={{textAlign: "center", marginTop: 100}}>
      <Button type="primary" onClick={redirectLogin}>
        Redirect Login
      </Button>
    </div>
  );
}

export default MainPage;
