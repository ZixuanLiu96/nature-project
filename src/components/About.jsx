export default function About() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-screen px-8 py-6">
      <div className="flex flex-col items-center justify-center  space-y-6 ">
        <div className="w-60 h-60 rounded-full bg-[#fcc419]/70"></div>
        <div className="w-40 h-40 rounded-full bg-[#fcc419]/70 -mt-40 ml-70"></div>
        {/* <h2 className="text-5xl md:text-7xl lg:text-9xl font-normal uppercase text-[#999]/70 -mt-100">
          About
        </h2> */}
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
          what's this app for?
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
    </section>
  );
}
