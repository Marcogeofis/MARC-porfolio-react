import React from "react";

interface Props{
    subs: Array<{
        socialNetwork: string,
        socialName: string,
        path: string
    }>
}

function SocialNetwork({subs}: Props){
    return (
        <div className="w-full flex justify-center items-center">
            {
                subs.map(sub => {
                    return(
                        <a href={sub.path}
                            className="flex flex-col justify-center items-center"
                            key={sub.socialNetwork}
                        >
                            <img 
                                className="w-16 h-16"
                                src={sub.socialNetwork}
                                alt="Red social"
                            />
                            <span>{sub.socialName}</span>
                        </a>
                    )
                })
            }
        </div>
    )
}

export { SocialNetwork };