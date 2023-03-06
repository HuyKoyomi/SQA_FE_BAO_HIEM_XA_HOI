import { Button, Col, Form, Image, Input, Row } from "antd";
import { useEffect } from "react";
import useA00Domain from "../domains/LoginDomain";
// import img1 from "../../assets/img/Login.png";
// import img2 from "../../assets/img/1.jpg";

export function Login() {
  const form = Form.useForm();
  const [context, domain] = useA00Domain();
  useEffect(() => {
    domain.initDomain();
  }, []);
  return (
    <Row span={24}>
      <Col span={12}>
        <Row span={24}>
          <Col span={3} />
          <Col span={18}>
            <Form>
              <Form.Item label="Tên đăng nhập" required={true}>
                <Input />
              </Form.Item>
              <Form.Item label="Mật khẩu" required={true}>
                <Input />
              </Form.Item>
              <Button>Đăng nhập</Button>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
