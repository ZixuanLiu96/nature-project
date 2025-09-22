import SpotCard from "./SpotCard"
import TestGallery from "./TestGallery"

function DashContent() {
    return (
        <div>
            <div className="p-5">
                <h2 className="text-xl font-bold p-4 flex justify-center">My collection</h2>
                <SpotCard />
            </div>

            <div className="bg-amber-300 p-5 w-full flex gap-4 place-content-around">
                <button>Gallery view</button>
                <button>Map view</button>
                <button>Add new spot</button>
            </div>

            <TestGallery />
            <div className="p-10"></div>
        </div>
    )
}

export default DashContent