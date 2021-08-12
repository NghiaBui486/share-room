import React, { useState, useRef } from "react";
import {
  Input,
  Button,
  Row,
  Col,
  Space,
  Modal,
  Form,
  Select,
  Upload,
  notification,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { storage } from "../../../fireBase";
import "./index.scss";
import userApi from "../../../../../api/userApi";

function Search(props) {
  const { Search } = Input;
  const [form] = Form.useForm();
  const [visibleAddForm, setVisibleAddForm] = useState(false);

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [dateOfBirth, setDayOfBirth] = useState();
  const [gender, setGender] = useState();
  const [uploadUrl, setUploadUrl] = useState(null);
  const [role, setRole] = useState();
  const uploadInput = useRef();
  const showModal = () => {
    setVisibleAddForm(true);
  };
  const apiRegister = (inFo) => {
    userApi
      .register(inFo)
      .then(() => {
        props.refreshData();
        notification["success"]({
          message: "Localhost say:",
          description: "Đăng ký thành công",
        });
        setTimeout(() => {
          setUploadUrl(null);
          form.resetFields();
          setVisibleAddForm(false);
        }, 2000);
      })
      .catch(() => {
        console.log("ERROR");
      });
  };
  const handleRegister = () => {
    if (uploadUrl === null) {
      const inFo = {
        userName: userName,
        password: password,
        name: fullName,
        email: email,
        address: address,
        phone: phone,
        birthDate: dateOfBirth,
        gender: gender === 1 ? true : false,
        role: role,
      };
      apiRegister(inFo);
    } else {
      const uploadTask = storage.ref(`images/${uploadUrl.name}`).put(uploadUrl);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(uploadUrl.name)
            .getDownloadURL()
            .then((url) => {
              const inFo = {
                userName: userName,
                password: password,
                name: fullName,
                email: email,
                address: address,
                phone: phone,
                birthDate: dateOfBirth,
                gender: gender === 1 ? true : false,
                avatarUrl: url,
                role: role,
              };
              apiRegister(inFo);
            });
        }
      );
    }
  };
  const handleCancel = () => {
    setUploadUrl(null);
    form.resetFields();
    setVisibleAddForm(false);
  };
  return (
    <Row>
      <Col span={22}>
        <Search size="large" placeholder="Nhập tên tài khoản" enterButton />
      </Col>
      <Col span={2} style={{ textAlign: "end", marginBottom: 30 }}>
        <Button size="large" type="primary" onClick={showModal}>
          Thêm
        </Button>
        <Modal
          destroyOnClose={true}
          title="Thêm tài khoản"
          style={{ top: 0 }}
          visible={visibleAddForm}
          footer={null}
          onCancel={handleCancel}
          width={600}
        >
          <Form form={form} onFinish={handleRegister} layout="vertical">
            <Row>
              <Col span={8} style={{ paddingRight: 15, textAlign: "center" }}>
                <Upload
                  ref={uploadInput}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture"
                  onRemove={() => {
                    setUploadUrl(null);
                  }}
                  maxCount={1}
                  beforeUpload={(file) => {
                    setUploadUrl(file);
                  }}
                >
                  <Button icon={<UploadOutlined />}>Ảnh đại diện</Button>
                </Upload>
              </Col>
              <Col span={16}>
                <Form.Item
                  label="Tài khoản:"
                  name="userName"
                  rules={[
                    {
                      required: true,
                      message: "Tài khoản không được để trống",
                    },
                    {
                      pattern: new RegExp(/^[a-zA-Z0-9]+$/i),
                      message: "Tài khoản không chứa kí tự đặc biệt",
                    },
                  ]}
                >
                  <Input
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                    placeholder="Nhập tên tài khoản"
                  />
                </Form.Item>
                <Form.Item
                  label="Mật khẩu:"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Mật khẩu không được để trống",
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
                    placeholder="Mật khẩu"
                  />
                </Form.Item>
                <Form.Item
                  label="Xác nhận mật khẩu:"
                  name="confirmPassword"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Mật khẩu không được để trống",
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
                  <Input.Password placeholder="Xác nhận mật khẩu" />
                </Form.Item>
                <Form.Item
                  label="Họ và tên:"
                  name="fullName"
                  rules={[
                    {
                      pattern: new RegExp(/[a-zA-Z]+$/i),
                      message: "Họ, tên không chứa kí tự đặc biệt",
                    },
                  ]}
                >
                  <Input
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                    placeholder="Nhập họ và tên"
                  />
                </Form.Item>
                <Form.Item
                  label="Email:"
                  name="email"
                  rules={[
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
                <Form.Item label="Địa chỉ:" name="address">
                  <Input
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    placeholder="Nhập địa chỉ"
                  />
                </Form.Item>
                <Form.Item
                  label="SĐT:"
                  name="phone"
                  rules={[
                    {
                      pattern: new RegExp(/[0-9]+$/i),
                      message: "SĐT phải là số",
                    },
                  ]}
                >
                  <Input
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    placeholder="Nhập SĐT"
                  />
                </Form.Item>
                <Form.Item label="Ngày sinh" name="dateOfBirth">
                  <Input
                    onChange={(e) => {
                      setDayOfBirth(e.target.value);
                    }}
                    placeholder="VD: 2000-06-04"
                  />
                </Form.Item>
                <Form.Item label="Giới tính:" name="gender">
                  <Select
                    onChange={(e) => {
                      setGender(e);
                    }}
                    placeholder="Chọn giới tính"
                  >
                    <Select.Option value="0">Nam</Select.Option>
                    <Select.Option value="1">Nữ</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Loại tài khoản:" name="accountType">
                  <Select
                    onChange={(e) => {
                      setRole(e);
                    }}
                    placeholder="Chọn loại tài khoản"
                  >
                    <Select.Option value="1">Chủ trọ</Select.Option>
                    <Select.Option value="2">Người dùng</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Space>
                    <Button size="middle" onClick={handleCancel}>
                      Huỷ bỏ
                    </Button>
                    <Button size="middle" type="primary" htmlType="submit">
                      Thêm mới
                    </Button>
                  </Space>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal>
      </Col>
    </Row>
  );
}

export default Search;
