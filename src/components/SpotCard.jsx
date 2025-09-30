import { useSpots } from "../context/spots.context"
import { useUser } from "../context/user.context"
import { Link } from "react-router-dom";
import axios from "axios"
import { useState } from "react"

function SpotCard({ spot }) {
    const { favouriteSpots, setFavouriteSpots, setError } = useSpots();
    const { user, updateUser } = useUser()
    const [isLiked, setIsLiked ] = useState(false)

    const handleLike = async () => {

        //check if already there
        const isFavourite = favouriteSpots.find((s) => s.id === spot.id)

        if (isFavourite) {
            // remove from state
            setFavouriteSpots((prev) => prev.filter((s) => s.id !== spot.id));

            // update backend
            try {
                const newUser = {
                    ...user,
                    favourites: favouriteSpots.filter((s) => s.id !== spot.id).map(s => s.id)
                }
                console.log(newUser)
                await axios.put(`http://localhost:5005/user/${user.id}`, {
                    ...user,
                    favourites: favouriteSpots.filter((s) => s.id !== spot.id).map(s => s.id)
                })
                console.log('User favorites: ' + user.favourites);
                updateUser(newUser)
            }
            catch (error) {
                setError(error)
                console.log("Error on updating backend")
            }
        }
        else {

            // add to state
            setFavouriteSpots((prev) => [...prev, spot])

            // update backend
            try {
                //to put the whole user information to the backend create newUser variable
                const newUser = {
                    ...user,
                    favourites: [...favouriteSpots.map(s => s.id), spot.id]
                }
                console.log(newUser)
                await axios.put(`http://localhost:5005/user/${user.id}`, {
                    ...user,
                    favourites: favouriteSpots.filter((s) => s.id !== spot.id).map(s => s.id)
                })
                //update localStorage
                updateUser(newUser)
            }
            catch (error) {
                setError(error)
                console.log("Error on updating backend")
            }
        }
    }

    function handleClickPic() {
        //get the id of the image and navigate to SingleSpotPage
    
    }

    return (
        <div>
            <div className="relative group w-[200px] h-[200px] rounded-lg overflow-hidden flex justify-center">
                {spot.imgUrl && (
                  
                        <img
                        /* onClick={() => handleClickPic()} */
                            src={spot.imgUrl}
                            alt={spot.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    
                )}

                <div className="absolute bottom-0 left-0 right-0 bg-white/50 flex items-center justify-center
                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-black text-lg font-semibold">{spot.title}</p>
                    <div><button className="bg-amber-400" onClick={() => handleLike()} >Like</button></div>
                </div>


            </div>

        </div>

    )
}

export default SpotCard