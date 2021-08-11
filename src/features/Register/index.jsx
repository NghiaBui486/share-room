import React, { useState, useMemo } from "react";
import { useHistory } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Space,
  Select,
  notification,
} from "antd";
import "./index.scss";
import logo from "../../assets/images/logo.png";
import userApi from "../../api/userApi";

function UserRegister(props) {
  let history = useHistory();
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [role, setRole] = useState(null);
  useMemo(() => {
    if (localStorage.getItem("token")) {
      history.push("/");
    }
  });
  const redirectLogin = () => {
    history.push("/user-login");
  };
  const redirectHomePage = () => {
    history.push("/");
  };
  const handleRegister = () => {
    const inFo = {
      userName: userName,
      password: password,
      name: fullName,
      email: email,
      role: role,
    };
    userApi
      .register(inFo)
      .then(() => {
        notification["success"]({
          message: "Localhost say:",
          description: "Đăng ký thành công",
        });
        setTimeout(() => {
          history.push("/user-login");
        }, 1000);
      })
      .catch(() => {
        console.log("ERROR");
      });
  };

  return (
    <>
      <div className="wrapper-register">
        <Row>
          <Col className="content-left" span={14}>
            <div className="content-left__title">
              <h1>WE CANT DO IT</h1>
            </div>
            <div>
              <picture onClick={redirectHomePage}>
                <source
                  width="500px"
                  media="(min-width: 1125px)"
                  srcSet={logo}
                />
                <source
                  width="290px"
                  media="(min-width: 641px)"
                  srcSet={logo}
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
                <Form onFinish={handleRegister} layout="vertical">
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
                      {
                        pattern: new RegExp(/^[a-zA-Z0-9]+$/i),
                        message: "Mật khẩu không chứa kí tự đặc biệt",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Password không được để trống",
                      },
                      {
                        pattern: new RegExp(/^[a-zA-Z0-9]+$/i),
                        message: "Mật khẩu không chứa kí tự đặc biệt",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error("Mật khẩu không trùng khớp")
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password placeholder="Password" />
                  </Form.Item>
                  <Form.Item
                    label="Fullname"
                    name="fullName"
                    rules={[
                      {
                        required: true,
                        message: "Fullname không được để trống",
                      },
                      {
                        pattern: new RegExp(/[a-zA-Z]+$/i),
                        message: "Họ tên không chứa kí tự đặc biệt",
                      },
                    ]}
                  >
                    <Input
                      onChange={(e) => {
                        setFullName(e.target.value);
                      }}
                      placeholder="Enter your fullname"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Email không được để trống",
                      },
                      {
                        pattern: new RegExp(/[a-zA-Z0-9@.]+$/i),
                        message: "Email không chứa kí tự đặc biệt",
                      },
                    ]}
                  >
                    <Input
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      placeholder="@gmail.com"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Account type"
                    name="accountType"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng chọn loại tài khoản",
                      },
                    ]}
                  >
                    <Select
                      onChange={(e) => {
                        setRole(e);
                      }}
                      placeholder="Please choose account type"
                    >
                      <Select.Option value="2">Owner</Select.Option>
                      <Select.Option value="3">User</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <Space>
                      <Button htmlType="submit" type="primary">
                        Register
                      </Button>
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
