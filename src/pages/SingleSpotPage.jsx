import { useEffect, useState } from "react"
import { useSpots } from "../context/spots.context"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

function SingleSpotPage() {

  const [spot, setSpot] = useState({})
  const { id } = useParams()

  const { handleDelete } = useSpots()

  const getData = async () => {
    const res = await fetch(`http://localhost:5005/spot/${id}`)

    const data = await res.json()
    console.log(data)
    setSpot(data)
  }

  useEffect(() => {
    getData()
  }, [id])

  return (
    <div>
      <div className="flex flex-row">
        <img className="m-20 rounded-lg w-1/2" src={spot.imgUrl} />
        <div className="m-20 flex flex-col">
          <h1 className="font-bold text-xl   m-2 ">{spot.title}</h1>
          <p className="m-2 ">{spot.description}</p>
          <p className="m-2 ">{spot.location}</p>
          <div className="flex flex-row">
            <Link to={`/users/edit/${spot.id}`}><button className="btn btn-primary bg-[#f59f00] border-none shadow-none m-2">Edit</button>
            </Link>
            <button onClick={() => setIsLiked(true)} className="btn btn-primary bg-[#f59f00] border-none shadow-none text-lg m-2">Like</button>
            <button onClick={() => handleDelete(spot.id)} className="btn btn-primary bg-[#f59f00] border-none shadow-none text-lg m-2">Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleSpotPage