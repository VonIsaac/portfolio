import heart from '../assets/icons8-heart-50.png';
import vLogo from '../assets/v-logo.png'

export default function Header({follow}) {

    const handleClick = () => {
        console.log('clickBTN')
      }
    

    return(

      <header className='sticky top-0  z-50'>
          
      <div className='   bg-neutral-950  px-2 py-1 rounded-md mt-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-3'>
     
      <ul className=' flex items-center justify-between '>
        <li><img src={vLogo} alt="icon-svg" className=' w-[4rem]'/></li>
        <li><h1 className=' text-gray-500 font-bold font-mono text-2xl'>VON ISAAC</h1></li>
        <li>
          <button onClick={ handleClick} className=' text-neutral-500 font-bold hover:text-slate-700  hover:ease-in-out hover:duration-500 text-lg'>
              <div className=' flex   gap-1'>
                  <span>{follow}</span>
                  <img src={heart} alt="heart"  className=' w-[25px]'/>   
              </div>
              
            
            
          </button>
        </li>
      </ul>  
    </div>   
      </header>
      
    )
  }
/*sticky top-0 left-0 right-0*/