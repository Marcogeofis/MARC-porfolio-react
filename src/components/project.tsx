import React from "react";

interface Props{
    subs: Array<{
        imageProject:string
        imageProject2:string
        descriptionProject:string
        path:string
    }>
}

function Project({subs}: Props){

    return(
        <section>
            { subs.map(sub => {
                return (
                    <a href={sub.path}
                        className="my-11 transition ease-in-out delay-150 hover:-translate-y-1 flex flex-col justify-center items-center hover:scale-100 duration-300 md:flex md:flex-row md:justify-center md:items-center xl:flex xl:justify-around xl:itmes-center" key={sub.imageProject}>
                        <figure>
                            <img className="w-full h-52 md:w-400 md:h-300 xl:w-500 xl:h-500" src={sub.imageProject} alt="Imagen de la página webx" />
                        </figure>
                        <figure className="border-2 border-customGreen rounded-lg my-3 md:mx-3 md:w-250 md:h-300 xl:w-300 xl:h-500">
                            <img className="w-150 h-296 rounded-lg md:h-296 xl:w-300 xl:h-496" src={sub.imageProject2} alt="Imagen de la página webx" />
                        </figure>
                        <div className="md:w-150 md:h-300 px-1.5 md:flex md:justify-center md:items-center">
                            <p className="text-sm text-center my-6">{sub.descriptionProject}</p>
                        </div>
                    </a>
                    )
                })}
         </section>
    )
}

export { Project };