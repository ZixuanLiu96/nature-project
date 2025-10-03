import { useEffect, useState, useRef } from "react";
import NewForm from "../components/NewForm";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form } from "antd";
import { useUser } from "../context/user.context";

function EditPage() {
  const pageTitle = "Edit your scenery";
  const bg = "/images/antelope.jpg";
  const { id } = useParams();
  const [spot, setSpot] = useState(() => {
    const spots = localStorage.getItem("spots");
    return spots ? JSON.parse(spots).filter((spot) => spot.id == id) : [];
  });
  const [editSpot, setEditSpot] = useState(null);

  const [form] = Form.useForm();
  const { user } = useUser();
  const successRef = useRef();
  const failRef = useRef();
  const navigate = useNavigate();

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

    // console.log(successRef.current);
    if (editSpot) {
      successRef.current.style.opacity = 100;

      setTimeout(() => {
        successRef.current.style.opacity = 0;
        navigate(`/users/${user.userId}/my-collection`);
      }, 3000);

      setEditSpot(null);
    }
  }, [id, editSpot, navigate, user.userId]);

  function handleSubmit(values) {
    console.log("submitting...");
    console.log(values);
    const newPost = {
      projectId: user.userId,
      title: values.title,
      description: values.description,
      category: values.category,
      location: values.location,
      isPrivate: values.isPrivate,
      imgUrl: values.imgUrl[0].url,
      isLike: false,
    };
    axios
      .put(`http://localhost:5005/spot/${id}`, newPost)
      .then((res) => {
        console.log(res);
        setEditSpot(res.data);

        // update the data in localstorage
        (async () => {
          try {
            const updateSpots = await axios.get("http://localhost:5005/spot");
            localStorage.setItem("spots", JSON.stringify(updateSpots.data));
          } catch (error) {
            console.error("failed:", error);
          }
        })();
      })
      .catch((error) => {
        console.log(error);
        failRef.current.style.opacity = 100;
        setTimeout(() => {
          failRef.current.style.opacity = 0;
        }, 3000);
      });
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
        handleSubmit={handleSubmit}
        bg={bg}
        form={form}
        title={spot[0]?.title}
        description={spot[0]?.description}
        imgUrl={spot[0]?.imgUrl}
        location={spot[0]?.location}
        isPrivate={spot[0]?.isPrivate}
        category={spot[0]?.category}
      />
    </>
  );
}

export default EditPage;
