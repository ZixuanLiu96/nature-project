export default function HomePage() {
  return (
    <div>
      <div className="header h-dvh bg-[url(public/images/water.jpg)] bg-center bg-no-repeat bg-cover relative mb-[20rem]">
        <nav className="bg-[#15aabf] w-full h-[8rem] fixed"></nav>
        <div className="absolute top-180 bg-[#eee]/75 w-[80rem] h-[35rem] text-[#222] ">
          <h1 className="text-[12rem] leading-[.9] font-[Ephesis] font-[700] tracking-[1.5rem] pl-[2rem] ">
            <span className="text-[14rem]">“</span>Nature's &ensp;
            &ensp;&ensp;&ensp;&ensp;Jewels
            <span className="text-[14rem]">”</span>
          </h1>
          <p className="text-center text-[2.4rem] mt-[4rem]">
            Start your journey of sharing personal scenery here.
          </p>
        </div>
      </div>

      <section>about</section>
      <section>login</section>
      <section>team</section>
      <footer>footer</footer>
    </div>
  );
}
