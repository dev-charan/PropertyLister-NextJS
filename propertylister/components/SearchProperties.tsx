"use client";
import { Form, Input, Select, Space } from "antd";
import React from "react";

const SearchProperties = () => {
  return (
    <div className="flex-center px-1">
      <Form initialValues={{ type: "RENT" }}>
        <Space.Compact>
          <Form.Item name="type">
            <Select
              options={[
                { value: "RENT", label: "For Rent" },
                { value: "SALE", label: "For Sale" },
              ]}
              style={{ width: 120 }}
              size="large"
            />
          </Form.Item>
          <Form.Item name="location">
            <Input.Search
              size="large"
              enterButton="Search"
              placeholder="Search for location..."
            />
          </Form.Item>
        </Space.Compact>
      </Form>
    </div>
  );
};

export default SearchProperties;
