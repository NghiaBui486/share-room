import React, { useState } from "react";
import { Layout } from "antd";
import { Redirect } from "react-router";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import SideBar from "../../components/sideBar";

function MainPage(props) {
  const { Header, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Redirect to="/admin-dashboard/user" />
      <Layout>
        <SideBar collapsed={collapsed} />
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "16px 16px",
              padding: 24,
            }}
          >
            {props.component}
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default MainPage;
