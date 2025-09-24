

function TestGallery() {
 
  return (
    <> 
    <h2 className="text-xl font-bold flex justify-center p-4">Explore the sceneries of the community</h2>
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-4 flex items-center">
      <div className="-m-1 flex flex-row sm:flex-wrap md:-m-2">
        <div className="flex w-full sm:w-1/2 flex-wrap lg:flex-row flex-row-reverse">
          <div className="relative group rounded-lg overflow-hidden w-full lg:w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center
             transition-transform duration-300 group-hover:scale-105"
              src="https://www.tailwindtap.com/assets/components/gallery/image1.jpg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white/50 flex items-center justify-center
                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-black text-lg font-semibold">Canyon</p>
                </div>
          </div>
          <div className="w-full lg:w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
              src="https://www.tailwindtap.com/assets/components/gallery/image2.jpg"
            />
          </div>
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center max-h-none lg:max-h-[1000px]"
              src="https://www.tailwindtap.com/assets/components/gallery/image7.jpg"
            />
          </div>
        </div>
        <div className="flex w-full sm:w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
              src="https://www.tailwindtap.com/assets/components/gallery/image9.jpg"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
              src="https://www.tailwindtap.com/assets/components/gallery/image4.jpg"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
              src="https://www.tailwindtap.com/assets/components/gallery/image6.jpg"
            />
          </div>
        </div>
      </div>
    </div>
    </>
   
  );
};



export default TestGallery