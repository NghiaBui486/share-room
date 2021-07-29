import React from "react";
import { Row, Col, Space } from "antd";
import {
    FacebookOutlined,
    YoutubeOutlined,
    GooglePlusOutlined,
  } from "@ant-design/icons";
import "./index.scss";

function Footer() {
  return (
    <div className="wrapper-footer">
      <Row>
        <Col className="column" span={6}>
          <p style={{ fontSize: 20 }}>CHÍNH SÁCH BẢO MẬT</p>
          <p>An toàn mua bán</p>
          <p>Quy định cần thiết</p>
          <p>Chính sách riêng tư</p>
        </Col>
        <Col className="column" span={6}>
          <p style={{ fontSize: 20 }}>HỖ TRỢ KHÁCH HÀNG</p>
          <p>Trung tâm trợ giúp</p>
          <p>Liên hệ hỗ trợ</p>
          <p>Hotline: 0963858xxx</p>
        </Col>
        <Col className="column" span={6}>
          <p style={{ fontSize: 20 }}>VỀ CHÚNG TÔI</p>
          <p>Giới thiệu</p>
          <p>Tuyển dụng</p>
          <p>Tryền thông</p>
        </Col>
        <Col className="column" span={6}>
          <p style={{ fontSize: 20 }}>LIÊN KẾT</p>
          <p>
            <Space size="middle">
              <FacebookOutlined style={{fontSize: 30}} />
              <YoutubeOutlined style={{fontSize: 30}} />
              <GooglePlusOutlined style={{fontSize: 30}} />
            </Space>
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
