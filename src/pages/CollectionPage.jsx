import { useEffect } from "react";
import { useUser } from "../context/user.context";
import { useSpots } from "../context/spots.context";
import SpotCard from "../components/SpotCard";
//import axios from "axios";
import { Link } from "react-router-dom";

export default function CollectionPage() {
  const { user } = useUser();

  const { userSpots, fetchUserSpots, loading, error } = useSpots();

  const getSpots = async () => {
    const data = await fetchUserSpots(user.userId);
    console.log(data);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getSpots();
  }, []);

  if (loading) return <p>Loading spots</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div>
        <p className="p-4 text-center font-semibold text-2xl">My collection</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {userSpots && userSpots.length > 0 ? (
          userSpots.map((spot) => <SpotCard key={spot.id} spot={spot} />)
        ) : (
          <div className="text-center w-full">
            <p className="text-xl font-medium  p-4 text-center">
              There are no sceneries in your collection. You can start now by
              adding a new scenery!
            </p>
            <Link to={`/users/${user.userId}/new-scenery`}>
              <button className="bg-[#f59f00] p-5 rounded-lg text-lg font-bold text-white">
                New Scenery
              </button>
            </Link>
          </div>
        )}
      </div>
      <div className="p-10"></div>
    </div>
  );
}

/* const [collections, setCollections] = useState([]);

console.log(user);

useEffect(() => {
  (async () => {
    await axios.get("http://localhost:5005/spot").then((res) => {
      console.log(res.data);
      const userActive = res.data.filter(
        (spot) => spot.projectId === user.userId
      );
      console.log(userActive);
      console.log(userActive[0].imgUrl);

      setCollections(userActive);
    });
  })();
}, [user.userId]); */

/* return (
  <div>
    <h2>my collection</h2>

    {collections ? (
      collections.map((collection) => (
        <div key={collection.id} className="w-full flex flex-col gap-20">
          
          <div
            className="w-50 h-50"
            style={{
              backgroundImage: `url(${collection.imgUrl})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            those are the pictures
          </div>

          
          <div>locations: {collection.location}</div>
        </div>
      ))
    ) : (
      <div>
        <h2>You don't have any collections. Go to collect.</h2>
        <NavLink
          to={`/users/${user.userId}/new-scenery`}
          className="h-20 w-40"
        >
          go
        </NavLink>
      </div>
    )}
  </div>
);
} */
