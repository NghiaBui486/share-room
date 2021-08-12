import React from 'react';

import image1 from '../../../../assets/images/modern-design.jpg';
import image2 from '../../../../assets/images/clean-design.jpg';
import image3 from '../../../../assets/images/great-support.jpg';
import image4 from '../../../../assets/images/easy-customise.jpg';
import image5 from '../../../../assets/images/unlimited-features.jpg';
import image6 from '../../../../assets/images/advanced-option.jpg';

import Filter from "../../../../features/ShareRoom/page/filter";

import { Row, Col } from 'antd';
import { Card, Pagination, Space } from 'antd';
const { Meta } = Card;

function AppRooms() {
  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Phòng trọ với giá tốt nhất</h2>
          <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
        </div>
        <Space direction="vertical">
          <Filter/>
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card
                hoverable
                cover={<img alt="Modern Design" src={image1} />}
              >
                <Meta title="Modern Design" />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card
                hoverable
                cover={<img alt="Test" src={image2} />}
              >
                <Meta title="Clean and Elegant" />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card
                hoverable
                cover={<img alt="Test" src={image3} />}
              >
                <Meta title="Great Support" />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card
                hoverable
                cover={<img alt="Test" src={image4} />}
              >
                <Meta title="Easy to customise" />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card
                hoverable
                cover={<img alt="Test" src={image5} />}
              >
                <Meta title="Unlimited Features" />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card
                hoverable
                cover={<img alt="Test" src={image6} />}
              >
                <Meta title="Advanced Options" />
              </Card>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Pagination defaultCurrent={1} total={50} />
            </Col>
          </Row>
        </Space>
      </div>
    </div>
  );
}

export default AppRooms;