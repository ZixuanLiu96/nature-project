import { createContext, useContext, useState, useEffect } from "react"
import axios from "axios";

// Create Context
const SpotsContext = createContext();

// Provider
export function SpotsProvider({ children }) {

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
            const exploreData = [
                ...res.data.filter((spot) => spot.isPrivate === false),
            ];
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
            const userSpotData = [
                ...res.data.filter((spot) => spot.projectId === userId),
            ];
            setUserSpots(userSpotData);
            //localStorage.setItem("spots", JSON.stringify(userSpotData));
        } catch (error) {
            setError("No spots found!")

        } finally {
            setLoading(false)
        }
    };

    //fetchFavouriteSpots
    const fetchFavouriteSpots = async (favId) => {
        try {
            setLoading(true)
            setError(null)
            const res = await axios.get("http://localhost:5005/spot")
            const favouriteData = [
                ...res.data.filter((spot) => spot.projectId === favId),
            ];
            setSpotsData(favouriteData);
            //localStorage.setItem("spots", JSON.stringify(favouriteData));
        } catch (error) {
            setError("No spots found!")

        } finally {
            setLoading(false)
        }
    };

    //Initial Load
    useEffect(() => {
        fetchExploreSpots()
    }, []);

    //---------
    // Methods
    //---------

    //Like
    const likeSpot = (spot) => {
        //check if already there

        setFavouriteSpots(prev => [...prev, { ...spot }])

        // POST to backend

    }

    //Delete own spot
    const deleteSpot = (projectId) => {
        setUserSpots(prev => prev.filter((s) => s.id !== projectId));

        //DELETE request to backend
    }

    //Delete favourite
    const deleteFavourite = (favId) => {
        setFavouriteSpots(prev => prev.filter((s) => s.id !== favId));

        // DELETE request to backend
    }

    //Edit
    const editSpot = (projectId, newData) => {
        setUserSpots(prev =>
            prev.map((s) => (s.id !== projectId
                ? { ...s, ...newData }
                : s))
        );

        // PUT request to backend
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
                likeSpot,
                deleteSpot,
                deleteFavourite,
                editSpot,
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