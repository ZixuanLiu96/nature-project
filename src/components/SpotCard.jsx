

function SpotCard({ spot }) {


    return (
        <div>
            <div className="relative group w-[200px] h-[200px] rounded-lg overflow-hidden flex justify-center">
                {spot.imgUrl && (
                    <img
                        src={spot.imgUrl}
                        alt={spot.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />



                )}
                <div className="absolute bottom-0 left-0 right-0 bg-white/50 flex items-center justify-center
                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-black text-lg font-semibold">{spot.title}</p>
                </div>
 
            </div>
        
        </div>

    )
}

export default SpotCard