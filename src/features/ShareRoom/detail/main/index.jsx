import React from "react";
import { useHistory } from "react-router-dom";
import { Layout, Row } from 'antd';

import AppHeader from "../../../../components/Header";
import AppFooter from "../../../../components/Footer";
import AppCarousel from "../../../../features/ShareRoom/detail/carousel"
import AppComment from "../../../../features/ShareRoom/detail/comment"
import AppDescribe from "../../../../features/ShareRoom/detail/describe"
import AppInforUser from "../../../../features/ShareRoom/detail/inforUser"
import AppState from "../../../../features/ShareRoom/detail/state"



const { Header, Content, Footer } = Layout;

function DetailPage() {
    return (
      <Layout className="mainLayout">
        <Header>
          <AppHeader/>
        </Header>
        <Content>
        <div className="main">

          <AppCarousel/>
        </div>
        </Content>
        <Footer>
          <AppFooter/>  
        </Footer>      
      </Layout>
    );
  }

export default DetailPage;
