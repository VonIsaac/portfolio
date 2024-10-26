import { mySkills } from "../skilssData/mySkills"
import Technologies from "./Technologies"
import code1 from '../assets/Programming-amico.svg'
import Aos from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css'


const Skills = () =>{

    useEffect(() => {
        Aos.init({duration: 1800})
      }, []);


    return(

        <div className='  pt-1 pb-3 mb-[150px] '>
           
            <h1 className=' text-neutral-500 text-center uppercase text-5xl font-extrabold mb-2 mt-5 ' data-aos = 'fade-down' >
              My <span className= ' text-cyan-400'>Skills</span> And
            </h1>

            <h1 className='text-neutral-500 text-center uppercase text-6xl font-extrabold mb-20 ' data-aos = 'fade-down'>
              <span className=' text-cyan-400'>Technologies</span>
            </h1>

            <div className=' flex justify-center items-center gap-[230px] mb-5'>

              <img src={code1} alt='code-1' className=' w-[450px]' data-aos = 'fade-up' />    

                  <div className=' grid grid-rows-3 grid-flow-col gap-6'  >
                  {mySkills.map((skill, index) => (
                    <ul key={index} className=' cursor-pointer'>
                      <li className=' bg-gray-800 py-3 px-2 rounded-md hover:bg-zinc-800 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ' data-aos = 'fade-up' >
                        <img src={skill.img} alt={skill.alt} className=' w-[50px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] '  />
                      </li>
                    </ul>
                  ))} 

                    <Technologies data-aos = 'fade-up'  /> 
                  </div>    
                  
              
            </div>
          </div>
    )
}

export default Skills