import React from 'react'

import { Link } from 'react-router-dom'

import { Navbar , Footer } from "../components/index";

function Error() {
    return (
        <>
        <Navbar />
        <div>
      <section className="text-blueGray-700 ">
        <div className="container flex flex-col px-5 py-24 mx-auto lg:items-center">
          <div className="flex flex-col w-full mb-12 text-left lg:text-center">
            {/* The Header One */}
            <h1
              style={{ color: "white" }}
              class="mb-6 text-2xl font-semibold tracking-tighter text-black sm:text-5xl title-font"
            >
              404 | Page not Found.
            </h1>
          </div>
          {/* //#region */}
          <div className="flex justify-left lg:justify-center ">
            {/* TODO: Add React Routing */}
            <Link to="/">
            <button className="flex items-center px-6 py-2 mt-auto mr-3 font-semibold text-blue-800 transition duration-500 ease-in-out transform bg-blue-100 rounded-lg hover:bg-blue-200 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                Back to our site.
              </button>
            </Link>
          </div>
          {/* //#endregion */}
        </div>
      </section>
    </div>
        <Footer />
        </>
    )
}

export default Error
