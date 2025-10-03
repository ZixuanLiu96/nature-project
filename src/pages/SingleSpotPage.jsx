import { useEffect, useState } from "react"
import { useSpots } from "../context/spots.context"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

function SingleSpotPage() {

  //const [spot, setSpot] = useState({})
  const { id } = useParams()

  const { handleDelete, handleLike, favouriteSpots } = useSpots()

  const isLiked = favouriteSpots.some((s)=> s.id === spot.id)

  const getData = async () => {
    const res = await fetch(`http://localhost:5005/spot/${id}`)

    const data = await res.json()
    //console.log(data)
    setSpot(data)
  }

  useEffect(() => {
    getData()
  }, [id])

  return (
    <div>
      <div className="flex flex-col items-start md:flex-row justify-center gap-10 md:gap-20 p-5 md:p-20">
        <div className="max-w-md">
          <img className="rounded-lg w-auto object-cover md:w-full" src={spot.imgUrl} />
        </div>
        
        <div>
          <h1 className="font-bold text-xl mb-2 ">{spot.title}</h1>
          <p className="mb-2 ">{spot.description}</p>
          <p className="mb-5 ">{spot.location}</p>

          <svg xmlns="http://www.w3.org/2000/svg"
              fill={isLiked ? "red" : "none"}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={isLiked ? "red" : "currentColor"}
              className="size-6 mb-5 ml-5"
              onClick={() => handleLike(spot)}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>

          <div className="flex flex-row gap-4">
            <Link to="*">
           <button className="btn btn-primary bg-[#f59f00] border-none shadow-none m-2  hover:bg-amber-400">Edit</button></Link>
           
           {/*  <button onClick={() => handleLike(spot.id)} className="btn btn-primary bg-[#f59f00] border-none shadow-none text-lg m-2">Like</button> */}
            <button onClick={() => handleDelete(spot)} className="btn btn-primary bg-[#f59f00] border-none shadow-none m-2  hover:bg-amber-400">Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleSpotPage