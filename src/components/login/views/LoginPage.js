import { Button, Col, Form, Image, Input, message, Row } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useA00Domain from "../domains/LoginDomain";
// import img1 from "../../assets/img/Login.png";
// import img2 from "../../assets/img/1.jpg";

export function Login() {
  const [form] = Form.useForm();
  const [context, domain] = useA00Domain();
  const navigate = useNavigate();
  useEffect(() => {
    domain.initDomain();
  }, []);

  function onFinish() {
    message.success("Đăng nhập thành công");
    navigate("/home");
  }
  return (
    <Row span={24}>
      <Col span={12}>
        <Row span={24}>
          <Col span={3} />
          <Col span={18}>
            <Form
              form={form}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              autoComplete="off"
              onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Tên đăng nhập"
                name="account"
                rules={[
                  {
                    required: true,
                    message: "Tên đăng nhập không được phép để trống!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Mật khẩu không được phép để trống!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Đăng nhập
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
