import SpotCard from "../components/SpotCard"
import { useUser } from "../context/user.context"


function SingleSpotPage() {

    //delete function
    //like function


  return (
    <div>
        <SpotCard />
        <div>
            <button className="btn btn-primary bg-[#f59f00] border-none shadow-none text-lg">Delete</button>
            <button className="btn btn-primary bg-[#f59f00] border-none shadow-none text-lg">Like</button>
            <button className="btn btn-primary bg-[#f59f00] border-none shadow-none text-lg">Delete</button>
        </div>
    </div>
  )
}

export default SingleSpotPage