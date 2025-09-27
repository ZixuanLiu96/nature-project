export default function Team() {
  return (
    <section className="team flex flex-col gap-30 mb-40">
      <h2 className="uppercase text-[#fab005] font-normal text-6xl sm:text-2xl md:text-4xl lg:text-7xl self-end px-40">
        -- our team
      </h2>
      <div className="flex justify-center items-center gap-70">
        <div className="flex flex-col items-center gap-5">
          <div
            className="rounded-full w-50 h-50 mt-100] "
            style={{
              backgroundImage: "url(/images/Zixuan.jpg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <h3 className="font-medium text-2xl">Zixuan Liu</h3>
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
            className="rounded-full w-50 h-50 mt-100] "
            style={{
              backgroundImage: "url(/images/Barbara.jpg)",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          ></div>
          <h3 className="font-medium text-2xl">Barbara Goldbeck</h3>
          <a
            href={"www.linkedin.com/in/barbara-goldbeck-7ba383367"}
            className="text-lg"
          >
            Linkedin
          </a>
          <a href={"https://github.com/Baba-labab"} className="text-lg">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
