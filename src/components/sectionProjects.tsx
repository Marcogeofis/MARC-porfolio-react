import React, { useEffect, useState } from "react";
import { Project } from "./project";

function SectionProject(){

  const INITIAL_PROJECTS = [{
      imageProject:"https://i.imgur.com/qfbrCYY.png",
      descriptionProject:"This is a simple interface that shows the PSG women's players.",
    },
    {
      imageProject:"https://i.imgur.com/BxH4arm.png",
      descriptionProject:"This exercise helps me to practice using react to do request to an api",
    },
    {
      imageProject:"https://i.imgur.com/GLuFMIW.png",
      descriptionProject:"The project's objective consist that you can record your sugar level and pressure level. Then with these data we can plot theme and seeing the behavior of data",
    }
  ]

  interface Sub{
    imageProject:string
    descriptionProject:string
  }

  const [ project, SetProject ] = useState<Array<Sub>>([])

  useEffect(() => {
    SetProject(INITIAL_PROJECTS)
  },[])

  
  return (
      <section className="w-full my-6 text-customGreen px-2.5">
        <h3 className="my-11 text-xl">Projects</h3>
        {
          project.map(res => {
            return (
              <Project subs={[{
                imageProject: res.imageProject,
                descriptionProject: res.descriptionProject
              }]}
              />
            )
          })
        }

      </section>
  )
}

export { SectionProject };