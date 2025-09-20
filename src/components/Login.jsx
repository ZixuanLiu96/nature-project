export default function Login() {
  return (
    <div
      className="hero min-h-screen mb-50"
      style={{
        backgroundImage: "url(/images/desert.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md flex flex-col items-center gap-10">
          <h1 className="mb-5 text-6xl font-medium uppercase">enjoy it</h1>
          <p className="mb-5 text-2xl">
            Don't hesitate any longer and start your journey to explore the
            natural scenery.
          </p>
          <div className="flex flex-col  items-center justify-center gap-5 ">
            <button className="btn btn-primary bg-[#15aabf] border-none shadow-none w-60 text-lg ">
              Log In
            </button>
            <button className="btn btn-primary bg-[#f59f00] border-none shadow-none w-60 text-lg">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
