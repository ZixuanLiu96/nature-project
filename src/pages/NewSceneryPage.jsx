import { useState, useRef, useEffect } from "react";
import NewForm from "../components/NewForm";
import { useUser } from "../context/user.context";
import axios from "axios";
import { Form } from "antd";
import "@ant-design/v5-patch-for-react-19";
import { useNavigate } from "react-router-dom";

export default function NewSceneryPage() {
  const pageTitle = "Add Your Scenery";
  const bg = "/images/field.jpg";
  const { user } = useUser();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [imgUrl, setImageUrl] = useState("");
  const [post, setPost] = useState(null);

  const [form] = Form.useForm();
  const successRef = useRef();
  const failRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(successRef.current);
    if (post) {
      successRef.current.style.opacity = 100;

      setTimeout(() => {
        successRef.current.style.opacity = 0;
        navigate(`/users/${user.userId}/my-collection`);
      }, 3000);

      setPost(null);
    }
  }, [post, navigate, user.userId]);

  function handleSubmit(values) {
    // console.log("submitting...");
    console.log(values);

    const newPost = {
      projectId: user.userId,
      title: values.title,
      description: values.description,
      category: values.category,
      location: values.location,
      isPrivate: values.isPrivate,
      imgUrl: values.imgUrl[0],
      isLike: false,
    };

    axios
      .post("http://localhost:5005/spot", newPost)
      .then((res) => {
        console.log(res);
        setPost(res.data);
        localStorage.setItem("spots", JSON.stringify(res.data));
      })
      .catch((error) => {
        console.log(error);
        failRef.current.style.opacity = 100;
        setTimeout(() => {
          failRef.current.style.opacity = 0;
        }, 3000);
      });

    // setImageUrl("/images/waterfall.jpg");
    // setTitle(values.title);
    // setDescription(values.description);
    // setCategory(values.category);
    // setLocation(values.location);
    // setIsPrivate(values.isPrivate);
    form.resetFields();
  }

  return (
    <>
      <div
        className="fixed top-0 bg-[#d3f9d8]/70 w-full text-center p-2 z-[10]  "
        ref={successRef}
        style={{ transition: "all .8s", opacity: 0 }}
      >
        Successful Post
      </div>
      <div
        className="fixed top-0 bg-[#ffc9c9]/70 w-full text-center p-2 z-[10]  "
        ref={failRef}
        style={{ transition: "all .8s", opacity: 0 }}
      >
        Oops, post failed
      </div>
      <NewForm
        pageTitle={pageTitle}
        bg={bg}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        category={category}
        setCategory={setCategory}
        location={location}
        setLocation={setLocation}
        isPrivate={isPrivate}
        setIsPrivate={setIsPrivate}
        imgUrl={imgUrl}
        setImageUrl={setImageUrl}
        handleSubmit={handleSubmit}
        form={form}
        post={post}
      />
    </>
  );
}
