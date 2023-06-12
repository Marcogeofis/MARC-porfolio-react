import React, { useEffect, useState } from "react";

function Lenguages(){

    const LENGUAGES = [{
            lenguage: 'https://i.imgur.com/bXiy3xo.png',
            nameLenguages: 'Python'
        },
        {
            lenguage: 'https://i.imgur.com/EZ16fhA.png',
            nameLenguages: 'HTML'
        },
        {
            lenguage: 'https://i.imgur.com/SFQyZtQ.png',
            nameLenguages: 'CSS'
        },
        {
            lenguage: 'https://i.imgur.com/01W8LMa.png',
            nameLenguages: 'Javascript'
        },
        {
            lenguage: 'https://i.imgur.com/DK9T8To.png',
            nameLenguages: 'Typescript'
        },
        {
            lenguage: 'https://i.imgur.com/0mqi0Bk.png',
            nameLenguages: 'MySQL'
        },
        {
            lenguage: 'https://i.imgur.com/8E18RwK.png',
            nameLenguages: 'React'
        },
        {
            lenguage: 'https://i.imgur.com/alGMO3h.png',
            nameLenguages: 'Fortran'
        }

    ]

    interface allLenguages{
        lenguage: string,
        nameLenguages: string
    }

    const [lenguages, setLenguages] = useState<Array<allLenguages>>([])

    useEffect(()=>{
        setLenguages(LENGUAGES)
    },[])

    return(
        <section className="w-full mb-24 flex flex-col">
                    <div className="w-full mb-5 text-customGreen flex flex-col justify-center items-center">
                        <h3 className="text-2xl">Programming Lenguages</h3>
                    </div>
                    <div className="w-full px-2 gap-2.5 my-10 flex justify-center items-center flex-wrap">
                        {
                            lenguages.map(res => {
                                return(
                                    <figure key={res.nameLenguages} className="flex justify-center items-center flex-col">
                                        <img className="w-16 h-16 xl:w-100 xl:h-100" src={res.lenguage} alt={res.nameLenguages} />
                                        <p className="text-azulOscuro">{res.nameLenguages}</p>
                                    </figure>
                                )
                            })
                        }
                    </div>
        </section>
    )
}

export { Lenguages };