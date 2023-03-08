import React, { useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
  Tag,
  Space,
  Row,
  Col,
  Table,
  Card,
  message,
} from "antd";
export default function SearchForm({ context, domain }) {
  const [form] = Form.useForm();
  const watchProvince = Form.useWatch("province", form);
  const watchDistrict = Form.useWatch("district", form);
  //------------ FUNCTION ------------
  async function proviceOnchange(e) {
    form.setFieldsValue({
      district: null,
      wards: null,
    });
    if (e !== undefined) {
      await domain.getDistrictList(e);
    }
  }
  async function districtOnchange(e) {
    form.setFieldsValue({
      wards: null,
    });
    if (e !== undefined) {
      await domain.getWardsList(e);
    }
  }

  async function search() {
    message.success("Tìm kiếm thành công");
  }

  const logForm = async () => {
    let values = form.getFieldsValue(true);
    console.log("form", values);
  };
  const resetForm = async () => {
    form.resetFields();
  };
  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      style={{ width: "100%" }}
      title="Form"
      onFinish={search}
      form={form}
    >
      <Card
        style={{
          width: "100%",
          marginRight: 30,
          marginLeft: 30,
          marginBottom: 30,
        }}
        title={"Xem danh sách theo khu vực"}
        actions={[
          <Button htmlType="submit" onClick={logForm} type="primary">
            Tìm kiếm
          </Button>,
          <Button onClick={resetForm}>Làm mới</Button>,
        ]}
      >
        <Form.Item
          label="Tỉnh / Thành phố"
          name="province"
          rules={[
            {
              required: true,
              message: "Trường tỉnh / thành phố không được phép để trống!",
            },
          ]}
        >
          <Select
            options={context?.provinceList}
            onChange={proviceOnchange}
            allowClear={true}
            placeholder="Chọn thông tin"
          />
        </Form.Item>
        <Form.Item
          label="Quận / Huyện"
          name="district"
          rules={[
            {
              required: true,
              message: "Trường quận / huyện không được phép để trống!",
            },
          ]}
        >
          <Select
            options={context?.districtList}
            onChange={districtOnchange}
            allowClear={true}
            placeholder="Chọn thông tin"
            disabled={
              watchProvince != null && watchProvince != undefined ? false : true
            }
          />
        </Form.Item>
        <Form.Item
          label="Xã / Phường"
          name="wards"
          rules={[
            {
              required: true,
              message: "Trường xã / phường không được phép để trống!",
            },
          ]}
        >
          <Select
            options={context?.wardsList}
            allowClear={true}
            placeholder="Chọn thông tin"
            disabled={
              watchDistrict != null && watchDistrict != undefined ? false : true
            }
          />
        </Form.Item>
      </Card>
    </Form>
  );
}
