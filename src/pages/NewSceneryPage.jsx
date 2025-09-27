import { useState } from "react";
import NewForm from "../components/NewForm";
import { useUser } from "../context/user.context";

export default function NewSceneryPage() {
  const pageTitle = "Add Your Sceneries";
  const bg = "/images/field.jpg";
  const { user } = useUser();
  const [title, setTiltle] = useState("");
  const [description, setDescription] = useState("");
  const [catogery, setCatogery] = useState("");
  const [location, setLocation] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [imgUrl, setImageUrl] = useState("");
  const newPost = {
    imgUrl,
    projectId: user.userId,
    title,
    description,
    location,
    catogery,
    isPrivate,
    isLike: false,
  };

  function handleForm(e) {
    e.preventDefault();
    console.log(e.target.value);
  }
  return (
    <NewForm
      pageTitle={pageTitle}
      bg={bg}
      onHandleForm={handleForm}
      title
      setTiltle
      description
      setDescription
      catogery
      setCatogery
      location
      setLocation
      isPrivate
      setIsPrivate
      imgUrl
      setImageUrl
    />
  );
}
