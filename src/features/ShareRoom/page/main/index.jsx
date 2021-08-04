import React from "react";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";

function MainPage() {
  return (
    <div className="wrapper-home">
      <Header />
      <div style={{ background: "white", height: 200 }}></div>
      <Footer />
    </div>
  );
}

export default MainPage;
