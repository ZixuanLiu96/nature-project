import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import AuthModal from "../components/AuthModal";
import ScenicWall from "../components/ScenicWall";
import About from "../components/About";
import Login from "../components/Login";
import Team from "../components/Team";

export default function HomePage() {
  const [mode, setMode] = useState(null);

  return (
    <div className="bg-base-300">
      <div className="">
        <div className="header h-screen bg-[url(public/images/water.jpg)] bg-center bg-no-repeat bg-cover relative flex flex-col">
          <nav className="bg-[#15aabf] w-full h-16 fixed top-0 left-0 z-100 flex items-center px-4"></nav>
          <div className="flex flex-col items-center justify-center flex-grow pr-4 text-center bg-white/75 max-w-3xl rounded-r-lg -mb-18 mt-100 ">
            <h1 className="leading-tight font-[Ephesis] text-[#333] font-bold tracking-widest text-4xl sm:text-7xl md:text-9xl lg:text-[9rem]">
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem]">
                “
              </span>
              Nature's &ensp;&ensp;Jewels
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem]">
                ”
              </span>
            </h1>
            <p className="text-[#333] text-base sm:text-lg md:text-xl lg:text-2xl mt-4 pb-8">
              Start your journey of sharing personal scenery here.
            </p>
          </div>
        </div>

        <div className="fall-leaves flex justify-between">
          <div className="w-full  h-180 bg-[url(/images/leaves.gif)] bg-center  bg-cover mt-[-20rem] "></div>
          {/* <div className="w-[%]  h-200 bg-[url(/images/leaves.gif)] bg-center bg-no-repeat bg-cover mt-[-20rem] "></div> */}
        </div>

        <ScenicWall />

        <About />

        <Login />
        <Team />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <button className="btn btn-primary" onClick={() => setMode("login")}>
          Log in
        </button>
        <button className="btn btn-secondary" onClick={() => setMode("signup")}>
          Sign up
        </button>
        {mode && <AuthModal mode={mode} onClose={() => setMode(null)} />}
      </div>
    </div>
  );
}
