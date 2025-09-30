import { createContext, useContext, useState, useEffect } from "react"
import axios from "axios";
import { useUser } from "../context/user.context"

// Create Context
const SpotsContext = createContext();

// Provider
export function SpotsProvider({ children }) {
    const { user } = useUser();

    // States
    const [exploreSpots, setExploreSpots] = useState([]);
    const [userSpots, setUserSpots] = useState([]);
    const [favouriteSpots, setFavouriteSpots] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //fetch data 
    //fetchExploreSpots
    const fetchExploreSpots = async () => {
        try {
            setLoading(true)
            setError(null)
            const res = await axios.get("http://localhost:5005/spot")
            console.log(res)
            const exploreData = res.data.filter((spot) => spot.isPrivate === false);
            setExploreSpots(exploreData);
            //localStorage.setItem("spots", JSON.stringify(exploreData));
        } catch (error) {
            setError("No spots found!")

        } finally {
            setLoading(false)
        }
    };

    //fetchUserSpots
    const fetchUserSpots = async (userId) => {
        try {
            setLoading(true)
            setError(null)
            const res = await axios.get("http://localhost:5005/spot")
            const userSpotData = res.data.filter((spot) => spot.projectId === userId);
            setUserSpots(userSpotData);
            //localStorage.setItem("spots", JSON.stringify(userSpotData));
        } catch (error) {
            setError("No spots found!")

        } finally {
            setLoading(false)
        }
    };

    //fetchFavouriteSpots
    const fetchFavouriteSpots = async () => {
        try {
            setLoading(true)
            setError(null)
            const res = await axios.get("http://localhost:5005/spot")

            const favouriteData = res.data.filter((spot) => {
                    if (user.favourites.includes(spot.id)) {
                         return spot
                    }
                })
            setFavouriteSpots(favouriteData);
            //localStorage.setItem("spots", JSON.stringify(favouriteData));
        } catch (error) {
            setError("No spots found!")

        } finally {
            setLoading(false)
        }

      }


    //Initial Load
    useEffect(() => {
        fetchExploreSpots();
        fetchFavouriteSpots();
        fetchUserSpots();
    }, []);

    //---------
    // Methods
    //---------

    //Like
    /* const likeSpot = (spot) => {
        //check if already there

        setFavouriteSpots((prev) => {
            if (prev.find((s) => s.id === spot.id)) {
                return prev;
            }
            return [...prev, { ...spot }]
        });

        // POST to backend
        try {
            await axios.post(`http://localhost:5005/users/${user.id}/favorites` {
                spotId: spot.id,
            })
        } catch (error) {
            console.log("Error adding favourite", err)
        }
    }; */

    //Delete own spot
   /*  const deleteSpot = (projectId) => {
        setUserSpots(prev => prev.filter((s) => s.id !== projectId));

        //DELETE request to backend
    } */

    //Delete favourite
    /* const deleteFavourite = (favId) => {
        setFavouriteSpots(prev => prev.filter((s) => s.id !== favId));

        // DELETE request to backend
    } */

    //Edit
   /*  const editSpot = (projectId, newData) => {
        setUserSpots(prev =>
            prev.map((s) => (s.id !== projectId
                ? { ...s, ...newData }
                : s))
        ); 

        // PUT request to backend
    }*/

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
               // likeSpot,
                //deleteSpot,
               // deleteFavourite,
                //editSpot,
                setExploreSpots,
                setUserSpots,
                setFavouriteSpots,
            }}>

            {children}

        </SpotsContext.Provider>
    )
}

//Create Individual Hook
export function useSpots() {
    return useContext(SpotsContext);
}