import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useUser } from "../context/user.context";
import { useNavigate } from "react-router-dom"

// Create Context
const SpotsContext = createContext();

// Provider
export function SpotsProvider({ children }) {
  const { user, updateUser } = useUser();
  const navigate = useNavigate();

  // States
  const [exploreSpots, setExploreSpots] = useState([]);
  const [userSpots, setUserSpots] = useState([]);
  const [favouriteSpots, setFavouriteSpots] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [isLiked, setIsLiked] = useState(false)

  //fetch data
  //fetchExploreSpots
  const fetchExploreSpots = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get("http://localhost:5005/spot");
      console.log(res.data);
      const exploreData = res.data.filter((spot) => spot.isPrivate === false);
      setExploreSpots(exploreData);
      localStorage.setItem("spots", JSON.stringify([...res.data]));
    } catch (error) {
      setError("No spots found!");
    } finally {
      setLoading(false);
    }
  };

  //fetchUserSpots
  const fetchUserSpots = async (userId) => {
    //console.log(userId);
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get("http://localhost:5005/spot");
      const userSpotData = res.data.filter((s) => s.projectId === userId);

      setUserSpots(userSpotData);
      return userSpotData;
      //localStorage.setItem("spots", JSON.stringify(userSpotData));
    } catch (error) {
      setError("No spots found!");
    } finally {
      setLoading(false);
    }
  };

  //fetchFavouriteSpots
  const fetchFavouriteSpots = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get("http://localhost:5005/spot");

      const favouriteData = res.data.filter((spot) => {

        if (user.favourites.includes(spot.id)) {
          return spot;

        }
      });
      console.log(favouriteData)
      setFavouriteSpots(favouriteData);
      //localStorage.setItem("spots", JSON.stringify(favouriteData));
    } catch (error) {
      setError("No spots found!");
    } finally {
      setLoading(false);
    }
  };

  //---------
  // Methods
  //---------

  //Like
  const handleLike = async (spot) => {
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
          favourites: [...favouriteSpots.map((s) => s.id), spot.id]
          /* favouriteSpots
            .filter((s) => s.id !== spot.id)
            .map((s) => s.id),  */
        });
        //update localStorage
        updateUser(newUser);
      } catch (error) {
        setError(error);
        console.log("Error on updating backend", error.response?.data || error.message);
      }
    }
  };

  //Delete own spot

  const handleDelete = async (spot) => {
    console.log("projectId:", spot.projectId, "user.userId:", user.userId)
    //if spot is user spot condition noch einfügen
    if (spot.projectId === user.userId) {
      try {
        await axios.delete(`http://localhost:5005/spot/${spot.id}`)
        setUserSpots(prev => prev.filter((s) => s.id !== spot.id))
        navigate(`/users/${user.id}/my-collection`)
      } catch (error) {
        console.log(error)
      }
    } else {
      alert("You cannot delete this spot!")

      //console.log("This is not your spot.")
    }
  }


  return (
    <SpotsContext.Provider
      value={{
        exploreSpots,
        userSpots,
        favouriteSpots,
        loading,
        error,
        fetchFavouriteSpots,
        fetchUserSpots,
        fetchExploreSpots,
        handleDelete,
        handleLike,
        setExploreSpots,
        setUserSpots,
        setFavouriteSpots,
      }}
    >
      {children}
    </SpotsContext.Provider>
  );
}

//Create Individual Hook
export function useSpots() {
  return useContext(SpotsContext);
}
