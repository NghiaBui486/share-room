import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Row, Col, Space, Select } from "antd";
import "./index.scss";
import logo from "../../assets/images/logo.png";

function UserRegister(props) {
  const { Option } = Select;

  let history = useHistory();
  const redirectLogin = () => {
    history.push("/user-login");
  };

  return (
    <>
      <div className="wrapper-Register">
        <Row>
          <Col className="content-left" span={14}>
            <div className="content-left__title">
              <h1>WE CANT DO IT</h1>
            </div>
            <div>
              <picture>
                <source
                  width="500px"
                  media="(min-width: 1125px)"
                  srcset={logo}
                />
                <source
                  width="290px"
                  media="(min-width: 641px)"
                  srcset={logo}
                />
                <img width="500px" src={logo} />
              </picture>
            </div>
          </Col>
          <Col className="form-right" span={10}>
            <div>
              <div className="form-right__content">
                <h1>Register In Free</h1>
              </div>
              <div>
                <Form layout="vertical">
                  <Form.Item label="User name">
                    <Input placeholder="Please enter username" />
                  </Form.Item>
                  <Form.Item label="Password">
                    <Input.Password placeholder="Password" />
                  </Form.Item>
                  <Form.Item label="Confirm Password">
                    <Input.Password placeholder="Password" />
                  </Form.Item>
                  <Form.Item label="Address">
                    <Space>
                      <Select placeholder="Province" style={{ width: 102 }}>
                        <Option value="Province">Province</Option>
                      </Select>
                      <Select placeholder="Distric" style={{ width: 102 }}>
                        <Option value="Distric">Distric</Option>
                      </Select>
                      <Select placeholder="Wards" style={{ width: 102 }}>
                        <Option value="Wards">Wards</Option>
                      </Select>
                    </Space>
                  </Form.Item>
                  <Form.Item>
                    <Space>
                      <Button type="primary">Register</Button>
                      <Button onClick={redirectLogin}>Login</Button>
                    </Space>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UserRegister;
