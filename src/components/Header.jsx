import React from "react";

import Button from './Button'
import Button2 from './Button2'

function H(props) {
return <h1 style={{ color: "white" }}class="mb-6 text-2xl font-semibold tracking-tighter text-black sm:text-5xl title-font">{props.h1}</h1>
}

function Header() {
  return (
    <div>
      <section className="text-blueGray-700 ">
        <div className="container flex flex-col px-5 py-24 mx-auto lg:items-center">
          <div className="flex flex-col w-full mb-12 text-left lg:text-center">
            <H h1="A New Way To Chat!" />
            <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 lg:w-2/3">
              Your privacy is our priority, all chats are end-to-end encrypted.
            </p>
          </div>
          <div className="flex justify-left lg:justify-center ">
            <a href="https://app.xoniaapp.com">
              <Button name="Sign Up" />
            </a>
            <a href="https://app.xoniaapp.com">
              <Button2 name="Open in Browser" />
            </a>
          </div>
          {/* //#endregion */}
        </div>
      </section>
    </div>
  );
}

export default Header;
