import React, { useEffect, useState } from "react";
import { Project } from "./project";

function SectionProject(){

  const INITIAL_PROJECTS = [{
      imageProject:"https://i.imgur.com/qfbrCYY.png",
      descriptionProject:"This is a simple interface that shows the PSG women's players.",
      path:"https://marcogeofis.github.io/PSG-Women/"
    },
    {
      imageProject:"https://i.imgur.com/BxH4arm.png",
      descriptionProject:"This exercise helps me to practice using react to do request to an api",
      path:"https://marcogeofis.github.io/request-to-Rick-MortyAPI/"
    },
    {
      imageProject:"https://i.imgur.com/GLuFMIW.png",
      descriptionProject:"The project's objective consist that you can record your sugar level and pressure level. Then with these data we can plot theme and seeing the behavior of data",
      path:"https://marcogeofis.github.io/frontend-glucometro/"
    }
  ]

  interface Sub{
    imageProject:string
    descriptionProject:string
    path:string
  }

  const [ project, SetProject ] = useState<Array<Sub>>([])

  useEffect(() => {
    SetProject(INITIAL_PROJECTS)
  },[])

  
  return (
      <section className="w-full my-6 text-customGreen px-2.5">
        <h3 id="Projects" className="my-11 text-xl">Projects</h3>
        {
          project.map(res => {
            return (
              <Project key={res.imageProject} subs={[{
                imageProject: res.imageProject,
                descriptionProject: res.descriptionProject,
                path: res.path
              }]}
              />
            )
          })
        }

      </section>
  )
}

export { SectionProject };