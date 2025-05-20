import { motion } from 'framer-motion'
import Project from '../components/Project'
import { ProjectItem } from '../components/Project'
const Projects = () => {
  const Projects = [
    {
      name: "Funkbox",
      stack: [
        "React",
        "Redux",
        "Sass",
        "Tone.js"
      ],
      path: "https://simonsoold.github.io/FunkBox/",
      background: "#6383ce",
      font: "pressStart"
    },
    {
      name: "Tobedo",
      stack: [
        "React",
        "Redux",
        "Typescript"
      ],
      path: "https://simonsoold.github.io/todo/",
      background: "#242424",
    }
  ]
  
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex flex-col items-end">
        <h2 className="text-3xl self-start mb-8">Projects</h2>
        <p 
         className="text-base justify-self-end text-right"
        >
          Every project starts as a spark—half an idea
        </p>
        <p 
         className="text-base justify-self-end text-right max-w-2/3 mb-2"
        >
          scribbled on a napkin or typed at 2am with questionable spelling.
        </p>
        <p  
         className="text-base justify-self-end text-right"
        >
          But then comes the builder: you. 
        </p>
        <p  
         className="text-base justify-self-end text-right"
        >
          You give it structure. 
        </p>
        <p  
         className="text-base justify-self-end text-right mb-4"
        >
          Code. Style. Purpose.
        </p>
      </div>
      <div className="sm:max-w-64 md:min-w-128 w-full">
        {
          Projects.map((project:ProjectItem, index:number) => {
            return (
              <Project key={index} {...project}/>
            )
          })
        }
      </div>
    </motion.div>
  )
}
export default Projects