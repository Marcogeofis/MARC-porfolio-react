import React from "react";

function MySkills (){
    return (
        <section className="w-full flex flex-col justify-center items-center">
            <div className="w-full mb-5 text-azulOscuro flex flex-col justify-center items-center">
                <p>Marco Antonio Rivera Cortés</p>
                <p>I'm from Mexico</p>
                <p>Developer Frontend</p>
            </div>
            <div className="w-full my-10 flex flex-col py-12 md:w-80 md:flex md:flex-row md:justify-center md:items-center">
                <div className="w-full pl-5 my-10 text-azulOscuro flex flex-col justify-start md:h-300">
                    <h3 className="w-full my-10  flex flex-col justify-start underline decoration-customGreen font-bold">Skillset</h3>
                    <p>Structure Implementation</p>
                    <p>Desing</p>
                    <p>Behavior</p>
                    <p>Semantic content</p>
                    <p>Response capacity + performance</p>
                    <p>Responsive design</p>
                    <p>Web applications</p>
                    <p>Api consumption</p>
                </div>
                <div className="w-full pl-5 my-10 flex flex-col justify-start text-azulOscuro md:h-300">
                    <h3 className="w-full my-10 flex flex-col justify-start underline decoration-customGreen font-bold">Experience</h3>
                    <p>PSG women's team</p>
                    <p>Api request Rick and Morty</p>
                    <p>Sugar Level</p>
                </div>
                <div className="w-full pl-5 my-10 flex flex-col justify-start text-azulOscuro md:h-300">
                    <h3 className="w-full my-10 flex flex-col justify-start underline decoration-customGreen font-bold">Education</h3>
                    <p>Engineering Geophysical</p>
                </div>
            </div>
        </section>
    )
}

export { MySkills }