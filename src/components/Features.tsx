export default function Features() {
  return (
    <div className="overflow-hidden bg-gradient-to-b from-red-900 to-black">
      <div className="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
        <div className="relative ml-12 mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Secure space for you.
            </h3>
            <p className="mt-3 text-lg text-gray-300">
              Privacy definitely matters. We're based in Germany and we abide by
              all the GDRP rules and regulations.
            </p>
          </div>

          <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
            <img
              className="relative mx-auto rounded-md"
              width={490}
              src="https://media.discordapp.net/attachments/884101020479782932/1064109770040152124/image.png"
              alt=""
            />
          </div>
        </div>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Open Source at core.
              </h3>
              <p className="mt-3 text-lg text-gray-300">
                Thinking of reviewing the codebase? Just do it no one is
                stopping you. All of our code is licensed under{" "}
                <a
                  className="text-red-600 hover:text-red-700"
                  href="https://github.com/xoniaapp/webapp/blob/main/LICENSE"
                >
                  AGPL 3.0
                </a>
                .
              </p>
            </div>

            <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
              <img
                className="relative mx-auto rounded-md"
                width={490}
                src="https://media.discordapp.net/attachments/884101020479782932/1064122142138044446/image.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
