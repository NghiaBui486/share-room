import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../../../components/Header"
import Footer from "../../../../components/Footer"


function MainPage() {
  let history = useHistory();
  const redirectLogin = () => {
    history.push("/user-login");
  };

  return (
    <div className="wrapper-home">
      <Header />
      <div style={{height: 200}}></div>
      <Footer />
    </div>
  );
}

export default MainPage;
