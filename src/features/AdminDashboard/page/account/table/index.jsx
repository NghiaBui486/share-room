import React, {
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import {
  Button,
  Row,
  Col,
  Table,
  Space,
  Popconfirm,
  message,
  Form,
  Select,
  Upload,
  Modal,
  Input,
} from "antd";
import {
  FormOutlined,
  DeleteOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { storage } from "../../../fireBase";
import "./index.scss";
import userApi from "../../../../../api/userApi";

const TableAccount = forwardRef((props, ref) => {
  const [form] = Form.useForm();
  const [visibleUpdateForm, setVisibleUpdateForm] = useState(false);
  const [dataTable, setDataTable] = useState([]);

  const [uploadUrl, setUploadUrl] = useState();
  const [tempUpLoadUrl, setTempUpLoadUrl] = useState();
  const [tempUserId, setTempUserId] = useState();
  useEffect(() => {
    userApi.getAll().then((res) => {
      setDataTable(res);
    });
  }, []);
  const refreshAPI = () => {
    userApi.getAll().then((res) => {
      setDataTable(res);
    });
  };
  useImperativeHandle(ref, () => ({
    refreshAPI,
  }));
  const handleDelete = (userIds) => {
    console.log(userIds);
    userApi
      .deleteUser(userIds)
      .then((res) => {
        message.info("Xoá thành công");
        refreshAPI();
      })
      .catch((error) => {
        console.log("Xoá thất bại");
      });
  };
  const showModal = (userIds) => {
    var inFo = dataTable.filter((dataTable) => dataTable.userId === userIds)[0];
    form.setFieldsValue({
      userName: inFo.userName,
      fullName: inFo.name,
      email: inFo.email,
      address: inFo.address,
      phone: inFo.phone,
      dateOfBirth: inFo.birthDate,
      gender: inFo.gender === false ? "Nam" : "Nữ",
      role:
        inFo.role === "Admin"
          ? "Admin"
          : inFo.role === "Owner"
          ? "Owner"
          : "User",
    });
    setTempUserId(userIds);
    inFo.avatarUrl !== null
      ? setTempUpLoadUrl(inFo.avatarUrl)
      : setTempUpLoadUrl("");
    setVisibleUpdateForm(true);
  };
  const fileList = [
    {
      uid: "-1",
      status: "done",
      url: `${tempUpLoadUrl}`,
    },
  ];
  const apiUpdate = (id, params) => {
    userApi
      .update(id, params)
      .then((res) => {
        message.info("Cập nhật thành công");
        refreshAPI();
        setTimeout(() => {
          setUploadUrl(undefined);
          form.resetFields();
          setVisibleUpdateForm(false);
        }, 2000);
      })
      .catch((error) => {
        message.info("Cập nhật thất bại");
      });
  };
  const handleUpdate = () => {
    var genders = form.getFieldValue("gender");
    genders === "Nam"
      ? (genders = 0)
      : genders === "Nữ"
      ? (genders = 1)
      : genders === "Male"
      ? (genders = 0)
      : (genders = 1);
    var roles = form.getFieldValue("role");
    roles === "Admin"
      ? (roles = 0)
      : roles === "Owner"
      ? (roles = 1)
      : (roles = 2);
    if (uploadUrl === undefined) {
      const inFo = {
        userName: form.getFieldValue("userName"),
        name: form.getFieldValue("fullName"),
        email: form.getFieldValue("email"),
        address: form.getFieldValue("address"),
        phone: form.getFieldValue("phone"),
        birthDate: form.getFieldValue("dateOfBirth"),
        gender: genders,
        role: roles,
      };
      apiUpdate(tempUserId, inFo);
      console.log("thanh cong");
      console.log("roi ne");
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
                userName: form.getFieldValue("userName"),
                name: form.getFieldValue("fullName"),
                email: form.getFieldValue("email"),
                address: form.getFieldValue("address"),
                phone: form.getFieldValue("phone"),
                birthDate: form.getFieldValue("dateOfBirth"),
                gender: genders,
                avatarUrl: url,
                role: roles,
              };
              apiUpdate(tempUserId, inFo);
            });
        }
      );
    }
  };
  const handleCancel = () => {
    setUploadUrl(null);
    form.resetFields();
    setVisibleUpdateForm(false);
  };
  const columns = [
    {
      title: "UserName",
      key: "userName",
      dataIndex: "userName",
      align: "center",
    },
    {
      title: "Địa chỉ",
      key: "address",
      dataIndex: "address",
      align: "center",
    },
    {
      title: "Số điện thoại",
      key: "phone",
      dataIndex: "phone",
      align: "center",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "action",
      render: (_, res) => {
        return (
          <Space>
            <Row>
              <Button>
                <FormOutlined
                  onClick={() => {
                    showModal(res.userId);
                  }}
                />
              </Button>
            </Row>
            <Popconfirm
              title="Bạn có muốn xoá user này không?"
              placement="top"
              onConfirm={() => handleDelete(res.userId)}
              okText="Có"
              cancelText="Không"
            >
              <Button>
                <DeleteOutlined />
              </Button>
            </Popconfirm>
          </Space>
        );
      },
      align: "center",
    },
  ];
  const data = dataTable;
  return (
    <Row>
      <Col span={24}>
        <Table
          columns={columns}
          dataSource={data}
          scroll={{ y: 280 }}
          pagination={{ defaultPageSize: 5 }}
        />
      </Col>
      <Modal
        destroyOnClose={true}
        title="Cập nhật thông tin"
        style={{ top: 0 }}
        visible={visibleUpdateForm}
        footer={null}
        onCancel={handleCancel}
        width={600}
      >
        <Form
          initialValues={{ remember: true }}
          onFinish={() => handleUpdate()}
          form={form}
          layout="vertical"
        >
          <Row>
            <Col span={8} style={{ paddingRight: 15, textAlign: "center" }}>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                maxCount={1}
                defaultFileList={[...fileList]}
                onRemove={() => {
                  setUploadUrl(undefined);
                }}
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
                <Input placeholder="Nhập tên tài khoản" />
              </Form.Item>
              <Form.Item
                label="Họ và tên:"
                name="fullName"
                rules={[
                  {
                    required: true,
                    message: "Họ và tên không được để trống",
                  },
                  {
                    pattern: new RegExp(/[a-zA-Z]+$/i),
                    message: "Họ, tên không chứa kí tự đặc biệt",
                  },
                ]}
              >
                <Input placeholder="Nhập họ và tên" />
              </Form.Item>
              <Form.Item
                label="Email:"
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
                <Input placeholder="@gmail.com" />
              </Form.Item>
              <Form.Item label="Địa chỉ:" name="address">
                <Input placeholder="Nhập địa chỉ" />
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
                <Input placeholder="Nhập SĐT" />
              </Form.Item>
              <Form.Item label="Ngày sinh" name="dateOfBirth">
                <Input placeholder="VD: 2000-06-04" />
              </Form.Item>
              <Form.Item label="Giới tính:" name="gender">
                <Select placeholder="Chọn giới tính">
                  <Select.Option value="Male">Nam</Select.Option>
                  <Select.Option value="Female">Nữ</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Loại tài khoản:" name="accountType" name="role">
                <Select placeholder="Chọn loại tài khoản">
                  <Select.Option value="Admin">Admin</Select.Option>
                  <Select.Option value="Owner">Owner</Select.Option>
                  <Select.Option value="User">User</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Space>
                  <Button size="middle" onClick={handleCancel}>
                    Huỷ bỏ
                  </Button>
                  <Button size="middle" type="primary" htmlType="submit">
                    Cập nhật
                  </Button>
                </Space>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </Row>
  );
});

export default TableAccount;
