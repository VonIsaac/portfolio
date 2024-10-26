import gitHub from '../assets/icons8-github-50.png';
import linkEnd from '../assets/icons8-linkedin-50.png';
import faceBook from '../assets/icons8-facebook-50.png';
import { useDispatch } from "react-redux";
import { functionsActions } from "../store/functions-slice";
const Footer = () => {
    const dispatch = useDispatch();
    const handleOpenUrl = (e, url) => {
        e.preventDefault();
        dispatch(functionsActions.openUrlNewtab(url))
      }
    return(
       <footer  className=' bg-slate-950 p-10'>
            <div className=' flex flex-col justify-center items-center'>
                <h1 className=' text-slate-400 text-2xl font-extrabold leading-snug my-4'>VON ISAAC</h1>
                <figure className='flex justify-evenly gap-4 items-center mb-3'>
                    <img src={gitHub} alt="icon-1" className=' w-[25px] cursor-pointer ' onClick={(e) => handleOpenUrl(e, 'https://github.com/VonIsaac?tab=repositories')}/>
                    <img src={faceBook} alt="icon-2" className=' w-[25px] cursor-pointer' onClick={(e) => handleOpenUrl(e, 'https://www.facebook.com/von.von1323/')}/>
                    <img src={linkEnd} alt="icon-3" className=' w-[25px] cursor-pointer ' onClick={(e) => handleOpenUrl(e, 'https://www.linkedin.com/in/vonisaac23/')}/>
                </figure>

                <aside className=' text-center'>
                    <p className='text-slate-400 font-bold leading-snug mb-2'>Designed & Built by Von Isaac R. Baban</p>
                    <p className='text-slate-400 font-bold leading-snug'>Copyright &#169; 2024 - All right reserved </p>
                </aside>
            </div>
       </footer>
    )
}

export default Footer