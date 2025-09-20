export default function Team() {
  return (
    <section className="team flex flex-col gap-30">
      <h2 className="uppercase text-[#fab005] font-normal text-6xl sm:text-2xl md:text-7xl lg:text-8xl self-end px-20">
        our team
      </h2>
      <div className="flex justify-center items-center gap-50">
        <div className="flex flex-col items-center gap-5">
          <div
            className="rounded-full w-40 h-40 mt-100] "
            style={{
              backgroundImage: "url(/images/hiking.jpg)",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          ></div>
          <h3 className="uppercase font-medium text-2xl">Zixuan Liu</h3>
          <a
            href={"https://www.linkedin.com/in/zixuan-liu-53357026a/"}
            className="text-lg"
          >
            Linkedin
          </a>
          <a href={"https://github.com/ZixuanLiu96"} className="text-lg">
            GitHub
          </a>
        </div>
        <div className="flex flex-col items-center gap-5">
          <div
            className="rounded-full w-40 h-40 mt-100] "
            style={{
              backgroundImage: "url(/images/hiking.jpg)",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          ></div>
          <h3 className="uppercase font-medium text-2xl">Barbara</h3>
          <a href={"#"} className="text-lg">
            Linkedin
          </a>
          <a href={"#"} className="text-lg">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
