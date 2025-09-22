import SpotCard from "./SpotCard"

function DashContent() {
  return (
    <div>
        <div className="p-5">
            Preview: My Collection: show first three?
        </div>
        
        <div className="bg-amber-300 p-5 w-150 flex justify-start gap-4">
            <button>Gallery view</button>
            <button>Map view</button>
            <button>Add new spot</button>
        </div>

        <div className="p-5">
            Explore
            <SpotCard />
        </div>
        <div className="p-20"></div>
    </div>
  )
}

export default DashContent