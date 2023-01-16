export default function Banner() {
  return (
    <div className="border-t-2 border-b-2 border-zinc-800 mt-12">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:py-16 lg:px-8">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Don't wait
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
            Join today. No spyware. No trackers included.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <p className="mt-3 text-sm text-gray-300">
            <a
              href="https://app.xoniaapp.com/channels/me"
              className="flex w-full items-center justify-center bg-black px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-red-600 hover:bg-red-700 hover:ring-black"
            >
              Show Me
              <span className="text-white" aria-hidden="true">
                &rarr;
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
