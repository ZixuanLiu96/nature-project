import { createContext, useContext, useState, useEffect } from "react"

// Create Context
const SpotsContext = createContext();

// Provider
export function SpotsProvider() {

    // States
    const [exploreSpots, setExploreSpots] = useState([]);
    const [userSpots, setUserSpots] = useState([]);
    const [favouriteSpots, setFavouriteSpots] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //fetch data 
    useEffect(() => {

        //fetchExploreSpots
        //fetchUserSpots
        //fetchFavouriteSpots

    }, [])

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
    const deleteSpot = (spotId) => {
        setUserSpots(prev => prev.filter(s => s.id !== spotId));

        //DELETE request to backend
    }

    //Delete favourite
    const deleteFavourite = (favId) => {
        setFavouriteSpots(prev => prev.filter(s => s.id !== favId));

        // DELETE request to backend
    }

    //Edit
    const editSpot = (spotId, newData) => {
        setUserSpots(prev =>
            prev.map(s => (s.id !== spotId
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
                likeSpot,
                deleteSpot,
                deleteFavourite,
                editSpot,
                setExploreSpots,
                setUserSpots,
                setFavouriteSpots,
            }}>

            {childen}

        </SpotsContext.Provider>
    )
}

//Create Individual Hook
export function useSpot() {
    return useContext(SpotsContext); 
}