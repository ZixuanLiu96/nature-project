export default function About() {
  return (
    <section className="flex flex-col min-h-screen my-40 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 py-6">
        <div className="flex flex-col items-center justify-center  space-y-6 ">
          <div className="w-60 h-60 rounded-full bg-[#fcc419]/70"></div>
          <div className="w-40 h-40 rounded-full bg-[#fcc419]/70 -mt-40 ml-70"></div>
          <h2
            className="text-5xl md:text-7xl lg:text-9xl font-normal uppercase -mt-55 tracking-wide"
            style={{
              textShadow: "2px 2px 0 #444, 6px 6px 0 rgba(153, 153, 153, 0.71)",
            }}
          >
            About
          </h2>
        </div>
        <div className="about bg-white flex flex-col items-start justify-center  space-y-4 p-10">
          <p className="uppercase font-medium text-xl sm:text-md md:text-lg lg:text-2xl">
            What's this app for?
          </p>
          <p className="text-lg">
            This is an app for collecting your favorite natural scenery. In this
            app, you'll always find what others have posted about their favorite
            natural scenery and locations. You can collect them into your own
            account and mark them on a map. You can also share your treasured
            scenery with others. If you love traveling, enjoying nature, and
            sharing your experiences, this app is definitely for you. Never envy
            others for their unique natural scenery again.
          </p>
        </div>
      </div>

      {/* the description of each function */}
      <div className="description px-6 md:px-20 lg:px40 py-20 flex flex-col justify-center gap-20">
        {/* Share Scenery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-5 px-4 md:px-10 py-5 order-2 md:order-1">
            <h3 className="text-2xl font-medium underline">Share Scenery</h3>
            <p className="text-lg">
              You can share the natural scenery in the world that you think is
              worth sharing and mark the exact coordinates with other users.
            </p>
          </div>
          <div
            className="w-60 h-60 md:w-80 md:h-80 rounded-full mx-auto order-1 md:order-2"
            style={{
              backgroundImage: "url(/images/explore.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
              border: "3px dashed #15aabf ",
            }}
          ></div>
        </div>
        {/* Collections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div
            className="w-60 h-60 md:w-80 md:h-80 rounded-full mx-auto"
            style={{
              backgroundImage: "url(/images/dashboard.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              border: "3px dashed #15aabf ",
            }}
          ></div>
          <div className="flex flex-col gap-5 px-4 md:px-10 py-5 order-2 md:order-1">
            <h3 className="text-2xl font-medium underline">Collections</h3>
            <p className="text-lg">
              Collect and mark the unique natural scenery you see on this app so
              you can visit it in person later.
            </p>
          </div>
        </div>
        {/* Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">

          <div
            className="w-60 h-60 md:w-80 md:h-80 rounded-full mx-auto order-1 md:order-2"
            style={{
              backgroundImage: "url(/images/map.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
              border: "3px dashed #15aabf ",
            }}
          ></div>
          <div className="flex flex-col gap-5 px-4 md:px-10 py-5 order-2 md:order-1">
            <h3 className="text-2xl font-medium underline">Pin The Map</h3>
            <p className="text-lg">
              You can mark the location you want to share on our map, or you can
              get a location from the collected scenery and mark it on your map.
            </p>
          </div>


        </div>
        {/* Privacy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div
            className="w-60 h-60 md:w-80 md:h-80 rounded-full mx-auto"
            style={{
              backgroundImage: "url(/images/private.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
              border: "3px dashed #15aabf ",
            }}
          ></div>
          <div className="flex flex-col gap-5 px-4 md:px-10 py-5 order-2 md:order-1">
            <h3 className="text-2xl font-medium underline">Privacy</h3>
            <p className="text-lg">
              If you don't want to share some unique scenery, you just want to
              record it, you can also choose the private option to protect the
              pure land in your heart.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
