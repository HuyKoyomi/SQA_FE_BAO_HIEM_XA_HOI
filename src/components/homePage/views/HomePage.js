import { Button, Tag, Space, Row, Col, Spin, Table, Form } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeDoamin from "../domains/HomeDomain";
import SearchForm from "./SearchForm";

export function HomePage() {
  const [loadingTable, setLoadingTable] = useState(false);
  const [context, domain] = HomeDoamin();
  const navigate = useNavigate();
  // const [form] = Form.useForm();

  useEffect(() => {
    domain.initDomain();
  }, []);

  function goBack() {
    navigate("/");
  }
  return (
    <div style={{ width: "100%", height: "100%", marginTop: 30 }}>
      <Row span={24}>
        <Col span={24}>
          <Row span={24}>
            <SearchForm context={context} domain={domain} />
          </Row>
          <Row span={24}>
            <Table
              columns={columns}
              dataSource={data}
              style={{ width: "100%" }}
              loading={loadingTable}
            />
          </Row>
          <Row>
            <Button onClick={(e) => goBack()}>Quay lại</Button>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
