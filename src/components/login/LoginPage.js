import { Col, Form, Image, Input, Row } from "antd";
import img1 from "../../assets/img/Login.png";
import img2 from "../../assets/img/1.jpg";

export function Login() {
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
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
