import SpotCard from "./SpotCard"
import TestGallery from "./TestGallery"
import { useUser } from "../context/user.context"

function DashContent() {
    const { user } = useUser();

    return (
        <>
            <div className="bg-gray-300 flex justify-center">
                <div className="w-fit flex flex-col items-center gap-5" >

                    {/* Welcome */}
                    <div className="bg-white border-cyan-700 border-dashed border-2 p-4 mt-10 flex text-center rounded-lg">
                        <h1 className="text-center text-2xl font-medium">Welcome {user.userName}!</h1>
                    </div>

                    {/* Collection */}
                    <div className="bg-white border-cyan-700 border-dashed border-2 p-5 ml-5 mr-5 mt-5 rounded-lg flex-col items-center">
                        <h2 className="text-2xl font-medium underline p-2 text-center">View your collection</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                            <img className="rounded-lg w-[250px] h-[150px]" src="/images/lake.jpg" />
                            <img className="rounded-lg w-[250px] h-[150px]" src="/images/desert.jpg" />
                            <img className="rounded-lg w-[250px] h-[150px]" src="/images/hiking.jpg" />
                        </div>
                    </div>

                    {/* Favorites */}
                    <div className="bg-white border-cyan-700 border-dashed border-2 p-5 ml-5 mr-5 mt-5 rounded-lg">
                        <h2 className="text-2xl font-medium underline p-4 text-center">Visit your favorites</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                            <img className="rounded-lg w-[250px] h-[150px]" src="/images/lake.jpg" />
                            <img className="rounded-lg w-[250px] h-[150px]" src="/images/desert.jpg" />
                            <img className="rounded-lg w-[250px] h-[150px]" src="/images/hiking.jpg" />
                        </div>

                    </div>

                    {/* Button */}
                    <div className="bg-white border-cyan-700 border-dashed border-2 p-5 ml-5 mr-5 mt-5 rounded-lg flex flex-col justify-center items-center">
                        <h2 className="text-2xl font-medium underline p-4 text-center">Add more highlights to your collection</h2>
                        <div><button className="bg-amber-300 p-5 rounded-lg text-lg font-bold">New spot</button></div>
                    </div>

                    <TestGallery />
                    <div className="p-10"></div>

                </div>

            </div>
        </>

    )
}

export default DashContent