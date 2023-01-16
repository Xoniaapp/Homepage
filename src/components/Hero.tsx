export default function Hero() {
  return (
    <>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-24 text-white">
        <div className="text-center">
          <h1 className="font-bold tracking-tight">
            <span className="text-7xl">Communication is essential,</span>
            <br />
            <span className="text-7xl">Privacy is important.</span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            Let the hampters keep you safe in this world of spyware.
          </p>
        </div>
      </div>
      <div className="mt-8 flex gap-x-4 sm:justify-center">
        <a
          href="https://app.xoniaapp.com/channels/me"
          className="inline-block bg-red-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-red-600 hover:bg-red-700 hover:ring-red-700"
        >
          Open Web App{" "}
          <span className="text-white" aria-hidden="true">
            &rarr;
          </span>
        </a>
        <a
          href="https://github.com/xoniaapp/desktop/releases/latest"
          className="inline-block bg-black px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-red-600 hover:bg-red-700 hover:ring-black"
        >
          Download App
        </a>
      </div>
      <div className="mt-12">
        <div className="flex">
          <span className="flex-1"></span>
          <img
            width={950}
            height={600}
            className="grow rounded-md shadow-2xl shadow-black bg-gray-900"
            src="https://media.discordapp.net/attachments/902866318154403860/1064423030882832414/image.png"
            alt="App screenshot"
          />
          <span className="flex-1"></span>
        </div>
      </div>
    </>
  );
}
