import { Button, Col, Form, Image, Input, message, Row } from "antd";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useA00Domain from "../domains/LoginDomain";
import "./Login.css";
import logo from "../../../assets/img/logo.png";
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
    <div className="full-screen">
      <Row span={24}>
        <Col span={12} className="full-screen blue-bg">
          <div
            style={{
              color: "white",
              fontWeight: "500",
              fontSize: 25,
              width: "100%",
              textAlign: "center",
              marginTop: 30,
              marginBottom: 70,
            }}
          >
            HỆ THỐNG HỖ TRỢ TÍNH PHÍ BẢO HIỂM XÃ HỘI
          </div>
          <Row span={24}>
            <Col span={4} />
            <Col span={16}>
              <div className="public-layout-left-img" />
            </Col>
            <Col span={4} />
          </Row>
          <div
            style={{
              color: "white",
              fontWeight: "500",
              fontSize: 25,
              width: "100%",
              textAlign: "center",
              marginTop: 30,
              marginBottom: 30,
              float: "bottom",
              position: "absolute",
              bottom: 0,
            }}
          >
            ĐẢM BẢO CHẤT LƯỢNG PHẦN MỀM
          </div>
        </Col>
        {/* --------------------------------------- */}
        <Col span={12} className="public-layout-right-img">
          <Row span={24}>
            <Col span={5} />
            <Col span={14}>
              <Form
                form={form}
                autoComplete="off"
                onFinish={onFinish}
                layout="vertical"
              >
                <Image
                  src={logo}
                  sizes="small"
                  preview={false}
                  width={100}
                  height={100}
                />
                <Form.Item
                  label={<b>Tên đăng nhập</b>}
                  name="account"
                  rules={[
                    {
                      required: true,
                      message: "Tên đăng nhập không được phép để trống!",
                    },
                  ]}
                >
                  <Input
                    className="input-login"
                    style={{ backgroundColor: "transparent" }}
                  />
                </Form.Item>

                <Form.Item
                  label={<b>Mật khẩu</b>}
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Mật khẩu không được phép để trống!",
                    },
                  ]}
                >
                  <Input.Password className="input-login" />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="input-button"
                  >
                    Đăng nhập
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Link>Quên mật khẩu?</Link>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
