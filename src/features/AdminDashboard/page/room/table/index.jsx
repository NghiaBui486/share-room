import React from "react";
import { Row, Col, Table } from "antd";

function TableRoom(props) {
  return (
    <Row>
      <Col span={24}>
        <Table scroll={{ y: 280 }} pagination={{ defaultPageSize: 5 }} />
      </Col>
    </Row>
  );
}

export default TableRoom;
