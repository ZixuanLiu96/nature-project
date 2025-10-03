import { useEffect, useState } from "react";
import SpotCard from "../components/SpotCard";
import { useSpots } from "../context/spots.context";
import { Link, useParams } from "react-router-dom";
import { useUser } from "../context/user.context";

function SingleSpotPage() {
  const [spot, setSpot] = useState({});
  const { user } = useUser();

  const { id } = useParams();

  const {
    fetchExploreSpots,
    exploreSpots,
    fetchUserSpots,
    userSpots,
    fetchFavouriteSpots,
    favouriteSpots,
  } = useSpots();

  const getData = async () => {
    const res = await fetch(`http://localhost:5005/spot/${id}`);

    const data = await res.json();
    console.log(data);
    setSpot(data);
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div>
      <div className="flex flex-row">
        <img src={spot.imgUrl} />
        <div className="flex flex-col">
          <h1>{spot.title}</h1>
          <div>
            <Link to={`/users/${user.userId}/edit/${id}`}>
              <button className="btn btn-primary bg-[#f59f00] border-none shadow-none text-lg">
                Edit
              </button>
            </Link>
            <button className="btn btn-primary bg-[#f59f00] border-none shadow-none text-lg">
              Like
            </button>
            <button className="btn btn-primary bg-[#f59f00] border-none shadow-none text-lg">
              Delete
            </button>
          </div>
        </div>
      </div>
      {/* <SpotCard spot={spot}/> */}
    </div>
  );
}

export default SingleSpotPage;
