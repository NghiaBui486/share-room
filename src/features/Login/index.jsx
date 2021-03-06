import React, { useState, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Row, Col, Space, notification } from "antd";
import "./index.scss";
import images from "../../contants/images";
import userApi from "../../api/userApi";

function UserLogin() {
  let history = useHistory();
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  useMemo(() => {
    if (localStorage.getItem("token")) {
      history.push("/");
    }
  });
  const redirectRegiter = () => {
    history.push("/user-register");
  };
  const redirectHomePage = () => {
    history.push("/");
  };
  const handleLogin = () => {
    const passwordDB = window.btoa(userName + ":" + password);
    const inFo = {
      username: userName,
      password: passwordDB,
    };
    userApi
      .authenticate(inFo)
      .then((res) => {
        if (res.role === "User" || res.role === "Owner") {
          if (res.token) {
            localStorage.setItem("token", res.token);
            localStorage.setItem("name", res.name);
            localStorage.setItem("userId", res.userId);
            history.push("/");
          }
        } else if (res.role === "Admin") {
          if (res.token) {
            localStorage.setItem("token", res.token);
            localStorage.setItem("name", res.name);
            history.push("/admin-dashboard");
          }
        } else {
          notification["error"]({
            message: "Localhost say:",
            description: "Tài khoản hoặc mật khẩu không chính xác",
          });
        }
      })
      .catch(() => {
        notification["error"]({
          message: "Localhost say:",
          description: "Tài khoản hoặc mật khẩu không chính xác",
        });
      });
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
                <Form onFinish={handleLogin} layout="vertical">
                  <Form.Item
                    label="Username"
                    name="userName"
                    rules={[
                      {
                        required: true,
                        message: "Username không được để trống",
                      },
                      {
                        pattern: new RegExp(/^[a-zA-Z0-9]+$/i),
                        message: "Tên đăng nhập không chứa kí tự đặc biệt",
                      },
                    ]}
                  >
                    <Input
                      onChange={(e) => {
                        setUserName(e.target.value);
                      }}
                      placeholder="Please enter username"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Password không được để trống",
                      },
                    ]}
                  >
                    <Input.Password
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Space>
                      <Button htmlType="submit" type="primary">
                        Sign In
                      </Button>
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
              <picture onClick={redirectHomePage}>
                <source
                  width="500px"
                  media="(min-width: 1125px)"
                  srcSet={images.LOGO}
                />
                <source
                  width="290px"
                  media="(min-width: 641px)"
                  srcSet={images.LOGO}
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
