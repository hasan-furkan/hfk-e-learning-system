import React, { useState } from "react";
import {
  Card,
  Input,
  Space,
  Table,
  Tag,
  Select,
  Button,
  message,
  Popconfirm,
  Drawer,
} from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import AddUserModal from "./components/AddUserModal.jsx";
const { Search } = Input;

const ListTableComponent = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const confirm = (e) => {
    console.log(e);
    message.success("Click on Yes");
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

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
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
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

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <Card
      title={"List Table Component"}
      style={{
        borderRadius: 10,
        padding: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          loading={false}
          style={{
            borderRadius: 10,
            marginBottom: 10,
            width: "60%",
          }}
        />
        <Select
          defaultValue="Choose"
          style={{
            width: "10%",
          }}
          onChange={handleChange}
          size={"large"}
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "Yiminghe",
              label: "yiminghe",
            },
            {
              value: "disabled",
              label: "Disabled",
              disabled: true,
            },
          ]}
        />
        <Button
          onClick={showDrawer}
          icon={<PlusCircleOutlined />}
          type="primary"
          size="large"
          loading={false}
          style={{
            width: "10%",
          }}
        >
          Add
        </Button>
        <Drawer title="Create a new account" onClose={onClose} open={open}>
          <AddUserModal onCancel={onClose} visible={open} />
        </Drawer>
      </div>
      <Table columns={columns} dataSource={data} />
    </Card>
  );
};
export default ListTableComponent;
