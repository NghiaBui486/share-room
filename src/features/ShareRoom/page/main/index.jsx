import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../../../components/Header"
import Footer from "../../../../components/Footer"
import Filter from "../../../../features/ShareRoom/page/filter"
import List_post from "../../page/list"
import New from "../../page/new"
import { Row, Col, Space } from "antd";
import Category from "../../page/category";

function MainPage() {
  let history = useHistory();
  const redirectLogin = () => {
    history.push("/user-login");
  };

  return (
    <div className="wrapper-home">
      
            <Header/>
      <div style={{height:20}}></div>
      
      <div className='body'>
        <Row>
        <Filter/>
        </Row>

        <Row>
        <Col span='13' offset={2}> 
            <List_post/>
        </Col>

        <Col span='7' offset={1} > 
           <New/>
           <Category/>
        </Col>
        </Row>
      </div>
        
      <div style={{height: 200}}></div>
            <Footer />
  
    </div>
  );
}

export default MainPage;
