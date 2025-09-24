
import { useUser } from "../context/user.context"
import { Link } from "react-router-dom"


export default function UserOutlinePage() {
    const { user } = useUser();

    return (
        <>
            <div className="bg-gray-300 flex justify-center">
                <div className="max-w-[800px] mx-auto px-4 flex flex-col items-center gap-5" >

                    {/* Welcome */}
                    <div className="bg-white border-cyan-700 border-dashed border-2 p-4 mt-10 text-center rounded-lg w-full">
                        <h1 className="text-center text-2xl font-medium">Welcome {user.userName}!</h1>
                    </div>

                    {/* Collection */}
                    <div className="bg-white border-cyan-700 border-dashed border-2 p-5 rounded-lg w-full">
                        <h2 className="text-2xl font-medium underline p-2 text-center">View your collection</h2>
                        <div className="flex flex-wrap justify-center gap-2">
                            <img className="rounded-lg flex-1 min-w-[200px] max-w-[250px]" src="/images/lake.jpg" />
                            <img className="rounded-lg flex-1 min-w-[200px] max-w-[250px]" src="/images/desert.jpg" />
                            <img className="rounded-lg flex-1 min-w-[200px] max-w-[250px]" src="/images/hiking.jpg" />
                        </div>
                    </div>

                    {/* Favorites */}
                    <div className="bg-white border-cyan-700 border-dashed border-2 p-5 rounded-lg w-full">
                        <h2 className="text-2xl font-medium underline p-4 text-center">Visit your favorites</h2>
                        <div className="flex flex-wrap justify-center gap-2">
                            <img className="rounded-lg flex-1 min-w-[200px] max-w-[250px]" src="/images/lake.jpg" />
                            <img className="rounded-lg flex-1 min-w-[200px] max-w-[250px]" src="/images/desert.jpg" />
                            <img className="rounded-lg flex-1 min-w-[200px] max-w-[250px]" src="/images/hiking.jpg" />
                        </div>

                    </div>

                    {/* Button */}
                    <div className="bg-white border-cyan-700 border-dashed border-2 p-5 ml-5 mr-5 rounded-lg flex flex-col justify-center items-center w-full">
                        <h2 className="text-2xl font-medium underline p-4 text-center">Add more highlights to your collection</h2>
                        <div>
                            <Link to="/">
                             <button className="bg-[#f59f00] p-5 rounded-lg text-lg font-bold">New spot</button>
                            </Link>
                           
                        </div>
                    </div>

                    {/* <TestGallery />*/}
                    <div className="p-10"></div> 

                </div>

            </div>
        </>

    )
}

