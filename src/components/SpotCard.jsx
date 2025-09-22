

function SpotCard() {
    return (
        <div>
            <img className="rounded-lg" src="/images/desert.jpg" alt="desert" />
            <div className="m-4 flex place-content-between">
                <div className="text-lg font-bold text-[#15aabf] m-2">desert</div>
                <div>
                    <button className="btn btn-accent ml-2">Like</button>
                    <button className="btn btn-accent ml-2" >Delete</button>
                </div>

            </div>
        </div>

    )
}

export default SpotCard