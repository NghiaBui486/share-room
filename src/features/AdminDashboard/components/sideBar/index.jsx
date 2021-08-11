import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  StarOutlined,
  LineChartOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import "./index.scss";

function SideBar(props) {
  let history = useHistory();
  const { Sider } = Layout;
  const { SubMenu } = Menu;
  const clearToken = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        selectable={false}
        defaultOpenKeys={["acc", "room", "evaluate"]}
      >
        <SubMenu key="acc" icon={<UserOutlined />} title="Tài khoản">
          <Menu.Item key="accUser">
            <Link to="/admin-dashboard/user">Người thuê trọ</Link>
          </Menu.Item>
          <Menu.Item disabled key="accOwner">
            <Link to="/admin-dashboard/owner">Chủ trọ</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="room" icon={<HomeOutlined />} title="Phòng trọ">
          <Menu.Item key="roomList">
            <Link to="/admin-dashboard/list-room">Danh sách</Link>
          </Menu.Item>
          <Menu.Item disabled key="roomSharing">
            <Link to="/admin-dashboard/room-sharing">Room sharing</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="evaluate" icon={<StarOutlined />} title="Đánh giá">
          <Menu.Item disabled key="evaluateReview">
            <Link to="/admin-dashboard/review">Review</Link>
          </Menu.Item>
          <Menu.Item disabled key="evaluateComment">
            <Link to="/admin-dashboard/comment">Bình luận</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item disabled key="statistical" icon={<LineChartOutlined />}>
          <Link to="/admin-dashboard-statistical">Thống kê</Link>
        </Menu.Item>
        <Menu.Item key="logOut" icon={<ExportOutlined />}>
          <Link onClick={clearToken}>Đăng xuất</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default SideBar;
