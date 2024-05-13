import Header from './Component\'s/Header';
import Skills from './Component\'s/Skills';
import MyName from './Component\'s/MyName';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import React from "react";
import Project from './Component\'s/Projects';

function App() {

  useEffect(() => {
    Aos.init({duration: 1800})
  }, []);


  
  return (
    <>
      
      <nav > 
      <Header follow = "Follow" />
      <MyName MyResume= "My Resume" />

      
      </nav>   
        {/*-----------  */}
        <main className=' scroll-smooth relative'> 
          <Skills  />
          <Project />
        </main>
      
    </>
  )
}

export default App
//className=' bg-blue-700 ml-2 font-medium uppercase text-sm px-2 py-1 rounded-md'
