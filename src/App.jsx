import icon from './assets/icons8-valorant.svg'
import heart from './assets/icons8-heart-50.png';
import { TypeAnimation } from 'react-type-animation';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import './App.css'

function App() {


  useEffect(() => {
    Aos.init({duration: 1200})
  })

  return (
    <>
      
      <nav > 
      <div className=' bg-transparent bg-slate-800 px-2 py-1 rounded-md mt-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-3'>
        <ul className=' flex justify-between items-center'>
            <li><img src={icon} alt="icon-svg" /></li>
            <li><h1 className=' text-gray-500 font-bold font-mono text-2xl'>VON ISAAC</h1></li>
            <li>
              <button>
                  <div className=' flex gap-2 '>
                  <p className=' text-neutral-500 font-bold hover:text-slate-700 hover:ease-in-out hover:duration-500 text-lg'>
                    Follow
                  </p>
                  <img src={heart} alt="heart"  className=' w-[25px]'/>
                  </div>
              </button>
            </li>
          </ul>  
      </div>
        

        <div className=' relative bottom-28 right-36 h-screen flex justify-center items-center text-left'>
          <div data-aos = 'fade-right'>
              <p className=' text-neutral-500 font-medium mb-1'>Hi there, I am</p>

              <h1 className=' text-neutral-500 font-semibold text-4xl ml-2 mb-1 font-mono'>
                <TypeAnimation
                      sequence={[
                        'Von Isaac R. Baban',
                        1000, 
                        'Front End Developer',
                        1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                  />
              </h1>
              
              <h1 className=' ml-2 text-neutral-500 text-3xl font-semibold'>
                I am passionate about <span className=' text-green-500  '>creating</span> remarkable expirence on the <span className=' text-blue-400'>web</span>
              </h1>
          </div>
        </div>

      </nav>    

        {/*-----------  */}

        <main className=' '>  
        
          
        </main>
      
    </>
  )
}

export default App
