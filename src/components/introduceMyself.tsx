import React from 'react';

function IntroMyself(){
    return(
        <section className="w-full text-customGreen px-2.5">
          <div className="w-full my-9">
            <h2>Marco Rivera</h2>
            <p className="text-xs">Developer Front-end</p>
            <p className="text-xs hidden">based in México city.</p>
          </div>
          <figure className="flex justify-center items-center w-full h-full my-16">
            <img className="w-64 h-64 rounded-full border-b-2 border-customGreenDark" src="https://i.imgur.com/iKAywhE.png" alt="imagen de avatar" />
          </figure>
        </section>
    )
}

export { IntroMyself };