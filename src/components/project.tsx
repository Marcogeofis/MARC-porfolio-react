import React from "react";

interface Props{
    subs: Array<{
        imageProject:string
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
                        className="my-11 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300" key={sub.imageProject}>
                        <figure>
                            <img className="w-full h-52" src={sub.imageProject} alt="Imagen de la página webx" />
                        </figure>
                        <div>
                            <p className="text-sm text-center my-6">{sub.descriptionProject}</p>
                        </div>
                    </a>
                    )
                })}
         </section>
    )
}

export { Project };