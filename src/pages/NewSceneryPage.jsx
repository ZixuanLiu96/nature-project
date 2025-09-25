import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Segmented,
  Select,
  TreeSelect,
  Upload,
  Radio,
  Checkbox,
} from "antd";

const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export default function NewSceneryPage() {
  return (
    <div
      className="w-full flex flex-col items-center gap-20"
      style={{
        backgroundImage: "url(/images/field.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 18 }}
        layout="horizontal"
        style={{
          minWidth: 600,
          display: "flex",
          flexDirection: "column",
          background: " rgba(255, 255, 255, 0.88)",
          borderRadius: "8px",
          margin: 30,
          padding: 30,
        }}
      >
        <h1 className="self-center text-2xl sm:lg md:xl lg:2xl mb-10 text-[#f59f00]">
          Post Your Sceneries
        </h1>
        <Form.Item
          label="Image"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          className="upload"
          rules={[{ required: true }]}
        >
          <Upload action="/upload.do" listType="picture-card">
            <button
              style={{
                color: "inherit",
                cursor: "inherit",
                border: 0,
                background: "none",
              }}
              type="button"
            >
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>

        <Form.Item label="Title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Description">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Category">
          <Select>
            <Select.Option value="mountain">Mountain</Select.Option>
            <Select.Option value="river">River</Select.Option>
            <Select.Option value="lake">Lake</Select.Option>
            <Select.Option value="beach">Beach</Select.Option>
            <Select.Option value="valley">Valley</Select.Option>
            <Select.Option value="waterfall">Waterfall</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Location">
          <Input />
        </Form.Item>

        <Form.Item
          label="Post as private"
          name="disabled"
          valuePropName="checked"
        >
          <Checkbox>Private</Checkbox>
        </Form.Item>

        <Form.Item label="" className="new-btn">
          <Button>Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
