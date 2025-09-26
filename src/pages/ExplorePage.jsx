import { useEffect, useState } from "react";
//import axios from "axios";
import { useSpots } from "../context/spots.context"
import SpotCard from "../components/SpotCard";

export default function ExplorePage() {
  const { exploreSpots, fetchExploreSpots, loading, error } = useSpots()

  useEffect(() => {
    fetchExploreSpots()

  }, []);

  if (loading) return <p>Loading spots</p>
  if (error) return <p>{error}</p>



  /* const [imgs, setImgs] = useState(() => {
    const spots = localStorage.getItem("spots");
    return spots
      ? JSON.parse(spots).filter((spot) => spot.isPrivate == false)
      : [];
  });
  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:5005/spot")
        .then((res) => {
          console.log(res.data);
          // console.log(res.data[0].imgUrl);
          const copyData = [
            ...res.data.filter((spot) => spot.isPrivate == false),
          ];
          setImgs(copyData);
          localStorage.setItem("spots", JSON.stringify(copyData));
        })
        .catch((error) => console.log(error));
    })();
  }, []); */

  // console.log(imgs);
  // console.log(imgs[0]?.imgUrl);

  return (
    <div>
      <div>
        <p className="p-4 text-center font-semibold text-2xl">Explore the vast collection of beautiful sceneries of the community</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
      {exploreSpots &&
        exploreSpots.map((spot) => (
          <SpotCard key={spot.id} spot={spot} />

          /*  <div
             key={spot.id}
             className="w-100 h-100 text-[#fff]"
             style={{
               backgroundImage: `url(${spot.imgUrl})`,
               backgroundPosition: "center",
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover",
             }}
           >
             {spot.title}
           </div> */
        ))}
    </div>
    <div className="p-10"></div>
    </div>
    
  );
}
