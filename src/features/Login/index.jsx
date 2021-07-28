import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Row, Col, Space } from "antd";
import "./index.scss";
import images from "../../contants/images";

function UserLogin() {
  let history = useHistory();
  const redirectRegiter = () => {
    history.push("/user-register");
  };
  return (
    <>
      <div className="wrapper-login">
        <Row>
          <Col className="form-left" span={10}>
            <div>
              <div className="form-left__content">
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
          <Col className="content-right" span={14}>
            <div className="content-right__title">
              <h1>WE CANT DO IT</h1>
            </div>
            <div>
              <picture>
                <source
                  width="500px"
                  media="(min-width: 1125px)"
                  srcset={images.LOGO}
                />
                <source
                  width="290px"
                  media="(min-width: 641px)"
                  srcset={images.LOGO}
                />
                <img width="500px" src={images.LOGO} />
              </picture>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UserLogin;
