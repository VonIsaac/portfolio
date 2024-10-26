import vLogo from '../assets/V-logoss.png'
import { useRef } from 'react';
import Modal from './Modal';
export default function Header({follow}) {
    const opneModal = useRef()
    const handleClick = () => {
        console.log('clickBTN')
        opneModal.current.open()
      }

      
    

    return(

      <>
        <Modal ref={opneModal} buttons = 'Close' />

        <header className='sticky top-2  z-50' id='header-sticky'>  
          <div className='px-2 py-1 rounded-md mt-2 mb-3 flex justify-center items-start '>
         
            <ul className=' flex items-center justify-between pr-3 bg-transparent bg-slate-900 shadow-[0_3px_10px_rgb(0,0,0,0.2)]  w-3/4 rounded-xl '>
                <li><img src={vLogo} alt="icon-svg" className=' w-[4rem] ' id='header-img'/></li>
                <li><h1 className=' text-neutral-500 font-bold font-mono  text-2xl hover:text-cyan-400 transition duration-500 ease-in-out' id='header-name'>VON ISAAC</h1></li>
                <li>
                  <button
                      id='header-btn'
                      onClick={ handleClick} 
                      className=' text-neutral-500 font-extrabold hover:text-cyan-400 transition duration-500 ease-in-out text-xl font-mono '>
                      <div className=' flex   gap-1'>
                          <span>{follow}</span>
                          {/*<img src={heart} alt="heart"  className=' w-[25px]'/> */}
                      </div>              
                    
                  </button>
                </li>
            </ul>  
          </div>   
        </header>
      </>
      
      
    )
  }
/*sticky top-0 left-0 right-0*/

{/*shadow-[0_3px_10px_rgb(0,0,0,0.2)] */}