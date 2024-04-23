import Header from './Component\'s/Header';
import { TypeAnimation } from 'react-type-animation';
import { useEffect } from 'react';
import myResume from './assets/Von_Isaac_Baban.pdf'
import { mySkills } from './skilssData/mySkills';
import Technologies from './Component\'s/Technologies';
import code1 from './assets/code-1.svg'
import Aos from 'aos';
import 'aos/dist/aos.css'


function App() {


  useEffect(() => {
    Aos.init({duration: 1200})
  }, [])

  const handleDownloadPdf = () => {
    const a = document.createElement('a')
    a.href = myResume;
    a.setAttribute('download', 'Von_Isaac_Baban.pdf')
    a.click()
  }


  return (
    <>
    
        <Header follow = "Follow" />
      <nav > 
     
      
      
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
                      speed={20}
                      repeat={Infinity}
                  />
              </h1>
              
              <h1 className=' ml-2 text-neutral-500 text-3xl font-semibold mb-2'>
                I am passionate about <span className=' text-green-500  '>creating</span> remarkable expirence on the <span className=' text-blue-400'>web</span>
              </h1>
              <button className="select-none rounded ml-2 bg-blue-500 py-1 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                onClick={handleDownloadPdf}>
                My Resume
              </button>
          </div>
        </div>

      </nav>    

        {/*-----------  */}

        <main className=' '>  

          <div className=' bg-gray-900 pt-1'>
            <h1 className=' text-neutral-500 text-center uppercase text-5xl font-extrabold mb-2 mt-5' data-aos = 'fade-down' >
              My <span className= ' text-blue-600'>Skills</span> And
            </h1>

            <h1 className='text-neutral-500 text-center uppercase text-6xl font-extrabold mb-20' data-aos = 'fade-down'>
              <span className=' text-green-500'>Technologies</span>
            </h1>

            <div className=' flex justify-center items-center gap-[230px] mb-5'>
              <img src={code1} alt='code-1' className=' w-[500px]' data-aos = 'fade-up' />    

                  <div className=' grid grid-rows-3 grid-flow-col gap-8' data-aos = 'fade-up' >
                  {mySkills.map((skill, index) => (
                    <ul key={index} className=''>
                      <li className=''>
                        <img src={skill.img} alt={skill.alt} className=' w-[50px]' />
                      </li>
                    </ul>
                  ))} 

                    <Technologies /> 
                  </div>    
                  
              
            </div>
          </div>
          
        </main>
      
    </>
  )
}

export default App
//className=' bg-blue-700 ml-2 font-medium uppercase text-sm px-2 py-1 rounded-md'
