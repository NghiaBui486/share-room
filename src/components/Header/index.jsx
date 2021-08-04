import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Row, Col, Space, Input, Button } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  BellOutlined,
  BarsOutlined,
  FilterFilled,
  SearchOutlined,
  FormOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./index.scss";
import images from "../../contants/images";

function Header() {
  let history = useHistory();
  const clearToken = () => {
    localStorage.clear();
    history.push("/");
  };
  //Check fullname
  const checkName = () => {
    if (localStorage.getItem("name")) {
      return (
        <>
          <li>
            <Link
              className="link"
              to="/user-login"
              style={{
                overflowX: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                width: 90,
                display: "inline-block",
              }}
            >
              <UserOutlined style={{ fontSize: 20 }} />{" "}
              {localStorage.getItem("name")}
            </Link>
          </li>
          <li>
            <Link className="link" onClick={clearToken}>
              <LogoutOutlined style={{ fontSize: 20 }} /> Đăng xuất
            </Link>
          </li>
        </>
      );
    } else {
      return (
        <li style={{ width: 235 }}>
          <Link className="link" to="/user-login">
            <LoginOutlined style={{ fontSize: 20 }} /> Đăng nhập
          </Link>
        </li>
      );
    }
  };

  return (
    <div className="wrapper-header">
      <Row align="bottom">
        <Col span={12} className="content">
          <Row align="bottom">
            <Col span={7} className="content__img">
              <img src={images.LOGO} />
            </Col>
            <Col span={17} className="content__label">
              <Space direction="vertical">
                <b style={{ color: "gold" }}>Phòng trọ giá tốt</b>
                <b style={{ color: "red" }}>Tin tức phòng trọ sinh viên</b>
              </Space>
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <div className="menu">
            <ul>
              <li>
                <Link className="link" to="/">
                  <HomeOutlined style={{ fontSize: 20 }} /> Trang chủ
                </Link>
              </li>
              <li>
                <Link className="link" to="/quan-ly">
                  <UserOutlined style={{ fontSize: 20 }} /> Quản lý
                </Link>
              </li>
              <li>
                <Link className="link" to="/thong-bao">
                  <BellOutlined style={{ fontSize: 20 }} /> Thông báo
                </Link>
              </li>
              <li>
                <Link className="link" to="/them">
                  <BarsOutlined style={{ fontSize: 20 }} /> Thêm
                </Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <div className="func">
        <Row>
          <Col className="search-left" span={15} style={{ textAlign: "end" }}>
            <Input
              className="search-left__input"
              placeholder="Tìm phòng trọ"
              size="middle"
              suffix={
                <>
                  <Space>
                    <FilterFilled style={{ fontSize: 24 }} />
                    <SearchOutlined
                      style={{ fontSize: 24, color: "#2b78e4" }}
                    />
                  </Space>
                </>
              }
            />
          </Col>
          <Col span={9} className="sub-func">
            <ul>
              {checkName()}
              <li>
                <Button type="primary" danger>
                  <FormOutlined /> Đăng tin
                </Button>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Header;
