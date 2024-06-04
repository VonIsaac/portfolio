import Header from './Component\'s/Header';
import Skills from './Component\'s/Skills';
import MyName from './Component\'s/MyName';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect, useState} from 'react';
import React from "react";
import Project from './Component\'s/Projects';
import Loading from './Component\'s/Loading';
import AboutMe from './Component\'s/About';
function App() {

  const [isLoading, setIsloading] = useState(false)

  useEffect(() => {
    setIsloading(true)
    setTimeout(()=> {
      setIsloading(false)
    }, 3000)
  }, []);

  useEffect(() => {
    Aos.init({duration: 1800})
  }, []);

  return (
    <>  
     
    {isLoading ? (
        <Loading />
      ) : (
        <>
          <nav>
            <Header follow="Follow" />
            <MyName MyResume="My Resume" />
          </nav>
          <main className="scroll-smooth relative">
            <Skills />
            <Project />
            <AboutMe />
          </main>
        </>
      )}

    </>
  )
} 

export default App
//className=' bg-blue-700 ml-2 font-medium uppercase text-sm px-2 py-1 rounded-md'
