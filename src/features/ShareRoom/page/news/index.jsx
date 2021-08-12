import React from 'react';

import image1 from '../../../../assets/images/modern-design.jpg';
import image2 from '../../../../assets/images/clean-design.jpg';
import image3 from '../../../../assets/images/great-support.jpg';

import { Row, Col } from 'antd';
import { Card, Pagination } from 'antd';
const { Meta } = Card;

function AppNews() {
  return (
    <div id="news" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Phòng trọ mới nhất</h2>
          <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
        </div>
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
        </Row>
      </div>
    </div>
  );
}

export default AppNews;