import React from "react";
import { Input, Button, Row, Col } from "antd";
import "./index.scss";

function Search(props) {
  const { Search } = Input;
  return (
    <Row>
      <Col span={22}>
        <Search size="large" enterButton />
      </Col>
      <Col span={2} style={{ textAlign: "end", marginBottom: 30 }}>
        <Button size="large" type="primary" >
          Thêm
        </Button>
      </Col>
    </Row>
  );
}

export default Search;
