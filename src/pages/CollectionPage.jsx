import { useEffect, useState } from "react";
import { useUser } from "../context/user.context";
import axios from "axios";

export default function CollectionPage() {
  const { user } = useUser();
  const [collections, setCollections] = useState([]);

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
  }, [user.userId]);

  return (
    <div>
      <h2>my collection</h2>

      {collections ? (
        collections.map((collection) => (
          <div key={collection.id} className="w-full flex flex-col gap-20">
            {/* this is how to get this user's all img url */}
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

            {/* this is how to get the user's locations */}
            <div>locations: {collection.location}</div>
          </div>
        ))
      ) : (
        <div>
          <h2>You don't have any collections. Go to collect.</h2>
          <NavLink
            to={`/users/${user.userId}/new-scenery`}
            className="h-20 h-40"
          >
            go
          </NavLink>
        </div>
      )}
    </div>
  );
}
