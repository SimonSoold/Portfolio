import './App.css'
import { useState, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Projects from './pages/Projects'
import About from './pages/About'
import './index.css'
import JavascriptLogo from "./assets/Javascript.svg"
import GoLogo from "./assets/Go.svg"
import ReduxLogo from "./assets/Redux.svg"
import ReactLogo from "./assets/React.svg"
import PostGresLogo from "./assets/Postgres.svg"
import ViteLogo from "./assets/Vite.svg"
import NodeLogo  from "./assets/Node.svg"
import Simon from "./assets/Simon.jpg"
import { ScrollContext, IsNear } from './context/ScrollContext'
import ArrowUp from "./assets/entypo_arrow-with-circle-up.svg"
import ArrowDown from "./assets/entypo_arrow-with-circle-down.svg"
import ScrollPositionWrapper from './components/ScrollPosition'
import Facebook from "./assets/Facebook.svg"
import Instagram from "./assets/Instagram.svg"
import Mail from "./assets/Mail.svg"
function App() {
  const containerRef = useRef(null)
  const [isNear, setIsNear] = useState<IsNear>({
    isNearTop: false,
    isNearBottom: false
  })
  return (
    <>
      <ScrollContext.Provider value={{isNear,setIsNear}}>
        <BrowserRouter>
          <header className="text-black p-2 w-full border-b border-black border-box">
            <h1 className="text-5xl font-bold">Portfolio</h1>
            <p className='text-lg'>Simon Soold</p>
          </header>
          <nav className="p-2 h-fit border-box flex justify-end items-end">
            <Link className='text-lg text-black hover:text-gray-500 transition-colors duration-200' to="/">About</Link>
            <Link className='ml-2 text-lg text-black hover:text-gray-500 transition-colors duration-200' to="/projects">Projects</Link>
          </nav>
          <section className="h-fit flex flex-columns justify-end items-start p-2 border-box">
            <img className="sm:size-4 md:size-6 mr-1" src={GoLogo}/>
            <img className="sm:size-4 md:size-6 mr-1" src={JavascriptLogo}/>
            <img className="sm:size-4 md:size-6 mr-1" src={ReactLogo}/>
            <img className="sm:size-4 md:size-6 mr-1" src={ReduxLogo}/>
            <img className="sm:size-4 md:size-6 mr-1" src={NodeLogo}/>
            <img className="sm:size-4 md:size-6 mr-1" src={ViteLogo}/>
            <img className="sm:size-4 md:size-6 mr-1" src={PostGresLogo}/>
          </section>
          <main className="p-2 h-full box-border text-black">
            <ScrollPositionWrapper containerRef={containerRef}>
              <div ref={containerRef} className="h-full w-full overflow-y-auto scrollbar-hidden">
                <Routes>
                      <Route path="/" element={<About />} />
                      <Route path="/projects" element={<Projects />} />
                </Routes>
              </div>
            </ScrollPositionWrapper>
          </main>
          <footer className="p-2 w-full bg-black flex justify-between">
            <div className="border-box flex items-end w-1/4">
              <a 
                href="https://www.facebook.com/simon.soold/"
              >
                <img className="size-6 mr-1" src={Facebook}/>
              </a>
              <a 
                href="https://www.instagram.com/intheeyesofsimonsoold"
              >
                <img className="size-6" src={Instagram}/>
              </a>
              <a 
                href="soold.simon@gmail.com"
                style={{marginLeft:"4px"}}
              >
                <img className="size-6" src={Mail}/>
              </a>
            </div>
            <p className="w-2/3 text-white text-base whitespace-nowrap flex flex-col items-end justify-between border-box">
              <span>
                Probably the best way to turn 
              </span>
              <span>
                caffeine into features.
              </span>
            </p>
          </footer>
          <div className="selfImg opacity-0 sm:opacity-100">
            <img src={Simon} alt="Faded Image" className="h-full object-cover opacity-22 grayscale pointer-events-none select-none mask-fade"
            />
          </div>
          <div className="arrowContainer">
            {
              isNear.isNearBottom
              ?
              <img className="size-8 mr-1 bg-white" src={ArrowUp} />
              :
              null
            }
            {
              isNear.isNearTop
              ? 
              <img className="size-8 mr-1 bg-white" src={ArrowDown} />
              :
              null
            }
          </div>
        </BrowserRouter>
      </ScrollContext.Provider>
    </>
  )
}

export default App
