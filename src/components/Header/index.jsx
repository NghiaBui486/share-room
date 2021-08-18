import React, { useState, useEffect, useRef } from "react";
import { Link as LinkRouter } from "react-router-dom";
import {
  Anchor,
  Drawer,
  Button,
  Space,
  Select,
  Form,
  Row,
  Col,
  Input,
  Upload,
  notification,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import addressApi from "../../api/address";
import roomInfoApi from "../../api/roomInfoApi";
import { storage } from "../../features/AdminDashboard/fireBase";

function Header() {
  const formRef = useRef();
  const { Link } = Anchor;
  const { Option } = Select;
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const [address, setAddress] = useState([]);
  const [listUrl, setListUrl] = useState([]);
  useEffect(() => {
    addressApi
      .getAllProvince()
      .then((res) => {
        setAddress(res);
      })
      .catch(() => {
        console.log("ERROR");
      });
  }, []);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const showDrawerRoom = () => {
    setVisibleDrawer(true);
  };
  const onCloseRoom = () => {
    form.resetFields();
    listUrl.splice(0, listUrl.length);
    setVisibleDrawer(false);
  };
  const apiCreateRoom = (inFo) => {
    roomInfoApi
      .createRoom(inFo)
      .then(() => {
        notification["success"]({
          message: "Localhost say:",
          description: "Đăng thông tin trọ thành công!",
        });
        setTimeout(() => {
          form.resetFields();
          listUrl.splice(0, listUrl.length);
          setVisibleDrawer(false);
        }, 2000);
      })
      .catch(() => {
        notification["error"]({
          message: "Localhost say:",
          description: "Đăng thông tin trọ thất bại!",
        });
      });
  };

  const onSubmit = () => {
    const promises = listUrl.map((file) => {
      const ref = storage.ref("images").child(file.name);
      return ref.put(file).then(async () => {
        let urlImage = "";
        await storage
          .ref("images")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            urlImage = url;
          });
        return { name: file.name, url: urlImage, type: "Image" };
      });
    });
    Promise.all(promises)
      .then((arrayFile) => {
        let inFo = {
          userId: localStorage.getItem("userId"),
          roomType: formRef.current.getFieldValue("roomType"),
          provinceId: formRef.current.getFieldValue("province"),
          districtId: formRef.current.getFieldValue("distric"),
          wardId: formRef.current.getFieldValue("ward"),
          roomPrice: formRef.current.getFieldValue("roomPrice"),
          acreage: formRef.current.getFieldValue("acreage"),
          title: formRef.current.getFieldValue("title"),
          address: formRef.current.getFieldValue("address"),
          roomDescribe: formRef.current.getFieldValue("roomDescribe"),
          statusHired: "NOT_HIRED",
        };
        if (listUrl.length === 0) {
          apiCreateRoom(inFo);
        } else {
          inFo.files = arrayFile;
          apiCreateRoom(inFo);
        }
      })
      .catch((err) => console.log(err));
  };
  const checkToken = () => {
    if (!localStorage.getItem("token"))
      return (
        <Button type="primary">
          <LinkRouter to="/user-login">Đăng nhập</LinkRouter>
        </Button>
      );
    else
      return (
        <Space>
          <Button type="primary" onClick={showDrawerRoom}>
            Đăng tin
          </Button>
          <Button type="primary" danger>
            <LinkRouter to="/user-logout">Đăng xuất</LinkRouter>
          </Button>
          <Drawer
            title="Thông tin phòng cho thuê"
            width={720}
            onClose={onCloseRoom}
            visible={visibleDrawer}
            bodyStyle={{ paddingBottom: 80 }}
            footer={
              <div
                style={{
                  textAlign: "right",
                }}
              >
                <Button onClick={onCloseRoom} style={{ marginRight: 8 }}>
                  Cancel
                </Button>
                <Button onClick={onSubmit} type="primary">
                  Submit
                </Button>
              </div>
            }
          >
            <Form ref={formRef} form={form} layout="vertical" hideRequiredMark>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="roomType"
                    label="Loại phòng"
                    rules={[{ required: true, message: "Chọn loại phòng" }]}
                  >
                    <Select placeholder="Chọn loại phòng">
                      <Option value="Room">Phòng trọ</Option>
                      <Option value="House">Nhà nguyên căn</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="province"
                    label="Tỉnh"
                    rules={[{ required: true, message: "Chọn tỉnh" }]}
                  >
                    <Select placeholder="Chọn tỉnh">
                      {address.map((items) => {
                        return (
                          <Option value={items.provinceId}>{items.name}</Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="distric"
                    label="Huyện"
                    rules={[{ required: true, message: "Chọn huyện" }]}
                  >
                    <Select placeholder="Chọn huyện">
                      {address.map((items) =>
                        items.listDistrict.map((e) => {
                          return <Option value={e.districtId}>{e.name}</Option>;
                        })
                      )}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="ward"
                    label="Xã"
                    rules={[{ required: true, message: "Chọn xã" }]}
                  >
                    <Select placeholder="Chọn xã">
                      {address.map((items) =>
                        items.listDistrict.map((e) =>
                          e.listWard.map((e) => {
                            return <Option value={e.wardId}>{e.name}</Option>;
                          })
                        )
                      )}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="roomPrice"
                    label="Giá phòng"
                    rules={[
                      {
                        required: true,
                        message: "Nhập giá cho thuê",
                      },
                    ]}
                  >
                    <Input placeholder="Nhập giá cho thuê" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="acreage"
                    label="Diện tích"
                    rules={[
                      { required: true, message: "Nhập diện tích phòng" },
                    ]}
                  >
                    <Input placeholder="Nhập diện tích phòng" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="title"
                    label="Tiêu đề"
                    rules={[
                      { required: true, message: "Nhập tiêu đề hiển thị" },
                    ]}
                  >
                    <Input placeholder="Nhập tiêu đề hiển thị" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="address"
                    label="Địa chỉ"
                    rules={[{ required: true, message: "Nhập địa chỉ" }]}
                  >
                    <Input placeholder="Nhập địa chỉ" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="roomDescribe"
                    label="Mô tả"
                    rules={[{ required: true, message: "Nhập mô tả" }]}
                  >
                    <Input.TextArea rows={4} placeholder="Nhập mô tả" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item name="fileImg" label="Ảnh mô tả">
                    <Upload
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="picture"
                      accept=".jpg, .jpeg, .png"
                      onRemove={(file) => {
                        for (var i = 0; i < listUrl.length; i++) {
                          if (listUrl[i].name === file.name) {
                            listUrl.splice(i, 1);
                          }
                        }
                      }}
                      beforeUpload={(file) => {
                        setListUrl([...listUrl, file]);
                      }}
                    >
                      <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Drawer>
        </Space>
      );
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="http://google.com">Phòng trọ nhanh cho sinh viên</a>
        </div>

        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="#hero" title="Trang chủ" />
            <Link href="#about" title="Giới thiệu" />
            <Link href="#news" title="Mới nhất" />
            <Link href="#feature" title="Phòng trọ" />
            <Link href="#contact" title="Liên hệ" />
          </Anchor>
        </div>
        {checkToken()}
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#hero" title="Trang chủ" />
              <Link href="#about" title="Giới thiệu" />
              <Link href="#news" title="Mới nhất" />
              <Link href="#feature" title="Phòng trọ" />
              <Link href="#contact" title="Liên hệ" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default Header;
