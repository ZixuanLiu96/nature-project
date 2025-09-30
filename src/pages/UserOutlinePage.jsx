import { useUser } from "../context/user.context";
import { useSpots } from "../context/spots.context"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import SpotCard from "../components/SpotCard";
//import { useEffect, useState } from "react";
//import axios from "axios";

export default function UserOutlinePage() {
  const { user } = useUser();
  const { userSpots, exploreSpots, favouriteSpots, fetchUserSpots, fetchExploreSpots, fetchFavouriteSpots } = useSpots();
  /* const [spotsData, setSpotsData] = useState(() => {
    const spots = localStorage.getItem("spots");
    return spots ? JSON.parse(spots) : [];
  }); */

  /* useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:5005/spot")
        .then((res) => {
          console.log(res.data);
          // console.log(res.data[0].imgUrl);
          const copyData = [...res.data];

          setSpotsData(copyData.filter((spot) => spot.isPrivate == false));
          localStorage.setItem("spots", JSON.stringify(copyData));
        })
        .catch((error) => console.log(error));
    })();
  }, []); */

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchExploreSpots();
    fetchFavouriteSpots();
    fetchUserSpots()

  }, [])

  return (
    <div>
      <div className="bg-gray-300 flex justify-center">
        <div className="max-w-[800px] mx-auto px-4 flex flex-col items-center gap-5">
          {/* Welcome */}
          <div className="bg-white border-cyan-700 border-dashed border-2 p-4 mt-10 text-center rounded-lg w-full">
            <h1 className="text-center text-2xl font-medium">
              Hello {user.userName}! This is your dashboard.
            </h1>
          </div>

          {/* Collection */}
          <div className="bg-white border-cyan-700 border-dashed border-2 p-5 rounded-lg w-full">
            <Link to={`/users/${user.userId}/my-collection`}>
             <h2 className="text-2xl font-medium underline p-2 text-center">
              View your collection
            </h2>
            </Link>
           
            <div className="flex flex-wrap justify-center gap-2">
              {userSpots && userSpots.length > 0 ?
                (userSpots.slice(0, 3).map((spot) => (
                  <SpotCard key={spot.id} spot={spot} />

                ))
                ) : (
                  <div className="text-center w-full">
                    <p className="text-l font-medium  p-4 text-center">You have no sceneries yet! You can start with uploading or exploring new sceneries:</p>
                    <Link to="/users/:id/new-scenery">
                      <button className="bg-[#f59f00] p-5 rounded-lg text-lg font-bold text-white m-2">
                        New spot
                      </button>
                    </Link>
                    <Link to="/users/explore">
                      <button className="bg-[#f59f00] p-5 rounded-lg text-lg font-bold text-white">Explore</button>
                    </Link>
                  </div>

                )}
              {/*  <div className="flex flex-wrap justify-center gap-2">
              <img
                className="rounded-lg flex-1 min-w-[200px] max-w-[250px]"
                src="/images/lake.jpg"
              />
              <img
                className="rounded-lg flex-1 min-w-[200px] max-w-[250px]"
                src="/images/desert.jpg"
              />
              <img
                className="rounded-lg flex-1 min-w-[200px] max-w-[250px]"
                src="/images/hiking.jpg"
              />
            </div> */}
            </div>
          </div>

          {/* Favorites */}
          <div className="bg-white border-cyan-700 border-dashed border-2 p-5 rounded-lg w-full">
            <Link to={`/users/${user.userId}/favourite`}>
             <h2 className="text-2xl font-medium underline p-4 text-center">
              Visit your favorites
            </h2>
            </Link>
           
            <div className="flex flex-wrap justify-center gap-2">
              {favouriteSpots && favouriteSpots.length > 0 ?
                (favouriteSpots.slice(0, 3).map((spot) => (
                  <SpotCard key={spot.id} spot={spot} />

                ))
                ) : (
                  <div className="text-center w-full">
                    <p className="text-xl font-medium  p-4 text-center">You have no favourites yet! Get started collecting!</p>
                    <Link to="/users/explore">
                      <button className="bg-[#f59f00] p-5 rounded-lg text-lg font-bold text-white">Explore</button></Link>
                  </div>

                )}
              {/* <img
                className="rounded-lg flex-1 min-w-[200px] max-w-[250px]"
                src="/images/lake.jpg"
              />
              <img
                className="rounded-lg flex-1 min-w-[200px] max-w-[250px]"
                src="/images/desert.jpg"
              />
              <img
                className="rounded-lg flex-1 min-w-[200px] max-w-[250px]"
                src="/images/hiking.jpg"
              /> */}
            </div>
          </div>

          {/* Button */}
          <div className="bg-white border-cyan-700 border-dashed border-2 p-5 ml-5 mr-5 rounded-lg flex flex-col justify-center items-center w-full">
            <h2 className="text-2xl font-medium underline p-4 text-center">
              Add more highlights to your collection
            </h2>
            <div>
              <Link to="/users/:id/new-scenery">
                <button className="bg-[#f59f00] p-5 rounded-lg text-lg font-bold text-white">
                  New spot
                </button>
              </Link>
            </div>
          </div>

          {/* <TestGallery />*/}
          <div className="p-10"></div>
        </div>
      </div>
    </div>
  )
}
