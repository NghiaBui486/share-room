import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Space } from "antd";
import { useHistory } from "react-router-dom"
import "./index.scss";
import logo from "../../assets/images/logo.png";

function UserLogin() {
  let history = useHistory();
  const redirectRegiter = () => {
    history.push("/user-register")

  }

  return (
    <>
      <div className="wrapper_Login">
        <Row>
          <Col className="form_left" span={10}>
            <div>
              <div className="form_content">
                <h1>Sign In Free</h1>
              </div>
              <div>
                <Form layout="vertical">
                  <Form.Item label="User name">
                    <Input placeholder="Please enter username" />
                  </Form.Item>
                  <Form.Item label="Password">
                    <Input.Password placeholder="Password" />
                  </Form.Item>
                  <Form.Item>
                    <Space>
                      <Button type="primary">Sign In</Button>
                      <Button onClick={redirectRegiter}>Register</Button>
                    </Space>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </Col>
          <Col className="content_right" span={14}>
            <div className="content_title">
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
        </Row>
      </div>
    </>
  );
}

export default UserLogin;
