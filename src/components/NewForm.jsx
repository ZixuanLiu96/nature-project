import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Upload, Checkbox, Alert } from "antd";
import "@ant-design/v5-patch-for-react-19";

const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return (
    e &&
    e.fileList.map((file) => {
      if (file.response) {
        // Cloudinary return the secure_url
        return file.response.secure_url;
      }
      return file.url || file.thumbUrl;
    })
  );
};

function NewForm({
  pageTitle,
  bg,
  title,
  description,
  category,
  location,
  isPrivate,
  imgUrl,
  handleSubmit,
  form,
}) {
  console.log(title);
  console.log(imgUrl);

  const defaultFileList = [
    {
      uid: "-1",
      name: "test.jpg",
      status: "done",
      url: imgUrl,
    },
  ];

  return (
    <>
      <div
        className="w-full flex flex-col items-center gap-20"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="my-20 py-10"
          style={{
            background: " rgba(255, 255, 255, 0.88)",
            borderRadius: "8px",
          }}
        >
          <h1 className="self-center text-center text-2xl sm:lg md:xl lg:2xl mb-10 text-[#f59f00]">
            {pageTitle}
          </h1>
          <Form
            form={form}
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 18 }}
            layout="horizontal"
            style={{
              minWidth: 600,
              display: "flex",
              flexDirection: "column",

              margin: 30,
              padding: 30,
            }}
            onFinish={(values) => handleSubmit(values)}
            initialValues={{
              imgUrl: defaultFileList || "",
              title,
              description,
              isPrivate,
              category,
              location,
            }}
          >
            <Form.Item
              label="Image"
              name="imgUrl"
              getValueFromEvent={normFile}
              className="upload"
            >
              <Upload
                listType="picture-card"
                action="https://api.cloudinary.com/v1_1/dprwwp1ku/image/upload"
                data={{ upload_preset: "react_unsigned" }}
              >
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

            <Form.Item label="Title" name="title" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item label="Description" name="description">
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item label="Category" name="category">
              <Select>
                <Select.Option value="mountain">Mountain</Select.Option>
                <Select.Option value="river">River</Select.Option>
                <Select.Option value="lake">Lake</Select.Option>
                <Select.Option value="beach">Beach</Select.Option>
                <Select.Option value="valley">Valley</Select.Option>
                <Select.Option value="waterfall">Waterfall</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Location" name="location">
              <Input />
            </Form.Item>

            <Form.Item
              label="Post as private"
              name="isPrivate"
              valuePropName="checked"
            >
              <Checkbox>Private</Checkbox>
            </Form.Item>

            <Form.Item className="new-btn">
              <Button htmlType="submit">Submit</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}

export default NewForm;
