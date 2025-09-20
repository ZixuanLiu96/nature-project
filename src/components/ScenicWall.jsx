export default function ScenicWall() {
  return (
    <>
      <section className="scenic-wall py-16 px-2 ">
        <div className="relative flex items-center justify-center mb-10">
          <div className="hidden md:block w-40 h-1 bg-[#444] rounded-full mr-6"></div>
          <h2 className="text-[#fab005] font-normal uppercase tracking-widest text-lg sm:text-5xl md:text-7xl lg:text-[6.4rem] text-center">
            Scenic Wall
          </h2>
          <div className="hidden md:block w-40 h-1 bg-[#444] rounded-full mr-6"></div>
        </div>
        <div className="carousel rounded-box">
          <div className="carousel-item h-80">
            <img
              src="/images/city.jpg"
              alt="city"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
          <div className="carousel-item h-80">
            <img src="/images/mountain.jpg" alt="mountain" />
          </div>
          <div className="carousel-item h-80">
            <img src="/images/rock.jpg" alt="desert" />
          </div>
          <div className="carousel-item h-80">
            <img src="/images/forest.jpg" alt="forest" />
          </div>
          <div className="carousel-item h-80">
            <img src="/images/lake.jpg" alt="lake" />
          </div>
          <div className="carousel-item h-80">
            <img src="/images/polynesia.jpg" alt="polynesia" />
          </div>
          <div className="carousel-item h-80">
            <img src="/images/dorset.jpg" alt="dorset" />
          </div>
        </div>

        <p className="text-base sm:text-lg md:text-xl mt-6 text-[#333] text-center">
          &larr; swipe left to see more
        </p>
      </section>
    </>
  );
}
