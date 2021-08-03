import React from "react";
import { Link } from "react-router-dom";
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
          <p>
            <Link className="column__link" to="/">An toàn mua bán</Link>
          </p>
          <p>
            <Link className="column__link" to="/">Quy định cần thiết</Link>
          </p>
          <p>
            <Link className="column__link" to="/">Chính sách riêng tư</Link>
          </p>
        </Col>
        <Col className="column" span={6}>
          <p style={{ fontSize: 20 }}>HỖ TRỢ KHÁCH HÀNG</p>
          <p>
            <Link className="column__link" to="/">Trung tâm trợ giúp</Link>
          </p>
          <p>
            <Link className="column__link" to="/">Liên hệ hỗ trợ</Link>
          </p>
          <p>
            <Link className="column__link" to="/">Hotline: 0963858xxx</Link>
          </p>
        </Col>
        <Col className="column" span={6}>
          <p style={{ fontSize: 20 }}>VỀ CHÚNG TÔI</p>
          <p>
            <Link className="column__link" to="/">Giới thiệu</Link>
          </p>
          <p>
            <Link className="column__link" to="/">Tuyển dụng</Link>
          </p>
          <p>
            <Link className="column__link" to="/">Truyền thông</Link>
          </p>
        </Col>
        <Col className="column" span={6}>
          <p style={{ fontSize: 20 }}>LIÊN KẾT</p>
          <p>
            <Space size="middle">
              <Link to="/" className="column__link"><FacebookOutlined style={{ fontSize: 30 }} /></Link>
              <Link to="/" className="column__link"><YoutubeOutlined style={{ fontSize: 30 }} /></Link>
              <Link to="/" className="column__link"><GooglePlusOutlined style={{ fontSize: 30 }} /></Link>
            </Space>
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
