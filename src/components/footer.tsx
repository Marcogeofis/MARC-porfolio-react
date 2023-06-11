import React, { useState, useEffect } from "react";
import { SocialNetwork } from "./redSocial";

function Footer(){
    const SOCIAL_NETWORKS = [
        {
            socialNetwork: "https://i.imgur.com/AnUi32I.png",
            socialName: "Twitter",
            path: "https://twitter.com/MarcoAn55841249"
        },
        {
            socialNetwork: "https://i.imgur.com/zB13Mdn.png",
            socialName: "Linked in",
            path: "https://www.linkedin.com/in/marco-cortes/"
        },
        {
            socialNetwork: "https://i.imgur.com/yPyX1TD.png",
            socialName: "Github",
            path: "https://github.com/Marcogeofis"
        },
    ]

    const [ socialNetworks, setSocilNetworks ] = useState<Array<mySocialNetwork>>([])
    interface mySocialNetwork{
        socialNetwork: string,
        socialName: string,
        path: string
    }

    useEffect(()=>{
        setSocilNetworks(SOCIAL_NETWORKS)
    },[])



    return (
        <footer className="w-full bg-azulOscuro h-400 flex justify-center items-center flex-col font-dosis">
            <h4 className="text-3xl">Contact me</h4>
            <div className="w-full h-52 flex flex-row justify-center aling-center my-2.5">
                {
                    socialNetworks.map(sn => {
                        return(
                            <SocialNetwork 
                            key={sn.socialName}
                            subs={[{
                                socialNetwork: sn.socialNetwork,
                                socialName: sn.socialName,
                                path: sn.path
                            }]}
                            />
                        )
                    })
                }
            </div>
            <div className="flex justify-center items-center flex-col">
                <span className="pie">Done with love💓</span>
                <span id="rights">
                    All rights reserved &copy; 2023
                </span>
            </div>
	    </footer>
    )
}

export { Footer };