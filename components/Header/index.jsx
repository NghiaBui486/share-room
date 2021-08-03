import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Space, Input, Button } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  BellOutlined,
  BarsOutlined,
  FilterFilled,
  SearchOutlined,
  FormOutlined,
} from "@ant-design/icons";
import "./index.scss";
import images from "../../contants/images";

function Header() {
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
                <b style={{ color: "#aeeb34" }}>PHÒNG TRỌ GIÁ TỐT</b>
                <b style={{ color: "#aeeb34" }}>Tin tức phòng trọ sinh viên</b>
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
            <Space size="large">
              <Link className="sub-func__login" to="user-login">
                <UserOutlined style={{ color: "#ffffff" }} />
                &nbsp; Đăng nhập
              </Link>
              <Button type="primary" danger>
                <FormOutlined />
                &nbsp; Đăng tin
              </Button>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Header;
