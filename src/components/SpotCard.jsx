import { useSpots } from "../context/spots.context";
import { useUser } from "../context/user.context";
import { Link, useNavigate } from "react-router-dom";
//import axios from "axios";
import { useState } from "react";

function SpotCard({spot}) {
  const navigate = useNavigate()

  const { handleLike, favouriteSpots, setFavouriteSpots } = useSpots()
  const { user, updateUser } = useUser()
  //const [isLiked, setIsLiked] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const isLiked = favouriteSpots.some((s)=> s.id === spot.id)

  /* const handleLike = async () => {
    //check if already there
    const isFavourite = favouriteSpots.find((s) => s.id === spot.id);

    if (isFavourite) {
      // remove from state
      setFavouriteSpots((prev) => prev.filter((s) => s.id !== spot.id));
      setIsLiked(false)

      // update backend
      try {
        const newUser = {
          ...user,
          favourites: favouriteSpots
            .filter((s) => s.id !== spot.id)
            .map((s) => s.id),
        };
        console.log(newUser);
        await axios.put(`http://localhost:5005/user/${user.id}`, {
          ...user,
          favourites: favouriteSpots
            .filter((s) => s.id !== spot.id)
            .map((s) => s.id),
        });
        console.log("User favorites: " + user.favourites);
        updateUser(newUser);
      } catch (error) {
        setError(error);
        console.log("Error on updating backend");
      }
    } else {
      // add to state
      setFavouriteSpots((prev) => [...prev, spot]);
      setIsLiked(true)

      // update backend
      try {
        //to put the whole user information to the backend create newUser variable
        const newUser = {
          ...user,
          favourites: [...favouriteSpots.map((s) => s.id), spot.id],
        };
        console.log(newUser);
        await axios.put(`http://localhost:5005/user/${user.id}`, {
          ...user,
          favourites: favouriteSpots
            .filter((s) => s.id !== spot.id)
            .map((s) => s.id),
        });
        //update localStorage
        updateUser(newUser);
      } catch (error) {
        setError(error);
        console.log("Error on updating backend");
      }
    }
  }; */


  function handleClickPic() {
    //get the id of the image and navigate to SingleSpotPage

    if (isClicked) {
      setIsClicked(false)
      return;

    } else {
      setIsClicked(true)
      navigate(`/users/${user.userId}/spot-detail/${spot.id}`)
    }

  }

  return (
    <div>
      <div className="relative group w-[200px] h-[200px] rounded-lg overflow-hidden flex justify-center">
        {/* <Link to={`/users/${user.userId}/spot-detail/${spot.id}`}> */}
        {spot.imgUrl && (
          <img
            onClick={() => handleClickPic(spot)}
            src={spot.imgUrl}
            alt={spot.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        {/* </Link> */}
        <div
          className="absolute bottom-0 left-0 right-0 bg-white/50 flex items-center justify-between pl-1 pr-1
                opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <p className="text-black text-lg font-semibold">{spot.title}</p>
          <div>
            {/*  <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={isLiked ? "red" : "current color"}
              className="size-6"
              onClick={() => handleLike()}>
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg> */}

            <svg xmlns="http://www.w3.org/2000/svg"
              fill={isLiked ? "red" : "none"}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={isLiked ? "red" : "currentColor"}
              className="size-6"
              onClick={() => handleLike(spot)}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            {/* 
            <button className="bg-amber-400" onClick={() => handleLike()}>
              Like
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpotCard;
