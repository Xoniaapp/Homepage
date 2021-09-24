import React from "react";

function Grid() {
  return (
    <div>
      <section className="text-blueGray-700 ">
        <div className="container items-center px-5 py-8 mx-auto lg:px-24">
          <div className="flex flex-wrap mb-12 text-left">
            <div className="w-full mx-auto lg:w-1/3">
              <div className="p-6">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-black bg-blueGray-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h1
                  style={{ color: "white" }}
                  className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font"
                >
                  Privacy First.
                </h1>
                <p
                  style={{ color: "white" }}
                  className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 "
                >
                  We care about your privacy, even we can't access your private
                  messages. The information we collect is erased within 24 hour
                  period. Please read our privacy policy to learn more about the
                  data we collect.
                </p>
              </div>
            </div>
            <div className="w-full mx-auto lg:w-1/3">
              <div className="p-6">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-black bg-blueGray-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h1
                  style={{ color: "white" }}
                  className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font"
                >
                  Open Source.
                </h1>
                <p
                  style={{ color: "white" }}
                  className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 "
                >
                  Xonia is open source so everyone can learn and contribute to
                  our platform.
                </p>
              </div>
            </div>
            <div className="w-full mx-auto lg:w-1/3">
              <div className="p-6">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-black bg-blueGray-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h1
                  style={{ color: "white" }}
                  className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font"
                >
                  Lightning Speed.
                </h1>
                <p
                  style={{ color: "white" }}
                  className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 "
                >
                  Our Global Data Centers Allow You To Send Instant Messages!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Grid;
