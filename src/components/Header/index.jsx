import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Space, Input, Button } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  BellOutlined,
  MoreOutlined,
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
              <img src={images.LOGO}/>
            </Col>
            <Col span={17} className="content__label">
              <Space direction="vertical">
                <b style={{ color: "#2b78e4" }}>Phòng trọ giá tốt</b>
                <b style={{ color: "#cc352c" }}>Tin tức phòng trọ sinh viên</b>
              </Space>
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <div className="menu">
            <ul>
              <li>
                <Link className="link" to="/">
                  <HomeOutlined /> Trang chủ
                </Link>
              </li>
              <li>
                <Link className="link" to="/quan-ly">
                  <UserOutlined /> Quản lý
                </Link>
              </li>
              <li>
                <Link className="link" to="/thong-bao">
                  <BellOutlined /> Thông báo
                </Link>
              </li>
              <li>
                <Link className="link" to="/them">
                  <MoreOutlined /> Thêm
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
              <div className="sub-func__login">
                <UserOutlined style={{ color: "#2b78e4" }} />
                &ensp;
                <Link to="user-login" style={{ color: "#2b78e4" }}>
                  Đăng nhập
                </Link>
              </div>
              <Button type="primary" danger>
                <FormOutlined />
                Đăng tin
              </Button>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Header;
