import React from "react";
import { useHistory } from "react-router-dom";
import { Layout } from 'antd';

import AppHeader from "../../../../components/Header";
import AppFooter from "../../../../components/Footer";
import AppCarousel from "../../../../features/ShareRoom/page/carousel";
import AppAbout from "../../../../features/ShareRoom/page/about";
import ApRooms from "../../../../features/ShareRoom/page/rooms";
import AppContact from "../../../../features/ShareRoom/page/contact";
import AppNews from "../../../../features/ShareRoom/page/news";

const { Header, Content, Footer } = Layout;

function MainPage() {
    return (
      <Layout className="mainLayout">
        <Header>
          <AppHeader/>
        </Header>
        <Content>
        <div className="main">
          <AppCarousel/>
          <AppAbout/>
          <AppNews/>
          <ApRooms/>
          {/* <AppWorks/>
          <AppFaq/>
          <AppPricing/>*/}
          <AppContact/> 
        </div>
        </Content>
        <Footer>
          <AppFooter/>  
        </Footer>      
      </Layout>
    );
  }

export default MainPage;
