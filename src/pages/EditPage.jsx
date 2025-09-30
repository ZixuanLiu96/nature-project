import { useEffect, useState } from "react";
import NewForm from "../components/NewForm";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Form } from "antd";

function EditPage() {
  const pageTitle = "Edit your scenery";
  const bg = "/images/antelope.jpg";
  const { id } = useParams();
  const [spot, setSpot] = useState(() => {
    const spots = localStorage.getItem("spots");
    return spots ? JSON.parse(spots).filter((spot) => spot.id == id) : [];
  });
  const [form] = Form.useForm();
  // const [title, setTitle] = useState(spot.title);
  // const [description, setDescription] = useState("");
  // const [category, setCategory] = useState("");
  // const [location, setLocation] = useState("");
  // const [isPrivate, setIsPrivate] = useState(false);
  // const [imgUrl, setImageUrl] = useState("");

  console.log(spot);

  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:5005/spot")
        .then((res) => {
          console.log(res);
          console.log(res.data.filter((spot) => spot.id == id));
          setSpot(res.data.filter((spot) => spot.id == id));
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, [id]);

  function handleSubmit(values) {
    console.log("submitting...");
    console.log(values);
  }
  return (
    <NewForm
      pageTitle={pageTitle}
      handleSubmit={handleSubmit}
      bg={bg}
      form={form}
      title={spot[0].title}
      description={spot[0].description}
      imgUrl={spot[0].imgUrl}
      location={spot[0].location}
      isPrivate={spot[0].isPrivate}
      category={spot[0].category}
    />
  );
}

export default EditPage;
