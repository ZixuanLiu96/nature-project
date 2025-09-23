

function SpotCard() {
    return (
        <div>
            <div className="relative group w-50 h-50 rounded-lg overflow-hidden flex justify-center">
                <img
                    src="/images/forest.jpg"
                    alt="forest"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white/50 flex items-center justify-center
                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-black text-lg font-semibold">Beautiful Forest</p>
                </div>
            </div>

            {/* <img className="rounded-lg" src="/images/desert.jpg" alt="desert" />
            <div className="m-4 flex place-content-between">
                <div className="text-lg font-bold text-[#15aabf] m-2">desert</div>
                <div>
                    <button className="btn btn-accent ml-2">Like</button>
                    <button className="btn btn-accent ml-2" >Delete</button>
                </div>

            </div> */}
        </div>

    )
}

export default SpotCard