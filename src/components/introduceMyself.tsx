import React from 'react';

function IntroMyself(){
    return(
        <section className="w-full text-customGreen px-2.5 md:w-80 md:flex md:justify-around md:items-center">
          <div className="w-full my-9 animate-left_center md:text-center">
            <h2 className="text-lg">Marco Rivera</h2>
            <p className="text-base">Developer Front-end</p>
            <p className="text-base hidden">based in México city.</p>
          </div>
          <figure className="flex justify-center items-center w-full h-full my-16 transition-opacity duration-1800 opacity-0 animate-appear">
            <img className="w-64 h-64 rounded-full border-b-2 border-customGreenDark" src="https://i.imgur.com/iKAywhE.png" alt="imagen de avatar" />
          </figure>
        </section>
    )
}

export { IntroMyself };