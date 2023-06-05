import React from "react";

interface Props{
    subs: Array<{
        imageProject:string
        descriptionProject:string
    }>
}

function Project({subs}: Props){

    return(
        <section>
            { subs.map(sub => {
                return (
                    <div className="my-11" key={sub.imageProject}>
                        <figure>
                            <img className="w-full h-52" src={sub.imageProject} alt="Imagen de la página webx" />
                        </figure>
                        <div>
                            <p className="text-sm text-center my-6">{sub.descriptionProject}</p>
                        </div>
                    </div>
                    )
                })}
         </section>
    )
}

export { Project };