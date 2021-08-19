import React from "react";
import { Layout } from 'antd';
import AppHeader from "../../../../components/Header";
import AppFooter from "../../../../components/Footer";
import AppCarousel from "../../components/carousel";
import AppAbout from "../../components/about";
import ApRooms from "../rooms";
import AppContact from "../../components/contact";
import AppNews from "../news";

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
