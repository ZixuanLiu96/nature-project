//import axios from "axios";
import { useSpots } from "../context/spots.context"
import { useEffect, useState } from "react";
import SpotCard from "../components/SpotCard";
import { Link } from "react-router-dom"
import { useUser } from "../context/user.context"

export default function FavouritePage() {
  const { favouriteSpots, fetchFavouriteSpots, loading, error } = useSpots()
  const { user } = useUser();
  //const [dataCopy, setDataCopy] = useState([]); 
  //const [favorites, setFavorites] = useState([])

  // get the data
  useEffect(() => {
    window.scrollTo(0,0);
    fetchFavouriteSpots()
    console.log (favouriteSpots)

  }, []);
  /*  useEffect(() => {
     (async () => {
       const res = await axios.get("http://localhost:5005/spot")
       console.log(res.data)
       const favoriteSpots = res.data.filter(spot => {
         console.log(user)
         if(user.favorites.includes(spot.id)) {
           return spot
         }
       })
       setFavorites(favoriteSpots)
     })();
   }, []); */

  return (
    <div>
      <div>
        <p className="p-4 text-center font-semibold text-2xl">My favourites</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {favouriteSpots && favouriteSpots.length > 0 ? (
          favouriteSpots.map((spot) => (
            <SpotCard key={spot.id} spot={spot} />
          ))
        ) : (
          <div className="text-center w-full">
            <p className="text-xl font-medium  p-4 text-center">There are no sceneries in your favourites' collection. You can start now exploring!</p>
            <Link to={`/users/explore`}>
              <button className="bg-[#f59f00] p-5 rounded-lg text-lg font-bold text-white">Explore</button></Link>
          </div>
        )
        }
      </div>
      <div className="p-10"></div>
    </div>
  )
   
  }
