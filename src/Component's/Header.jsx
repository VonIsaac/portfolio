import icon from '../assets/icons8-valorant.svg';
import heart from '../assets/icons8-heart-50.png'

export default function Header({follow}) {

    const handleClick = () => {
        console.log('clickBTN')
      }
    

    return(
        <header className=' bg-transparent bg-slate-800 px-2 py-1 rounded-md mt-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-3'>
     
        <ul className=' flex justify-between items-center'>
          <li><img src={icon} alt="icon-svg" /></li>
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
      </header>
    )
}
//