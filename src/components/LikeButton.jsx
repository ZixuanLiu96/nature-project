import { useSpots } from "../context/spots.context"


function LikeButton() {
const { likeSpot } = useSpots


  return (
    <div>
        <button onClick={() => likeSpot(spot.id)}></button>
    </div>
  )
}

export default LikeButton