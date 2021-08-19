import React from "react";
import { Layout, Row, Col } from 'antd';

import AppHeader from "../../../../components/Header";
import AppFooter from "../../../../components/Footer";
import AppCarousel from "../../components/carousel"
import AppComment from "../comment"
import AppDescribe from "../describe"
import AppUserinfo from "../userinfo"
import AppState  from "../state"
import './../../index.scss';

const { Header, Content, Footer } = Layout;

function DetailPage() {
    return (
      <Layout className="mainLayout">
        <Header>
          <AppHeader/>
        </Header>
        <Content>
        <div className="main">
        <Row gutter={[16, 16]}>
            <Col xs={{ span: 14 }} sm={{ span: 14 }} md={{ span: 14 }}> 
            <AppCarousel/>
            <AppDescribe/>
            </Col>
          <Col xs={{ span: 10 }} sm={{ span: 10 }} md={{ span: 10 }} >
            <AppUserinfo/>
            <AppState/>
          </Col>
        </Row>
        <Row  gutter={[16, 16]}>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 22}} > 
              <AppComment/>
            </Col>
        </Row>
        
        </div>
        </Content>
        <Footer>
          <AppFooter/>  
        </Footer>      
      </Layout>
    );
  }

export default DetailPage;
